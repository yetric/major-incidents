import Link from 'next/link';
import Image from 'next/image';
import { HistoricalEvent } from '@/data/events';
import { formatDate, getCategoryColor } from '@/lib/utils';

interface EventCardProps {
  event: HistoricalEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const categoryColorClass = getCategoryColor(event.category);

  return (
    <Link href={`/event/${event.id}`} className="group block">
      <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          {event.images.length > 0 ? (
            <Image
              src={event.images[0].url}
              alt={event.images[0].caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: event.color + '33' }}
            >
              <div
                className="w-16 h-16 rounded-full opacity-50"
                style={{ backgroundColor: event.color }}
              />
            </div>
          )}
          {/* Color accent bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: event.color }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryColorClass}`}
            >
              {event.category}
            </span>
            <span className="text-white/40 text-xs font-mono">{event.year}</span>
          </div>

          <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
            {event.title}
          </h3>

          <p className="text-sm text-white/50 mb-3">{formatDate(event.date)}</p>

          <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
            {event.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {event.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
