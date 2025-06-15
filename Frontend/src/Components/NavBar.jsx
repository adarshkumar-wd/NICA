import { useState } from "react";
import { IoIosOptions } from "react-icons/io";

function NavBar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

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

    return (
        <>
        
            <nav className='w-full min-h-[5rem] flex items-center '>
                <div className='relative w-full flex justify-between items-center px-7'>

                    <div className='w-[3rem]'>
                        <img className='w-full h-full' src="src/assets/NSHM.jpg" alt="" />
                    </div>

                    <div onClick={() => setIsNavOpen(!isNavOpen)} className="">
                        <IoIosOptions className="text-2xl font-bold text-[var(--orange)]" />
                    </div>

                    <section className={`transition-all duration-[500ms] overflow-hidden ${isNavOpen ? "max-h-[600px]" : "max-h-0 hidden"} absolute top-[100%] z-10 left-0 w-[100vw] border-b-3 border-x-2 border-[var(--orange)] bg-white text-[var(--black)]`}>
                        <ul className="w-full flex flex-col items-center py-4 font-bold gap-3">
                            {
                                navContent.map((items , index) => (
                                    <li key={index}>{items}</li>
                                ))
                            }
                        </ul>
                    </section>
                    

                </div>
            </nav>
        
        </>
    )
}

export default NavBar