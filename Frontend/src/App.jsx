import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Paages/Home";
import Conference_track from "./Paages/Conference_track";
import ProgramCommittee from "./Paages/ProgramCommittee";
import AboutConferencePage from "./Paages/AboutConferencePage";

function App() {
  return (
    <div className="bg-[var(--cream)]">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Conference-Tracks-and-Sessions"
        element={<Conference_track />}
      />
      <Route path="/Program-Committee" element={<ProgramCommittee />} />
      <Route path="/about-conference" element ={<AboutConferencePage/>} />
    </Routes>
    </div>
  );
}

export default App;
