'use client';

import { useState, useEffect } from 'react';

const YT_CHANNEL = 'https://www.youtube.com/@dimadizayn';

function parseYoutubeLinks(text: string): { shorts: string[]; long: string[] } {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const shorts: string[] = [];
  const longSeen = new Set<string>();
  const long: string[] = [];

  for (const line of lines) {
    const shortsMatch = line.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch) { shorts.push(shortsMatch[1]); continue; }

    const watchMatch = line.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch && !longSeen.has(watchMatch[1])) {
      longSeen.add(watchMatch[1]);
      long.push(watchMatch[1]);
    }
  }

  return { shorts, long };
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function ThumbnailInner({ id, isShorts }: { id: string; isShorts: boolean }) {
  return (
    <>
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video önizleme"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg className="h-5 w-5 translate-x-0.5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {isShorts && (
        <span className="absolute left-2.5 top-2.5 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
          Shorts
        </span>
      )}
    </>
  );
}

function Player({ id, isShorts }: { id: string; isShorts: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        title="YouTube video oynatıcı"
      />
    </div>
  );
}

function VideoCard({
  id,
  isShorts,
  isMobile,
  active,
  onPlay,
}: {
  id: string;
  isShorts: boolean;
  isMobile: boolean;
  active: boolean;
  onPlay: () => void;
}) {
  const baseClass = `group relative w-full overflow-hidden rounded-xl border border-gold-200/40 bg-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gold-300/60 ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`;
  const ytUrl = isShorts
    ? `https://www.youtube.com/shorts/${id}`
    : `https://www.youtube.com/watch?v=${id}`;

  if (active) return <Player id={id} isShorts={isShorts} />;

  if (isMobile) {
    return (
      <a href={ytUrl} target="_blank" rel="noopener noreferrer" className={`block ${baseClass}`} aria-label="YouTube'da izle">
        <ThumbnailInner id={id} isShorts={isShorts} />
      </a>
    );
  }

  return (
    <button type="button" onClick={onPlay} className={baseClass} aria-label="Videoyu oynat">
      <ThumbnailInner id={id} isShorts={isShorts} />
    </button>
  );
}

export default function VideoSection() {
  const [shorts, setShorts] = useState<string[]>([]);
  const [longVideos, setLongVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    fetch('/youtube-links.txt')
      .then(r => r.text())
      .then(text => {
        const { shorts: s, long: l } = parseYoutubeLinks(text);
        setShorts([...s].sort(() => Math.random() - 0.5).slice(0, 4));
        setLongVideos([...l].sort(() => Math.random() - 0.5).slice(0, 3));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (shorts.length === 0 && longVideos.length === 0) return null;

  return (
    <section className="border-t border-gold-200/30 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Başlık */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">Videolarımız</h2>
            <p className="mt-2 text-sm text-dima-grey">Organizasyonlarımızdan canlı anlar</p>
          </div>
          <a
            href={YT_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-red-600 transition-colors hover:text-red-700"
          >
            <YoutubeIcon className="h-4 w-4" />
            YouTube kanalımız
          </a>
        </div>

        {/* Shorts */}
        {shorts.length > 0 && (
          <div className="mb-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Shorts</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {shorts.map(id => (
                <VideoCard
                  key={id}
                  id={id}
                  isShorts
                  isMobile={isMobile}
                  active={active === id}
                  onPlay={() => setActive(id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Uzun Videolar */}
        {longVideos.length > 0 && (
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Organizasyon Filmleri</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {longVideos.map(id => (
                <VideoCard
                  key={id}
                  id={id}
                  isShorts={false}
                  isMobile={isMobile}
                  active={active === id}
                  onPlay={() => setActive(id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mobil YouTube linki */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href={YT_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 transition-colors hover:text-red-700"
          >
            <YoutubeIcon className="h-4 w-4" />
            YouTube kanalımızı takip edin
          </a>
        </div>
      </div>
    </section>
  );
}
