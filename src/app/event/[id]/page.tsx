import { getEventById, getEventsSortedByYear } from '@/data/events';
import EventDetail from '@/components/EventDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const events = getEventsSortedByYear();
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const event = getEventById(params.id);
  if (!event) return { title: 'Event Not Found' };
  return {
    title: `${event.title} — History Unfiltered`,
    description: event.shortDescription,
  };
}

export default function EventPage({ params }: PageProps) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}
