import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Event />}></Route>
      <Route path="/lesson/:slug" element={<Event />}></Route>
    </Routes>
  );
}
