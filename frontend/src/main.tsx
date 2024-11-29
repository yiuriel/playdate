import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { HomePage } from "./page/Home.tsx";
import { NotFound } from "./page/NotFound.tsx";
import { UserProfile } from "./page/UserProfile.tsx";
import { Events } from "./page/Events.tsx";
import { Messages } from "./page/Messages.tsx";
import { Conversation } from "./page/Conversation.tsx";

import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<Conversation />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
