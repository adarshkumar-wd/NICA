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
        {/* About NSHM Knowledge Campus */}

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
          <div className="w-full max-w-3xl h-100 bg-[var(--orange)] mx-auto mt-6 rounded-lg " />
        </section>

        {/* About NICA */}
        <section className="text-center py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-700 mb-3">
            About NICA
          </h2>
          <p className="max-w-3xl mx-auto text-justify text-gray-700">
            The NSHM Institute of Computing and Analytics (NICA), under NSHM
            Knowledge Campus, Durgapur, is a hub of academic excellence in
            Computing and Analytics. With a team of highly qualified faculty,
            NICA offers industry-aligned, future-ready programs that blend
            strong academic foundations with real-world applications, preparing
            students for the evolving Industry 5.0 landscape. NICA's ecosystem
            emphasizes a balance between theory and practical skills through
            immersive learning experiences like industry projects, internships,
            and live case studies. The institute fosters a strong research
            culture in emerging fields such as AI, Machine Learning, Data
            Science, Cybersecurity, and Cloud Computing, encouraging innovation
            through active research, publications, and industry-academia
            collaborations. By promoting inquiry, innovation, and
            problem-solving, NICA equips students with the skills to thrive in a
            dynamic, tech-driven world
          </p>
        </section>

        {/* About Confab 360 Degree */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col  md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 text-justify">
              <h2 className="text-xl md:text-2xl font-bold text-cyan-700 mb-3 text-left md:text-left">
                About Confab 360 Degree
              </h2>
              <p className="text-gray-700">
                Confab 360 Degree is a globally recognized educational and
                research platform headquartered in New Delhi, India. Established
                in 2021, the organization is dedicated to bridge the gap between
                academia, industry, and policy through meaningful research and
                impactful training initiatives. Confab 360 Degree plays a
                pivotal role in connecting Indian researchers with foreign
                universities and global professionals, fostering international
                collaboration and academic exchange. By building strategic
                partnerships across borders, the organization creates pathways
                for joint research initiatives, faculty development, and
                knowledge transfer. Its mission to bridge the gap between
                academia and industry is realized through conferences, training
                programs, and consultancy services that align academic research
                with real-world business needs. Through these efforts, Confab
                360 Degree empowers researchers, enhances institutional
                visibility, and drives innovation that is both globally informed
                and locally impactful.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src="../src/assets/confab360.jpg"
                alt="Confab group"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutConferencePage;
