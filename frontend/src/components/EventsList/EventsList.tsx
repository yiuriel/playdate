import { useGetEventsQuery } from "../../features/events/events.api";
import { EventCard } from "./EventCard";

export const EventsList = () => {
  const { data } = useGetEventsQuery();

  return (
    <div className="flex flex-col gap-4 mt-4 w-5/6">
      {data?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
