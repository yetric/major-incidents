import { getEventById, getEventsSortedByYear } from '@/data/events';
import EventDetail from '@/components/EventDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const events = getEventsSortedByYear();
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return { title: 'Event Not Found' };
  return {
    title: `${event.title} — History Unfiltered`,
    description: event.shortDescription,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}
