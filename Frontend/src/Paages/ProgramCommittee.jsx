import React from "react";
import NavBar from "../Components/NavBar";

function ProgramCommittee() {
  const committee = [
    "Prof. (Dr.) Anuj Kumar, Rushford Business School, Switzerland",
    "Prof. (Dr.) Daba Chowdhury, Canterbury Christ Church University, United Kingdom",
    "Dr. Rahaman Hasan, Canterbury Christ Church University, United Kingdom",
    "Prof. (Dr.) Fernando Ortiz- Rodriguez, Universidad Autonoma de Tamaulipas, Mexico",
    "Dr. Aruna Dev Rroy, The Assam Royal Global University, India",
    "Dr. Lara Priyadarshini, PSGR Krishnammal College for Women Coimbatore, Tamil Nadu",
    "Dr. Sukhmeet Kaur, Confab 360 Degree, Germany",
    "Dr. Manu Pandey, Confab 360 Degree, Switzerland",
    "Dr. Deb Kumar Das, HoD, Assistant Professor, NSHM Business School, Durgapur",
    "Mr. Joydeep Banerjee, HoD, Assistant Professor, NSHM Institute of Computing & Analytics, Durgapur",
    "Mr. Sakya Sarkar, Assistant Professor, NSHM Institute of Computing & Analytics, Durgapur",
    "Mr. Triloki Nath, Assistant Professor, NSHM Institute of Computing & Analytics, Durgapur",
    "Mr. Sudip Chatterjee, Assistant Professor, NSHM Institute of Computing & Analytics, Durgapur",
  ];

  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center mt-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Program Committee Members
        </h2>
        {committee.map((name, index) => (
          <div
          key={index}
            className={`px-6 py-4 text-black w-full rounded-sm
                  ${index % 2=== 0 ? "bg-[#b9d2f1]" : "bg-orange-100"}`}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProgramCommittee;
