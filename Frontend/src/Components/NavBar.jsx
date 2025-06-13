import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavBar() {

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
    const [path, setPath] = useState(location.pathname.split("/")[1].split("-").join(" ") || "Home");

    return (
        <div>
            <div className='w-full flex items-center justify-between px-3 py-4'>
                <img src="src/assets/NSHM.jpg" alt="" className='w-[3rem]' />
                <img src="src/assets/ICAILIHMI.jpg" alt="" className='w-[4.8rem]' />
                <img src="src/assets/confab360.jpg" alt="" className='w-[4rem]' />
            </div>

            <nav className='w-full items-center '>
                <div className='w-[100%]'>

                    <div className={`${isNavOpen ? "hidden" : ""} w-full text-center font-semibold bg-orange-300 m-0 py-2`}>{path}</div>
                    <div onClick={() => setIsNavOpen(!isNavOpen)} className={`w-full flex justify-center font-bold text-2xl bg-white`}>{isNavOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    <ul className={`${isNavOpen ? "" : "hidden"} flex flex-col w-full bg-blue-500`}>

                        {navContent.map((items, key) =>
                        (
                            <li onClick={() => {navigate(`/${items.replace(/ /g, "-")}`) ; setPath("") }} className={`${path === items ? "bg-orange-300" : "text-white"} text-center font-semibold py-2`} key={key}>{items}</li>
                        )
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar