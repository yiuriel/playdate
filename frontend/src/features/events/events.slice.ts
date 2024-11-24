import { createSlice } from "@reduxjs/toolkit";

export interface EventsState {
  viewType: "list" | "map";
}

const initialState: EventsState = {
  viewType: "list",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setListView: (state) => {
      state.viewType = "list";
    },
    setMapView: (state) => {
      state.viewType = "map";
    },
  },
});

export const { setListView, setMapView } = eventsSlice.actions;

export const selectViewType = (state: { events: EventsState }) =>
  state.events.viewType;

export default eventsSlice.reducer;
