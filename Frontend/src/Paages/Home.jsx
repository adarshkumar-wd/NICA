import React from "react";
import NavBar from "../Components/NavBar";
import RegisterButton from "../Components/RegisterButton";
import HomeCards from "../Components/HomeCards";
import FocusCard from "../Components/FocusCard";
import Contect from "../Components/Contect";

function Home() {

  const cardData = [
    { "Image": "src/assets/celender.png", "Heading": "Data", "Text": "August 28-29, 2025 Thursday & Friday" },
    { "Image": "src/assets/venue.png", "Heading": "Venue", "Text": "Block –A, Seminar Hall NSHM Knowledge Campus, Durgapur" },
    { "Image": "src/assets/Mode.png", "Heading": "Mode", "Text": "Hybrid (In-person & Virtual)" }
  ]

  const focusFields = [
    "AI, Machine Learning & Data Analytics",
    "Modern Computing Frontiers",
    "Cybersecurity & Networks",
    "AI in Management",
    "IoT & Embedded Systems",
    "AI in Healthcare",
    "Intelligent Sensors & WSN",
    "AI-Driven Education",
    "Biomedical Engineering ",
    "Ethics & Global AI Practices"
  ]

  return (
    <>
      <div className="w-[100vw] min-h-[100vh] bg-[var(--cream)] overflow-hidden">
        <NavBar />

        {/* Hero Section */}

        <section className='w-full h-[79vh] sm:h-[81vh] z-10 mb-[3rem]'>

          <div className="bg-[url('src/assets/Home-Page-Banner-Mob.png')] xs:bg-[url('src/assets/Home-Page-Banner.png')] xs:bg-right xs:bg-cover h-full bg-cover bg-center relative">

            <div className='w-full h-full absolute top-0 left-0 text-white flex items-center justify-center'>

              <div className="w-[90%] h-full pl-3 py-8 flex flex-col justify-between">

                <div className="h-[50%]">
                  <div className="text-[1.6rem] sm:text-[2rem] italic leading-8 text-[var(--orange)] mb-4">
                    <h3 className="leading-6">International Conference on</h3>
                  </div>

                  <div className="text-[1.5rem] sm:text-[1.9rem] font-bold tracking-tight  mb-4 leading-7">
                    <h3>Artificial Intelligence lead innovations in Human-Machine Interaction -2025</h3>
                  </div>

                  <div className="italic text-[1.3rem] sm:text-[1.6rem] mb-9 text-[var(--orange)]">
                    <h3>[ICAILHMI-2025]</h3>
                  </div>

                  <RegisterButton />

                  <div className="mt-4 tracking-tighter sm:text-[1.3rem]">
                    <h3>AI for All: Accessibility, Applications, and Advancements</h3>
                  </div>
                </div>

                <div className="flex gap-3 h-[50%]  items-end py-5">

                  <div className="w-[5rem]">
                    <img className="w-full h-full object-contain" src="src/assets/ICAILIHMI.jpg" alt="" />
                  </div>

                  <div className="w-[5rem]">
                    <img className="w-full h-full object-contain" src="src/assets/confab360.jpg" alt="" />
                  </div>

                </div>

              </div>


            </div>
          </div>

        </section>

        {/* About Section  */}

        <section className="w-full px-5 mb-8">
          <div className="w-full flex flex-col items-start sm:items-center justify-center gap-5">
            <h2 className="text-[2rem] tracking-tight font-bold text-[var(--blue)] text-start sm:text-center ">About The Conference</h2>

            <div className="w-full md:flex md:justify-around md:items-center">

              <div className="md:w-[45%] xl:w-[35%]">
                <p className="text-start text-[1rem]">The International Conference on Innovations in Human-Machine Interaction (ICIHMI-2025) aims to bring together researchers, practitioners, and industry experts to explore the latest advancements in AI and human-machine interaction technologies. This conference will focus on making AI accessible to all segments of society, showcasing innovative applications, and discussing future advancements in the field.</p>
              </div>
              <div className="hidden md:w-[45%] xl:w-[35%] md:flex flex-col gap-1">
                <div className="w-[68%] lg:w-[60%] h-[7.5rem] bg-[var(--grey1)] rounded-[2rem] border-[.5rem] border-[#e8e4e5] ml-auto"></div>
                <div className="w-[68%] lg:w-[60%] h-[7.5rem] bg-[var(--grey1)] rounded-[2rem] border-[.5rem] border-[#e8e4e5]"></div>
              </div>
            </div>

          </div>
        </section>

        {/* Card Section  */}

        <section className="mt-10 w-full px-3 flex flex-col items-center gap-9 justify-center mb-15 sm:flex-row sm:flex-wrap">
          {cardData.map((data, index) => (
            <HomeCards key={index} data={data} />
          ))}
        </section>

        {/* Organized by  */}

        <section className="w-full flex flex-col items-center mb-10">

          <h2 className="text-[var(--blue)] font-bold text-[2rem] tracking-tight mb-4 sm:mb-6">Organized By</h2>

          <div className="w-[70%] sm:w-[60%] xl:w-[50%] overflow-hidden rounded-lg border-2 border-[var(--orange)] mb-3">
            <img className="w-full h-full object-cover " src="src/assets/NICA-Organizer.jpg" alt="Organizer Image" />
          </div>

          <h3 className="font-bold tracking-tight text-center sm:text-[1.4rem]">NSHM Institute of Computing and Analytics (NICA)</h3>
          <p className="tracking-tight tect-center sm:mb-5">NSHM Knowledge Campus, Durgapur.</p>

        </section>

        {/* Area of focus  */}

        <section className="w-full mb-10">

          <h1 className="text-center text-[2.1rem] font-bold text-[var(--blue)] mb-7 mt-10 ">Areas of Focus </h1>

          <div className="w-full flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start">

            {
              focusFields.map((item, index) => (
                <FocusCard key={index} item={item} />
              ))
            }

          </div>

        </section>

        <div className="flex justify-center mt-6 mb-8">
          <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] bg-white py-8 px-5 sm:py-7 sm:px-4 md:px-2 md:py-6 lg:px-1 lg:py-4 rounded-full flex justify-center items-center">
            <p className="text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] font-bold tracking-tight"><span className="text-[var(--blue)]">Submission Deadline :</span> 15th July 2025 </p>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <RegisterButton />
        </div>


        <footer>
          <Contect />
        </footer>

      </div>
    </>
  );
}

export default Home;
