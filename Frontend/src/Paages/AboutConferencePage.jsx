import React from "react";
import NavBar from "../Components/NavBar";
import Contect from "../Components/Contect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function AboutConferencePage() {
  return (
    <>
      <NavBar />

      <div className="text-center py-7 px-4  text-[var(--cream)] bg-[var(--orange)]">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Know the Conference & Organizers
        </h1>

        <p className="text-[var(--grey1)] mt-2 max-w-3xl mx-auto">
          Discover the vision, mission, and key collaborators behind
          ICAILHMI-2025.
        </p>
      </div>

      <div className="bg-[var(--cream)] text-[var(--deepgray)] font-sans">
        {/* About NSHM Knowledge Campus */}

        <section className="text-center py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-8 ">
            About NSHM Knowledge Campus
          </h2>
          <p className="max-w-6xl mx-auto text-justify ">
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

          <div className="w-full max-w-6xl mx-auto mt-6 rounded-lg ">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              className="max-w-4xl mx-auto mt-6"
            >
              <div>
                <img src="src\assets\NSHM_Campus.jpg" alt="Slide 1" />
              </div>
              <div>
                <img src="src\assets\NSHM_Campus.jpg" alt="Slide 2" />
              </div>
              <div>
                <img src="src\assets\NSHM_Campus.jpg" alt="Slide 3" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* About NICA */}
        <section className="py-10 px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-8
           text-center"
          >
            About NICA
          </h2>

          <div className=" text-justify max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16 mx-auto">
            <p className="md:w-1/2 ">
              The NSHM Institute of Computing and Analytics (NICA), under NSHM
              Knowledge Campus, Durgapur, is a hub of academic excellence in
              Computing and Analytics. With a team of highly qualified faculty,
              NICA offers industry-aligned, future-ready programs that blend
              strong academic foundations with real-world applications,
              preparing students for the evolving Industry 5.0 landscape. NICA's
              ecosystem emphasizes a balance between theory and practical skills
              through immersive learning experiences like industry projects,
              internships, and live case studies. The institute fosters a strong
              research culture in emerging fields such as AI, Machine Learning,
              Data Science, Cybersecurity, and Cloud Computing, encouraging
              innovation through active research, publications, and
              industry-academia collaborations. By promoting inquiry,
              innovation, and problem-solving, NICA equips students with the
              skills to thrive in a dynamic, tech-driven world.
            </p>

            {/* Image Section */}
            <div className="md:w-1/3 h-fit bg-red-500">
              <img
                src="../src/assets/NICA-Organizer.jpg"
                alt="Confab group"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* circular image place holder  */}
        </section>

        {/* About Confab 360 Degree */}
        <section className="py-10 px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-8
           text-center"
          >
            About Confab 360 Degree
          </h2>

          <div className=" text-justify max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16 mx-auto">
            {/* Image Section */}
            <div className="md:w-1/3">
              <img
                src="../src/assets/confab360.jpg"
                alt="Confab group"
                className="w-full object-cover"
              />
            </div>

            <p className="md:w-1/2 ">
              Confab 360 Degree is a globally recognized educational and
              research platform headquartered in New Delhi, India. Established
              in 2021, the organization is dedicated to bridge the gap between
              academia, industry, and policy through meaningful research and
              impactful training initiatives. Confab 360 Degree plays a pivotal
              role in connecting Indian researchers with foreign universities
              and global professionals, fostering international collaboration
              and academic exchange. By building strategic partnerships across
              borders, the organization creates pathways for joint research
              initiatives, faculty development, and knowledge transfer. Its
              mission to bridge the gap between academia and industry is
              realized through conferences, training programs, and consultancy
              services that align academic research with real-world business
              needs. Through these efforts, Confab 360 Degree empowers
              researchers, enhances institutional visibility, and drives
              innovation that is both globally informed and locally impactful. .
              Its commitment to nurturing future leaders is reflected in its
              support for young researchers and innovators through mentorship
              programs and collaborative projects.
            </p>
          </div>

          {/* Circular image placeholders */}
          <div className="flex md:justify-evenly md:flex-row flex-col gap-6 mt-12 md:mt-16">
            <div className="flex justify-evenly w-full">
              {/* First Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fourth Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden hidden md:inline-block">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fifth Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden hidden md:inline-block">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-evenly md:hidden">
              {/* Fourth Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fifth Circle */}
              <div className="w-25 h-25 rounded-full border-2 border-[var(--orange)] overflow-hidden">
                <img
                  src="../src/assets/IMG-20250610-WA0006.jpg"
                  alt="Logo 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-6">
            About United Kingdom-Bangladesh Research Centre
          </h2>

          {/* Flex Container */}
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-[var(--light)] p-4 gap-6">
            {/* Text Content - 70% */}
            <div className="md:basis-[70%] text-justify">
              <p>
                The UK-Bangladesh Research Centre (UKBRC) is an academic
                initiative that promotes collaboration between the UK,
                Bangladesh and other nations with special attention for
                developing economies in research, education, and innovation. We
                support joint research, student and faculty exchanges, and
                capacity-building across institutions. Focused on global and
                regional challenges, UKBRC fosters partnerships between
                academia, industry, and policy sectors to encourage impactful,
                ethical, and sustainable research. Through conferences,
                fellowships, and a digital knowledge hub, we aim to create
                lasting academic connections and real-world solutions.
              </p>
            </div>

            {/* Flags - 30% */}
            <div className="md:basis-[30%] flex justify-center items-center gap-4">
              <div className="w-25 h-20 bg-gray-300 rounded shadow" />
              <div className="w-25 h-20 bg-gray-300 rounded shadow" />
            </div>
          </div>
        </section>

        {/* Conference Purpose Section */}
        <section className="text-center py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--blue)] mb-2">
            Conference Purpose
          </h2>

          <p className="max-w-6xl mx-auto ">
            To provide a dynamic platform for scholars, researchers,
            technologists, and industry leaders to explore cutting-edge
            developments in Artificial Intelligence and its role in transforming
            Human-Machine Interaction (HMI)
          </p>
        </section>

        {/* Objective Section */}
        <section className="text-center py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--blue)] mb-6">
            Objective of the Conference
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
            {/* Box 1 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Box 2 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Box 3 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Box 4 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 4"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Box 5 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Box 6 */}
            <div className="h-32 rounded-lg overflow-hidden shadow">
              <img
                src="../src/assets/NSHM_Campus.jpg"
                alt="Objective 6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button className="mt-6 bg-orange-500 text-[var(--grey1)] px-6 py-2 rounded hover:bg-[var(--orange)]">
            Explore Committee
          </button>
        </section>

        <Contect />
      </div>
    </>
  );
}

export default AboutConferencePage;
