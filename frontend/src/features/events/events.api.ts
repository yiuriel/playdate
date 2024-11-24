import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Event } from "./events.types";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "New Year's Eve Party",
    description: "Come celebrate the start of a new year with us!",
    date: new Date("2024-12-31T20:00:00.000Z").toISOString(),
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
    host: "1",
    attendees: ["1", "2"],
    photos: ["https://picsum.photos/205"],
  },
  {
    id: "2",
    title: "Summer BBQ",
    description: "Join us for a fun day of food and games!",
    date: new Date("2024-07-04T12:00:00.000Z").toISOString(),
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
    host: "2",
    attendees: ["2", "3"],
    photos: ["https://picsum.photos/206"],
  },
  {
    id: "3",
    title: "Holiday Party",
    description: "Celebrate the holidays with us!",
    date: new Date("2024-12-14T19:00:00.000Z").toISOString(),
    location: "Chicago",
    latitude: 41.8781,
    longitude: -87.6298,
    host: "4",
    attendees: ["4", "1", "2"],
    photos: ["https://picsum.photos/207"],
  },
  {
    id: "4",
    title: "Karaoke Night",
    description: "Sing your heart out with us!",
    date: new Date("2024-01-18T20:00:00.000Z").toISOString(),
    location: "San Francisco",
    latitude: 37.7749,
    longitude: -122.4194,
    host: "3",
    attendees: ["3", "4"],
    photos: ["https://picsum.photos/208"],
  },
  {
    id: "5",
    title: "Game Night",
    description: "Join us for a fun night of games!",
    date: new Date("2024-02-15T19:00:00.000Z").toISOString(),
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
    host: "1",
    attendees: ["1", "2", "3"],
    photos: ["https://picsum.photos/209"],
  },
];

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], void>({
      queryFn: () => ({ data: mockEvents }),
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
