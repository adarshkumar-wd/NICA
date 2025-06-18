import React from "react";
import NavBar from "../Components/NavBar";
import Contect from "../Components/Contect";

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
    "Mr. Sudip Chatterjee, Assistant Professor, NSHM Institute of Computing & Analytics, Durgapur",
  ];

  return (
    <>
      <NavBar />

      <section className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--blue)] mb-6">
          Program Committee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto text-[var(--deepgray)]">
          {committee.map((member, index) => {
            const [name, ...rest] = member.split(",");
            const title = rest.join(",").trim();

            const isLast = index === committee.length - 1;

            return (
              <div
                key={index}
                className={`bg-[#ffd6b4] px-6 py-4 rounded-md text-center ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm">{title}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Contect />
    </>
  );
}

export default ProgramCommittee;
