import L, { Map } from "leaflet";
import { useEffect, useRef } from "react";
import { useGetEventsQuery } from "../../features/events/events.api";

export const EventsMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitialized = useRef<boolean>(false);
  const mapApiRef = useRef<Map | null>(null);

  const { data } = useGetEventsQuery();

  useEffect(() => {
    if (!mapRef.current || mapInitialized.current || !data?.length) return;

    mapApiRef.current = L.map(mapRef.current).setView(
      [data[0].latitude, data[0].longitude],
      13
    );
    mapInitialized.current = true;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapApiRef.current);

    data.forEach((event) => {
      const marker = L.marker([event.latitude, event.longitude]).addTo(
        mapApiRef.current!
      ).bindPopup(`
          <h2>${event.title}</h2>
          <p>
            ${event.description}
            <br />
            ${new Date(event.date).toLocaleString()}
          </p>
          <p>
            ${event.attendees.length} attendees
            <br />
            Hosted by: ${event.host}
          </p>
        `);

      marker.on("click", () => {
        mapApiRef.current!.flyTo([event.latitude, event.longitude], 13, {
          duration: 0.5,
        });
      });
    });

    setTimeout(() => {
      mapApiRef.current?.invalidateSize();
    }, 500);
  }, [data, data?.length]);

  return (
    <div className="w-full h-full mt-4 p-4">
      <div
        className="w-full h-full border-2 border-teal-500 rounded-lg"
        id="map"
        ref={mapRef}
      ></div>
    </div>
  );
};
