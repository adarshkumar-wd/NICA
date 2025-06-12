import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Home() {

  const navContent = [
    "Home",
    "Conference Theme and Scope",
    "Conference Tracks and Sessions",
    "Location",
    "Important Date",
    "Keynote Speakers",
    "Convener",
    "Editorial Board",
    "Program Committee",
    "Publication Outlets",
    "Registration Fees",
    "Contact Detail",
    "Submission Guidelines",
    "Review process and ethic statements"
  ]

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  console.log(path)

  return (
    <>
    
    <div className='w-full min-h-[100vh] overflow-hidden'>

      <div className='w-full flex items-center justify-between px-3 py-4'>
        <img src="src/assets/NSHM.jpg" alt="" className='w-1/6'/>
        <img src="src/assets/ICAILIHMI.jpg" alt="" className='w-1/4'/>
        <img src="src/assets/confab360.jpg" alt="" className='w-1/6'/>
      </div>

    <nav className='w-full bg-blue-500 items-center '>{path}</nav>
      <div className='w-[100%]'>

        <div className='w-full'></div>
        <div onClick={() => setIsNavOpen(!isNavOpen)} className={`w-full flex justify-center font-bold text-2xl`}>{isNavOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>

        <ul className={`${isNavOpen ? "" : "hidden"} flex flex-col w-full bg-blue-500`}>
          
          {navContent.map((items , key) => 
            (
              <li className=' text-center text-white font-semibold py-2' key={key}>{items}</li>
            )
          )}
        </ul>
      </div>
    </div>

    </>
  )
}

export default Home