import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Her ay için 4 farklı başlık stili — ay numarasına göre döngüsel seçilir
const AY_BASLIKLAR: Record<number, string[]> = {
  1:  ["Ocak'ta Biz",     "Ocak'tan Kareler",     "Ocak'ın İşleri",      "Ocak'ta Neler Yaptık"],
  2:  ["Şubat'ta Biz",    "Şubat'tan Kareler",    "Şubat'ın İşleri",     "Şubat'ta Neler Yaptık"],
  3:  ["Mart'ta Biz",     "Mart'tan Kareler",      "Mart'ın İşleri",      "Mart'ta Neler Yaptık"],
  4:  ["Nisan'da Biz",    "Nisan'dan Kareler",     "Nisan'ın İşleri",     "Nisan'da Neler Yaptık"],
  5:  ["Mayıs'ta Biz",    "Mayıs'tan Kareler",     "Mayıs'ın İşleri",    "Mayıs'ta Neler Yaptık"],
  6:  ["Haziran'da Biz",  "Haziran'dan Kareler",   "Haziran'ın İşleri",  "Haziran'da Neler Yaptık"],
  7:  ["Temmuz'da Biz",   "Temmuz'dan Kareler",    "Temmuz'un İşleri",   "Temmuz'da Neler Yaptık"],
  8:  ["Ağustos'ta Biz",  "Ağustos'tan Kareler",   "Ağustos'un İşleri",  "Ağustos'ta Neler Yaptık"],
  9:  ["Eylül'de Biz",    "Eylül'den Kareler",     "Eylül'ün İşleri",    "Eylül'de Neler Yaptık"],
  10: ["Ekim'de Biz",     "Ekim'den Kareler",      "Ekim'in İşleri",     "Ekim'de Neler Yaptık"],
  11: ["Kasım'da Biz",    "Kasım'dan Kareler",     "Kasım'ın İşleri",    "Kasım'da Neler Yaptık"],
  12: ["Aralık'ta Biz",   "Aralık'tan Kareler",    "Aralık'ın İşleri",   "Aralık'ta Neler Yaptık"],
};

const RECENT_LIMIT = 6;

export function GET() {
  const aylikDir = path.join(process.cwd(), 'public', 'gallery', 'yapilan-isler');

  if (!fs.existsSync(aylikDir)) {
    return NextResponse.json({ months: [], latest: null, recent: null });
  }

  const months: { yil: number; ay: number; baslik: string; adet: number }[] = [];

  try {
    const yillar = fs.readdirSync(aylikDir)
      .filter(f => /^\d{4}$/.test(f) && fs.statSync(path.join(aylikDir, f)).isDirectory())
      .sort((a, b) => Number(b) - Number(a));

    for (const yil of yillar) {
      const yilDir = path.join(aylikDir, yil);
      const aylar = fs.readdirSync(yilDir)
        .filter(f => /^\d{2}$/.test(f) && fs.statSync(path.join(yilDir, f)).isDirectory())
        .sort((a, b) => Number(b) - Number(a));

      for (const ay of aylar) {
        const ayDir = path.join(yilDir, ay);
        const fotograflar = fs.readdirSync(ayDir)
          .filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));

        if (fotograflar.length === 0) continue;

        const ayNum = Number(ay);
        const yilNum = Number(yil);
        const basliklar = AY_BASLIKLAR[ayNum];
        const baslik = basliklar[(yilNum + ayNum) % basliklar.length];
        months.push({ yil: yilNum, ay: ayNum, baslik, adet: fotograflar.length });
      }
    }
  } catch {
    return NextResponse.json({ months: [], latest: null, recent: null });
  }

  if (months.length === 0) {
    return NextResponse.json({ months: [], latest: null, recent: null });
  }

  // En fazla RECENT_LIMIT fotoğraf toplanana kadar eski aylara geç
  const recentPhotos: { slug: string; id: number }[] = [];
  outer: for (const m of months) {
    const slug = `yapilan-isler/${m.yil}/${String(m.ay).padStart(2, '0')}`;
    for (let i = 1; i <= m.adet; i++) {
      recentPhotos.push({ slug, id: i });
      if (recentPhotos.length >= RECENT_LIMIT) break outer;
    }
  }

  // Başlık: tek ay kullanıldıysa o ayın adı, birden fazla ay varsa genel
  const ilkAy = months[0];
  const ikinciAyBasliyor = recentPhotos.some(p => !p.slug.includes(`${ilkAy.yil}/${String(ilkAy.ay).padStart(2, '0')}`));
  const recentBaslik = ikinciAyBasliyor ? 'Son Çalışmalarımız' : ilkAy.baslik;

  return NextResponse.json({
    months,
    latest: months[0],
    recent: { baslik: recentBaslik, photos: recentPhotos },
  });
}
