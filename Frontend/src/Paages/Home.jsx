import React from "react";
import NavBar from "../Components/NavBar";
import RegisterButton from "../Components/RegisterButton";

function Home() {
  return (
    <>
      <div className="w-full min-h-[100vh] overflow-hidden">
        <NavBar />

        {/* Hero Section */}

        <section className='w-full h-[40rem] px-2 mb-[3rem]'>

          <div className="bg-[url('src/assets/NSHM_Campus.jpg')] h-full bg-cover bg-center relative">
            <div className='w-full h-full absolute top-0 left-0 bg-black/65 text-white text-center flex items-center justify-center'>

              <div className='px-2'>

                <div className='text-[1.9rem] tracking-tight leading-7 font-bold mb-5'>
                  <p>International Conference on Innovations in Human-Machine Interaction</p>
                </div>

                <div className='text-[2.3rem] font-bold text-[#4FC3F7] mb-4'>
                  <p>ICIHMI-2025</p>
                </div>

                <div className='text-[1.5rem] leading-6 mb-5'>
                  <p>AI for All: Accessibility, Applications, and Advancements</p>
                </div>

                <div className='text-[2rem] font-bold text-[#4FC3F7]'>
                  <p>Organized By</p>
                </div>

                <div className='text-[1.3rem]'>
                  <p>NSHM Institute of Computing and Analytics (NICA)</p>
                </div>

                <div className='text-[1.3rem] mb-5 '>
                  <p>NSHM Knowledge Campus, Durgapur</p>
                </div>

                <RegisterButton />


              </div>


            </div>
          </div>

        </section>

        <section className="w-full px-2">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h2 className="text-[2.3rem] tracking-tight font-bold text-[#0288d1]">About The Conference</h2>
            <p className="text-center text-[1.2rem]">The International Conference on Innovations in Human-Machine Interaction (ICIHMI-2025) aims to bring together researchers, practitioners, and industry experts to explore the latest advancements in AI and human-machine interaction technologies. This conference will focus on making AI accessible to all segments of society, showcasing innovative applications, and discussing future advancements in the field.</p>
          </div>
        </section>

        

      </div>
    </>
  );
}

export default Home;
