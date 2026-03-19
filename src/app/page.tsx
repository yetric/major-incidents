import { events, getEventsSortedByYear } from '@/data/events';
import Timeline from '@/components/Timeline';
import EventCard from '@/components/EventCard';

export default function Home() {
  const sortedEvents = getEventsSortedByYear();

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-sm">Educational • Neutral • Factual</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
            History
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Unfiltered
            </span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Explore the major events that shaped our world. No spin, no bias — just the facts, 
            presented clearly with verified sources.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['War', 'Terrorism', 'Political', 'Science & Technology', 'Disaster'].map((cat) => (
              <span key={cat} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/50">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Interactive Timeline</h2>
            <p className="text-white/40 text-sm">Click any event to learn more • Scroll horizontally to explore</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <Timeline events={sortedEvents} />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">All Events</h2>
            <p className="text-white/40 text-sm">{events.length} major historical events documented</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center">
        <p className="text-white/30 text-sm">
          History Unfiltered — Educational resource for understanding major world events. 
          All content is factual and sourced from reputable archives.
        </p>
      </footer>
    </main>
  );
}
