import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "../features/profile/profile.api";
import { usersApi } from "../features/users/users.api";
import { eventsApi } from "../features/events/events.api";
import eventsReducer from "../features/events/events.slice";

export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(profileApi.middleware)
      .concat(usersApi.middleware)
      .concat(eventsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
