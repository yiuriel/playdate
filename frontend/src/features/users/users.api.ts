import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./users.types";

const mockUsers: User[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    age: 28,
    gender: "female",
    location: "Los Angeles",
    photos: ["https://picsum.photos/200"],
    bio: "Music lover and avid traveler.",
    interests: ["music", "traveling", "photography"],
    sexualOrientation: "bisexual",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    age: 34,
    gender: "male",
    location: "San Francisco",
    photos: ["https://picsum.photos/201"],
    bio: "Tech enthusiast and professional gamer.",
    interests: ["gaming", "technology", "hiking"],
    sexualOrientation: "straight",
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Williams",
    email: "charlie@example.com",
    age: 23,
    gender: "non-binary",
    location: "New York",
    photos: ["https://picsum.photos/202"],
    bio: "Writer and coffee aficionado.",
    interests: ["writing", "coffee", "reading"],
    sexualOrientation: "bisexual",
  },
  {
    id: "4",
    firstName: "Dana",
    lastName: "Davis",
    email: "dana@example.com",
    age: 29,
    gender: "female",
    location: "Chicago",
    photos: ["https://picsum.photos/203"],
    bio: "Fitness guru and health advocate.",
    interests: ["fitness", "nutrition", "yoga"],
    sexualOrientation: "straight",
  },
  {
    id: "5",
    firstName: "Eli",
    lastName: "Miller",
    email: "eli@example.com",
    age: 31,
    gender: "male",
    location: "Austin",
    photos: ["https://picsum.photos/204"],
    bio: "Food blogger and culinary explorer.",
    interests: ["cooking", "food", "travel"],
    sexualOrientation: "bisexual",
  },
];

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      queryFn: async () => ({ data: mockUsers }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
