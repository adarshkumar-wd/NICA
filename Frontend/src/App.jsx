import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Paages/Home";
import About from "./Paages/About";
import Conference_track from "./Paages/Conference_track";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Conference-Tracks-and-Sessions" element={<Conference_track />} />
    </Routes>
  );
}

export default App;
