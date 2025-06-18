import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Paages/Home";
import Conference_track from "./Paages/Conference_track";
import ProgramCommittee from "./Paages/ProgramCommittee";
import AboutConferencePage from "./Paages/AboutConferencePage";
import KeynoteSpeakerPage from "./Paages/KeynoteSpeakerPage";
import EditorialBoardPage from "./Paages/EditorialBoardPage";

function App() {
  return (
    <div className="bg-[var(--cream)] overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Conference-Tracks-and-Sessions"
          element={<Conference_track />}
        />
        <Route path="/Program-Committee" element={<ProgramCommittee />} />
        <Route path="/about-conference" element={<AboutConferencePage />} />
        <Route path="/Keynote-Speakers" element={<KeynoteSpeakerPage />} />
        <Route path="/Editorial-Board" element={<EditorialBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
