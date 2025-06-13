import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Paages/Home";
import About from "./Paages/About";
import Conference_track from "./Paages/Conference_track";
import ProgramCommittee from "./Paages/ProgramCommittee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/Conference-Tracks-and-Sessions"
        element={<Conference_track />}
      />
      <Route path="Program-Committee" element={<ProgramCommittee />} />
    </Routes>
  );
}

export default App;
