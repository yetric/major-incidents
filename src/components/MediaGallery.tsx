'use client';

import { useState } from 'react';
import { EventImage } from '@/data/events';
import FallbackImage from './FallbackImage';

interface MediaGalleryProps {
  images: EventImage[];
}

export default function MediaGallery({ images }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
        <FallbackImage
          src={images[selectedIndex].url}
          alt={images[selectedIndex].caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white text-sm font-medium">{images[selectedIndex].caption}</p>
          <p className="text-white/50 text-xs mt-1">Credit: {images[selectedIndex].credit}</p>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-indigo-400 opacity-100'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <FallbackImage
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
