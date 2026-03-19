'use client';

import { useRouter } from 'next/navigation';
import { HistoricalEvent } from '@/data/events';
import { useState } from 'react';

interface TooltipBubbleProps {
  category: string;
  color: string;
  above: boolean;
}

function TooltipBubble({ category, color, above }: TooltipBubbleProps) {
  const positionStyle = above
    ? { bottom: 'calc(100% + 8px)' }
    : { top: 'calc(100% + 8px)' };
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      style={positionStyle}
    >
      <div
        className="px-3 py-2 rounded-lg text-xs text-white font-medium shadow-xl whitespace-nowrap"
        style={{ backgroundColor: color + 'CC' }}
      >
        {category}
      </div>
    </div>
  );
}

interface TimelineProps {
  events: HistoricalEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className="relative w-full overflow-x-auto pb-8">
      <div className="relative min-w-max px-16 py-12">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />
        
        <div className="flex items-center space-x-24 relative">
          {sortedEvents.map((event, index) => (
            <div
              key={event.id}
              className="relative flex flex-col items-center cursor-pointer group"
              onClick={() => router.push(`/event/${event.id}`)}
              onMouseEnter={() => setHoveredId(event.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Year label above odd-indexed events */}
              {index % 2 === 0 && (
                <div className="mb-4 text-center">
                  <span className="text-2xl font-black text-white/80 group-hover:text-white transition-colors">
                    {event.year}
                  </span>
                  <div
                    className="mt-1 text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors max-w-[120px] text-center leading-tight"
                  >
                    {event.title}
                  </div>
                </div>
              )}
              {index % 2 !== 0 && <div className="mb-4 h-14" />}

              {/* Dot */}
              <div
                className="relative w-5 h-5 rounded-full border-2 border-white/30 group-hover:scale-150 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: event.color }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  style={{ backgroundColor: event.color }}
                />
              </div>

              {/* Year label below even-indexed events */}
              {index % 2 !== 0 && (
                <div className="mt-4 text-center">
                  <span className="text-2xl font-black text-white/80 group-hover:text-white transition-colors">
                    {event.year}
                  </span>
                  <div
                    className="mt-1 text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors max-w-[120px] text-center leading-tight"
                  >
                    {event.title}
                  </div>
                </div>
              )}
              {index % 2 === 0 && <div className="mt-4 h-14" />}

              {/* Tooltip on hover */}
              {hoveredId === event.id && (
                <TooltipBubble
                  category={event.category}
                  color={event.color}
                  above={index % 2 !== 0}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
