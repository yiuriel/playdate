import { EventsList } from "../components/EventsList/EventsList";
import { EventsMap } from "../components/EventsMap/EventsMap";
import { SwitchEventsView } from "../components/SwitchEventsView/SwitchEventsView";
import { useAppSelector } from "../redux/hooks";

export const Events = () => {
  const eventsView = useAppSelector((state) => state.events.viewType);

  return (
    <div className="flex flex-col items-center w-full h-full flex-1">
      <SwitchEventsView />
      {eventsView === "list" && <EventsList />}
      {eventsView === "map" && <EventsMap />}
    </div>
  );
};
