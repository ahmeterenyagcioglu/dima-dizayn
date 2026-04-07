'use client';

import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const FEED_URL = 'https://feeds.behold.so/KHo2QMlYIKkcWPcPDZMa';

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: string;
  mediaUrl: string;
  sizes: {
    medium?: { mediaUrl: string };
    large?: { mediaUrl: string };
  };
  caption: string;
}

interface BeholdFeed {
  username: string;
  posts: BeholdPost[];
}

function getImageUrl(post: BeholdPost): string {
  return post.sizes?.medium?.mediaUrl || post.sizes?.large?.mediaUrl || post.mediaUrl;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [username, setUsername] = useState('dimadzyn');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => r.json())
      .then((data: BeholdFeed) => {
        setUsername(data.username || 'dimadzyn');
        setPosts(data.posts?.slice(0, 9) || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <section className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mx-auto h-8 w-48 animate-pulse rounded-lg bg-gray-200" />
          <div className="mx-auto mt-3 h-4 w-24 animate-pulse rounded bg-gray-100" />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-gold-200/30 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 sm:text-4xl">
            Instagram&apos;da Biz
          </h2>
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-dima-grey transition-colors hover:text-gold-600"
          >
            @{username}
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              aria-label="Instagram paylaşımını aç"
            >
              <img
                src={getImageUrl(post)}
                alt={post.caption ? post.caption.slice(0, 80) : 'Dima Dizayn Instagram'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white drop-shadow" />
              </div>
            </a>
          ))}
        </div>

        {/* Takip Et */}
        <div className="mt-8 text-center">
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:scale-105 hover:shadow-lg"
          >
            <Instagram className="h-5 w-5" />
            Instagram&apos;da Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}
