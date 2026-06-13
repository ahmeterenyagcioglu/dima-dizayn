# Dima Dizayn & Organizasyon — Web Sitesi

**Bergama (İzmir) merkezli** bir organizasyon firmasının kurumsal tanıtım sitesi. Düğün, nişan, kına, sünnet ve doğum günü organizasyonlarını; fotoğraf/video çekimi, müzik ve dekorasyon hizmetlerini potansiyel müşterilere tanıtmak amacıyla hazırlanmıştır.

Canlı site: [dimadizayn.com](https://dimadizayn.com)

---

## İçindekiler

- [Teknoloji Stack](#teknoloji-stack)
- [Özellikler](#özellikler)
- [Klasör Yapısı](#klasör-yapısı)
- [Kurulum](#kurulum)
- [Geliştirme](#geliştirme)
- [Derleme ve Yayına Alma](#derleme-ve-yayına-alma)
- [Galeri Yönetimi](#galeri-yönetimi)
- [Sayfalar](#sayfalar)
- [Tasarım Sistemi](#tasarım-sistemi)
- [SEO](#seo)
- [İletişim Bilgileri](#i̇letişim-bilgileri)

---

## Teknoloji Stack

| Katman | Teknoloji | Versiyon |
|--------|-----------|---------|
| Framework | [Next.js](https://nextjs.org/) | 14.x |
| Dil | TypeScript | 5.x |
| Stil | Tailwind CSS | 3.x |
| Animasyon | Framer Motion | 11.x |
| Slider | Swiper.js | 12.x |
| İkonlar | Lucide React | 0.460.x |
| Font (başlık) | Playfair Display | Google Fonts |
| Font (metin) | DM Sans | Google Fonts |

---

## Özellikler

- **Fotoğraf galerisi** — 9 kategoride 100+ fotoğraf; tab filtresi, lightbox modal, klavye navigasyonu (← → Esc)
- **Lightbox** — Kategori içinde tüm fotoğrafları gezme; dışarı tıkla veya Esc ile kapatma
- **URL hash yönlendirmesi** — `/galeri#kina` gibi linkler ilgili bölüme smooth scroll yapar; diğer sayfalardan direkt bölüme yönlendirme desteklenir
- **WhatsApp butonu** — Sayfanın her yerinde sabit, 3 saniye sonra rastgele çağrı-eylem mesajı gösteren tooltip
- **Müşteri yorumları** — Swiper slider, her yüklemede rastgele sıralanır
- **Duyuru bandı** — Ana sayfada rastgele dönen rezervasyon mesajı
- **Google Maps** — Ana sayfa ve İletişim sayfasında gömülü harita
- **Responsive tasarım** — Mobil öncelikli, tüm ekran boyutlarına uyumlu
- **SEO** — JSON-LD structured data, Open Graph, Twitter Card, robots direktifleri, Google Search Console doğrulama
- **PWA hazır** — `site.webmanifest`, favicon seti (16/32/192/512px), Apple Touch Icon

---

## Klasör Yapısı

```
DimaDizayn/
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Global layout: Header, Footer, WhatsApp, JSON-LD SEO
│   ├── globals.css                 # Tailwind base + özel CSS değişkenleri
│   ├── not-found.tsx               # 404 sayfası
│   ├── page.tsx                    # Ana sayfa (/)
│   ├── galeri/
│   │   ├── layout.tsx              # Galeri sayfası metadata
│   │   └── page.tsx                # Galeri sayfası (/galeri)
│   ├── hizmetlerimiz/
│   │   ├── layout.tsx              # Hizmetlerimiz metadata
│   │   └── page.tsx                # Hizmetlerimiz sayfası (/hizmetlerimiz)
│   ├── hakkimizda/
│   │   ├── layout.tsx              # Hakkımızda metadata
│   │   └── page.tsx                # Hakkımızda sayfası (/hakkimizda)
│   └── iletisim/
│       ├── layout.tsx              # İletişim metadata
│       └── page.tsx                # İletişim sayfası (/iletisim)
│
├── components/                     # Paylaşılan bileşenler
│   ├── Header.tsx                  # Sticky header, aktif link göstergesi, mobil hamburger menü
│   ├── Footer.tsx                  # Sosyal medya linkleri, adres, telif hakkı
│   ├── WhatsAppButton.tsx          # Sabit WhatsApp butonu + rastgele tooltip
│   └── GallerySection.tsx          # Mini galeri bileşeni
│
├── public/                         # Statik dosyalar (Next.js tarafından doğrudan sunulur)
│   ├── hero.webp                   # Ana sayfa hero görseli
│   ├── about-hero.webp             # Hakkımızda hero görseli
│   ├── about-vertical.webp         # Hakkımızda dikey fotoğraf
│   ├── hizmetler-hero.webp         # Hizmetlerimiz hero görseli
│   ├── contact-hero.webp           # İletişim hero görseli
│   ├── logo.svg                    # Logo (header'da kullanılır)
│   ├── site.webmanifest            # PWA manifest
│   ├── favicon.ico / *.png         # Favicon seti
│   └── gallery/                    # Galeri fotoğrafları
│       ├── 1.webp … 6.webp         # Ana sayfa mini galeri görselleri
│       ├── kina/                   # Kına (18 fotoğraf: 1.webp – 18.webp)
│       ├── nisan/                  # Nişan (19 fotoğraf)
│       ├── dugun-nikah/            # Düğün & Nikah (13 fotoğraf)
│       ├── sunnet/                 # Sünnet (17 fotoğraf)
│       ├── dogum-gunu/             # Doğum Günü (10 fotoğraf)
│       ├── fotograf-video/         # Fotoğraf & Video (4 fotoğraf)
│       ├── muzik/                  # Müzik (9 fotoğraf)
│       ├── isiklandirma/           # Işıklandırma (9 fotoğraf)
│       └── diger-hizmetler/        # Diğer Hizmetler (9 fotoğraf)
│
├── tailwind.config.js              # Özel renk paleti ve font tanımları
├── next.config.js                  # Next.js yapılandırması
├── tsconfig.json                   # TypeScript yapılandırması
└── package.json
```

---

## Kurulum

### Gereksinimler

- [Node.js](https://nodejs.org/) **18.17** veya üzeri
- **npm 9+** (Node.js ile birlikte gelir)

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/ahmeterenyagcioglu/dima-dizayn.git
cd dima-dizayn

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

---

## Geliştirme

```bash
# Geliştirme sunucusu (hot reload ile)
npm run dev

# TypeScript ve lint kontrolleri
npm run lint
```

### Path Alias

`@/` proje kök dizinine yönlendirilmiştir. Örnek kullanım:

```ts
import Header from '@/components/Header';
import Footer from '@/components/Footer';
```

---

## Derleme ve Yayına Alma

```bash
# Production build oluştur
npm run build

# Production sunucusunu başlat
npm run start
```

`npm run build` çıktısı `.next/` klasörüne yazılır. Sunucu gerektiren bir Node.js çıktısıdır; **Vercel**, **Railway** veya Node.js çalıştırabilen herhangi bir platform ile yayına alınabilir.

### Vercel ile Deploy (Önerilen)

1. [vercel.com](https://vercel.com) üzerinde hesap oluştur
2. GitHub reposunu Vercel'e bağla
3. `main` branch'e her push'ta otomatik deploy tetiklenir

---

## Galeri Yönetimi

Galeri fotoğrafları `public/gallery/<kategori>/` klasörlerinde `.webp` formatında, sıralı numaralarla (`1.webp`, `2.webp`, ...) saklanır.

### Mevcut Fotoğrafa Fotoğraf Eklemek

**1. Görseli doğru klasöre koy:**

```
public/gallery/kina/19.webp
```

**2. `app/galeri/page.tsx` içindeki `ALL_PHOTOS` dizisine ekle:**

```ts
const ALL_PHOTOS = [
  { slug: 'kina', id: 1 },
  // ... mevcut fotoğraflar ...
  { slug: 'kina', id: 19 }, // <-- yeni fotoğraf
];
```

Hepsi bu. `limit` değerini değiştirmene gerek yok; modal'da kategorinin tüm fotoğrafları zaten gezilir.

### Yeni Kategori Eklemek

1. `public/gallery/yeni-kategori/` klasörü oluştur, görselleri ekle (`1.webp`, `2.webp`, ...)
2. `ALL_PHOTOS` dizisine yeni kategorinin fotoğraflarını ekle:
   ```ts
   { slug: 'yeni-kategori', id: 1 },
   { slug: 'yeni-kategori', id: 2 },
   ```
3. `KATEGORILER` dizisine yeni kategoriyi ekle:
   ```ts
   { slug: 'yeni-kategori', title: 'Yeni Kategori', limit: 6 }
   ```
4. Gerekirse `getFilteredCategories()` fonksiyonundaki **Konsept / Hizmet** tab mantığını güncelle.

### Görsel Formatı ve Boyut Önerileri

| Kullanım | Format | Boyut |
|----------|--------|-------|
| Galeri önizleme | WebP | 1200 × 900 px (4:3) |
| Galeri modal | WebP | Maks. 1920 × 1080 px |
| Hero görseller | WebP | 1920 × 1080 px |
| Hakkımızda dikey | WebP | 900 × 1200 px (3:4) |

---

## Sayfalar

### Ana Sayfa `/`

- **Hero:** `hero.webp` arka plan, blur placeholder ile optimize edilmiş `next/image`
- **Duyuru bandı:** `useEffect` ile rastgele mesaj seçimi (4 farklı metin havuzu)
- **Hizmet kartları:** 3 kart, galeri hash linklerine yönlendiriyor
- **Hizmet bölgeleri:** Badge formatında (Bergama, Dikili, Kınık, Soma, Manisa...)
- **Mini galeri:** 6 fotoğraf grid'i, hover efekti, galeri linklerine yönlendirme
- **Konum:** Google Maps iframe

### Galeri `/galeri`

- **Tab sistemi:** Tüm Kareler / Konsept Kurulumları / Ek Hizmetlerimiz
- **Fotoğraf karıştırma:** `useEffect` ile her kategori kendi içinde rastgele sıralanır
- **Önizleme limiti:** Her kategoride yalnızca belirli sayıda fotoğraf gösterilir (`limit`)
- **Lightbox modal:** Kategori genelinde sol/sağ ok, `←` `→` klavye kısayolları, Esc ile kapatma
- **Hash scroll:** `/galeri#kina` formatındaki URL'ler ilgili bölüme smooth scroll yapar

### Hizmetlerimiz `/hizmetlerimiz`

- Hero banner (`hizmetler-hero.webp`)
- 14 hizmet kartı (Lucide ikonlar + galeri hash linkleri)
- CTA bölümü → `/iletisim`

### Hakkımızda `/hakkimizda`

- Hero banner (`about-hero.webp`)
- Vizyon metni + dikey fotoğraf (`about-vertical.webp`)
- İstatistikler: 500+ müşteri, 5+ yıl, 200+ organizasyon, 40+ konsept
- "Neden Biz?" 3 madde
- Swiper slider: 10 müşteri yorumu, her yüklemede rastgele sıralı
- CTA → `/iletisim`

### İletişim `/iletisim`

- Hero banner (`contact-hero.webp`)
- İletişim bilgileri: telefon, e-posta, adres
- Sosyal medya linkleri (Instagram, TikTok, YouTube, Facebook)
- WhatsApp CTA butonu
- Google Maps iframe
- Alt CTA → `/galeri`

---

## Tasarım Sistemi

### Renk Paleti

```js
// tailwind.config.js içinde tanımlı
gold: {
  50:  '#fdf9f0',   // En açık altın tonu
  100: '#f9f0d9',
  200: '#f2dfb3',
  300: '#e8c87d',
  400: '#dda94a',
  500: '#d4922a',   // Ana altın rengi
  600: '#c67820',   // Hover durumu
  700: '#a45a1d',
  800: '#85481f',
  900: '#6d3c1d',
  950: '#3a1e0d',   // En koyu
}

dima: {
  cream: '#faf8f5', // Sayfa genel arka planı
  grey:  '#6b7280', // Yardımcı / ikincil metin
}
```

### Tipografi

```
font-serif  →  Playfair Display  (h1–h3, logo)
font-sans   →  DM Sans           (gövde metni, butonlar, navigasyon)
```

### Sık Kullanılan Tailwind Kalıpları

```
border border-gold-200/40              → İnce altın kenarlık
bg-dima-cream/50                       → Şeffaf krem arka plan
hover:shadow-md hover:scale-[1.02]     → Kart hover efekti
bg-gradient-to-r from-transparent via-gold-400 to-transparent  → Gold şerit çizgi
```

---

## SEO

`app/layout.tsx` içinde global SEO yapılandırması bulunur:

| Alan | Detay |
|------|-------|
| **Meta tags** | `title`, `description`, `keywords` — Bergama ve organizasyon anahtar kelimeleri |
| **Open Graph** | Facebook / WhatsApp paylaşım önizlemesi için `og:image` dahil tam meta |
| **Twitter Card** | `summary_large_image` formatı |
| **JSON-LD** | `LocalBusiness` şeması — işletme adı, adres, telefon, koordinatlar, çalışma saatleri, sosyal medyalar, ortalama değerlendirme |
| **robots** | `index: true, follow: true`, Googlebot için genişletilmiş direktifler |
| **Google Search Console** | Doğrulama kodu `verification.google` alanında yerleşik |

Her alt sayfa kendi `layout.tsx`'i ile `<title>` etiketini override eder.

---

## İletişim Bilgileri

Aşağıdaki bilgiler birden fazla dosyada sabit olarak tanımlıdır. Değiştirmeniz gerekirse **tüm dosyaları** güncellemeyi unutmayın.

| Bilgi | Değer | Geçtiği Dosyalar |
|-------|-------|-----------------|
| Telefon | `+90 535 367 99 31` | `layout.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `iletisim/page.tsx` |
| E-posta | `bilgi@dimadizayn.com` | `iletisim/page.tsx` |
| Adres | Ertuğrul Mah., İsmet İnönü Cd. No:36, 35700, Bergama/İzmir | `layout.tsx`, `Footer.tsx`, `iletisim/page.tsx`, `page.tsx` |
| Instagram | `@dimadzyn` | `layout.tsx`, `Footer.tsx`, `iletisim/page.tsx` |
| Domain | `dimadizayn.com` | `layout.tsx` (`metadataBase`) |

---

&copy; 2026 Dima Dizayn & Organizasyon. Tüm hakları saklıdır.
