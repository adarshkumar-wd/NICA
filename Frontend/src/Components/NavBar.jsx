import { useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isNavOpenDesk, setIsNavOpenDesk] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    location.pathname.slice(1).replace(/-/g, " ") || "Home"
  );

  const navContent = [
    "Home",
    "About Conference",
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
    "Review process and ethic statements",
  ];

  const handleClickOption = (e) => {
    let text = e.target.innerText;

    setCurrentPage(text);

    if (e.target.innerText !== "Home") {
      navigate(`/${text.replace(/ /g, "-")}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="w-[100vw] min-h-[5rem] flex items-center mb-3">
        <div className="relative w-full flex justify-between items-center gap-5 px-7 sm:py-1">
          <div className="w-[3rem] sm:w-[4.6rem]">
            <img className="w-full h-full" src="src/assets/NSHM.jpg" alt="" />
          </div>

          {/* Desktop Nav Option  */}

          <section className={`${isNavOpenDesk ? "hidden" : ""} w-full`}>
            <div className="hidden md:hidden sm:inline-block w-[100%] overflow-hidden">
              <ul className="w-full h-full flex justify-around">
                {navContent.map(
                  (item, index) =>
                    index <= 2 && (
                      <li
                        onClick={(e) => handleClickOption(e)}
                        className={`${
                          currentPage === item ? "text-[var(--orange)]" : ""
                        } font-semibold cursor-pointer hover:text-[var(--orange)]`}
                        key={index}
                      >
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>

            <div className="hidden md:inline-block lg:hidden w-[100%] overflow-hidden">
              <ul className="w-full h-full flex justify-around">
                {navContent.map(
                  (item, index) =>
                    index <= 3 && (
                      <li
                        onClick={(e) => handleClickOption(e)}
                        className={`${
                          currentPage === item ? "text-[var(--orange)]" : ""
                        } font-semibold cursor-pointer hover:text-[var(--orange)]`}
                        key={index}
                      >
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>

            <div className="hidden lg:inline-block xl:hidden w-[100%] overflow-hidden">
              <ul className="w-full h-full flex justify-around">
                {navContent.map(
                  (item, index) =>
                    index <= 4 && (
                      <li
                        onClick={(e) => handleClickOption(e)}
                        className={`${
                          currentPage === item ? "text-[var(--orange)]" : ""
                        } font-semibold cursor-pointer hover:text-[var(--orange)]`}
                        key={index}
                      >
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>

            <div className="hidden xl:inline-block w-[100%] overflow-hidden">
              <ul className="w-full h-full flex justify-around">
                {navContent.map(
                  (item, index) =>
                    index <= 5 && (
                      <li
                        onClick={(e) => handleClickOption(e)}
                        className={`${
                          currentPage === item ? "text-[var(--orange)]" : ""
                        } font-semibold cursor-pointer hover:text-[var(--orange)]`}
                        key={index}
                      >
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>
          </section>

          <div onClick={() => setIsNavOpen(!isNavOpen)} className="sm:hidden">
            {isNavOpen ? (
              <MdOutlineClose className="sm:hidden text-2xl font-bold text-[var(--orange)]" />
            ) : (
              <IoIosOptions className="sm:hidden text-2xl font-bold text-[var(--orange)]" />
            )}
          </div>

          <div
            onClick={() => setIsNavOpenDesk(!isNavOpenDesk)}
            className="hidden sm:inline-block cursor-pointer"
          >
            {isNavOpenDesk ? (
              <MdOutlineClose className="text-2xl font-bold text-[var(--orange)]" />
            ) : (
              <FaChevronDown className="hidden sm:inline-block text-2xl font-bold text-[var(--orange)]" />
            )}
          </div>

          <section
            className={`transition-all duration-[500ms] overflow-hidden ${
              isNavOpenDesk ? "max-h-[600px]" : "max-h-0 hidden"
            } absolute top-[100%] z-10 left-0 w-[100vw] border-b-3 border-x-2 border-[var(--orange)] bg-[var(--cream)] text-[var(--black)] `}
          >
            <ul className="w-full flex flex-col items-center py-4 font-bold gap-3">
              {navContent.map((items, index) => (
                <li
                  onClick={(e) => handleClickOption(e)}
                  key={index}
                  className={`${
                    currentPage === items ? "text-[var(--orange)]" : ""
                  }`}
                >
                  {items}
                </li>
              ))}
            </ul>
          </section>

          {/* Mobile Nav Option  */}

          <section
            className={`transition-all duration-[500ms] overflow-hidden ${
              isNavOpen ? "max-h-[600px]" : "max-h-0 hidden"
            } bg-[var(--cream)] sm:hidden absolute top-[100%] z-10 left-0 w-[100vw] border-b-3 border-x-2 border-[var(--orange)] text-[var(--black)] `}
          >
            <ul className="w-full flex flex-col items-center py-4 font-bold gap-3">
              {navContent.map((items, index) => (
                <li
                  onClick={(e) => handleClickOption(e)}
                  key={index}
                  className={`${
                    currentPage === items ? "text-[var(--orange)]" : ""
                  }`}
                >
                  {items}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
