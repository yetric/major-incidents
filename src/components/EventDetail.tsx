import { HistoricalEvent } from '@/data/events';
import { formatDate, getCategoryColor } from '@/lib/utils';
import MediaGallery from './MediaGallery';
import VideoPlayer from './VideoPlayer';
import SourcesList from './SourcesList';
import Link from 'next/link';

interface EventDetailProps {
  event: HistoricalEvent;
}

export default function EventDetail({ event }: EventDetailProps) {
  const categoryColorClass = getCategoryColor(event.category);

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-16">
      {/* Hero section */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(135deg, ${event.color}22 0%, transparent 60%)`,
          borderBottom: `1px solid ${event.color}33`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Timeline</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${categoryColorClass}`}>
              {event.category}
            </span>
            <span className="text-white/40 text-sm font-mono">{formatDate(event.date)}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {event.title}
          </h1>

          <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
            {event.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Images */}
        {event.images.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <span
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: event.color }}
              />
              <span>Photos</span>
            </h2>
            <MediaGallery images={event.images} />
          </section>
        )}

        {/* Long description */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span
              className="w-1 h-8 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <span>What Happened</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            {event.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-white/75 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Videos */}
        {event.videos.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <span
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: event.color }}
              />
              <span>Watch</span>
            </h2>
            <VideoPlayer videos={event.videos} />
          </section>
        )}

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span
              className="w-1 h-8 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <span>Location</span>
          </h2>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <div className="flex items-center space-x-2 text-white/70">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">{event.location.city}, {event.location.country}</span>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <span
              className="w-1 h-8 rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <span>Sources &amp; Further Reading</span>
          </h2>
          <SourcesList sources={event.sources} />
        </section>
      </div>
    </div>
  );
}
