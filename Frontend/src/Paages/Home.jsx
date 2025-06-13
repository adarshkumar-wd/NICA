import React from "react";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <>
      <div className="w-full min-h-[100vh] overflow-hidden">
        <NavBar />

        {/* Hero Section */}

        <section className='w-full h-[40rem] px-2'>

          <div className="bg-[url('src/assets/NSHM_Campus.jpg')] h-full bg-cover bg-center relative">
            <div className='w-full h-full absolute top-0 left-0 bg-black/65 text-white text-center flex items-center justify-center'>

              <div className=''>

                <div className='text-[2rem] tracking-tight leading-6 font-bold mb-5'>
                  <p>International Conference on Innovations in Human-Machine Interaction</p>
                </div>

                <div className='text-[2.5rem] font-bold text-[#4FC3F7]'>
                  <p>ICIHMI-2025</p>
                </div>

                <div className='text-[1.7rem]'>
                  <p>AI for All: Accessibility, Applications, and Advancements</p>
                </div>

                <div className='text-[2rem] font-bold text-[#4FC3F7]'>
                  <p>Organized By</p>
                </div>

                <div className='text-[1.6rem]'>
                  <p>NSHM Institute of Computing and Analytics (NICA)</p>
                </div>

                <div className=''>
                  <p>NSHM Knowledge Campus, Durgapur</p>
                </div>

              </div>


            </div>
          </div>

        </section>

      </div>
    </>
  );
}

export default Home;
