import React from "react";
import NavBar from "../Components/NavBar";

function AboutConferencePage() {
  return (
    <>
      <NavBar />
      <div className="text-center py-10 px-4 bg-blue-500 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Know the Conference & Organizers
        </h1>
        <p className="text-gray-300 mt-2 max-w-3xl mx-auto">
          Discover the vision, mission, and key collaborators behind
          ICAILHMI-2025.
        </p>
      </div>

      <div className="bg-[#fdfaf7] text-[#333] font-sans">
        <section className="text-center py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-700 mb-3 ">
            About NSHM Knowledge Campus
          </h2>
          <p className="max-w-3xl mx-auto text-justify text-gray-700">
            NSHM Knowledge Campus, Durgapur, is a renowned educational
            institution in India that has been shaping young minds since its
            establishment in 1996. Situated on a sprawling 32-acre campus, this
            knowledge hub offers a serene environment away from the chaos of the
            city, surrounded by lush green landscapes. Affiliated to MAKAUT,
            NSHM Knowledge Campus Durgapur is recognized by the All India
            Council for Technical Education (AICTE) and accredited by the
            National Assessment and Accreditation Council (NAAC). The primary
            goal of NSHM Knowledge Campus, Durgapur, is to provide students with
            the necessary skills and knowledge to succeed in their chosen
            careers and make a positive impact on society. The institution aims
            to foster holistic development, both academically and
            professionally, through its comprehensive programs.
          </p>
          <div className="w-full max-w-3xl h-100 bg-orange-500 mx-auto mt-6 rounded-lg " />
        </section>
      </div>
    </>
  );
}

export default AboutConferencePage;
