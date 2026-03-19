'use client';

import { EventVideo } from '@/data/events';

interface VideoPlayerProps {
  videos: EventVideo[];
}

export default function VideoPlayer({ videos }: VideoPlayerProps) {
  if (videos.length === 0) return null;

  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <div key={video.youtubeId} className="space-y-3">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-white/60 text-sm text-center">{video.title}</p>
        </div>
      ))}
    </div>
  );
}
