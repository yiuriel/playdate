import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { HomePage } from "./page/Home.tsx";
import { NotFound } from "./page/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/messages" element={<div>Messages</div>} />
            <Route path="/events" element={<div>Events</div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
