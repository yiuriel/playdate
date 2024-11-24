import { Event } from "../../features/events/events.types";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white p-2 rounded-md shadow-md">
      <h2 className="text-sm font-bold">{event.title}</h2>
      <p className="text-xs font-light text-gray-600">
        {event.description} - {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="text-xs font-light text-gray-600">
        {event.location} - Hosted by: {event.host}
      </p>
      <p className="text-xs font-light text-gray-600">
        {event.attendees.length} attendees
      </p>
    </div>
  );
};
