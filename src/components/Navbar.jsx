import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const dropdownRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setContactDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="lg:bg-white w-full absolute z-40">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4 px-8 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/Logo/Logo BEM UPNVJ.png" className="h-16 md:h-12" />
          <img
            src="/Logo/Logo Parlemen BEM UPNVJ.png"
            className="h-12 md:h-10"
          />
        </a>

        {/* Hamburger dengan animasi */}
        <button
          className="lg:hidden text-warna-hijau relative w-8 h-8 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute top-1/2 left-1/2 w-8 -translate-x-1/2 -translate-y-1/2">
            {/* Garis atas */}
            <span
              className={`block absolute h-1 w-full bg-current rounded transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>

            {/* Garis tengah */}
            <span
              className={`block absolute h-1 w-full bg-current rounded transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            {/* Garis bawah */}
            <span
              className={`block absolute h-1 w-full bg-current rounded transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto bg-white lg:bg-transparent rounded-lg`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium text-base">
            {/* Home */}
            <li>
              <a
                href="/"
                className="relative inline-flex items-center px-3 py-2 text-black hover:text-white hover:bg-red-800 lg:hover:text-black lg:hover:bg-white rounded-md group"
              >
                Home
                <span
                  className="absolute bottom-2 left-3 h-0.5 bg-red-800 transition-all duration-500 ease-in-out origin-left transform scale-x-0 group-hover:scale-x-100"
                  style={{ width: "calc(100% - 1.5rem)" }}
                ></span>
              </a>
            </li>

            {/* Struktur Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {/* Trigger */}
                <Link
                  to="/Departments"
                  className="relative inline-flex items-center px-3 py-2 hover:text-white hover:bg-red-800 lg:hover:text-black lg:hover:bg-white rounded-md cursor-pointer group"
                >
                  Struktur Kabinet
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-1 w-3 h-3"
                  />
                  <span
                    className="absolute bottom-2 left-3 h-0.5 bg-red-800 transition-all duration-500 ease-in-out origin-left transform scale-x-0 group-hover:scale-x-100"
                    style={{ width: "calc(100% - 1.5rem)" }}
                  ></span>
                </Link>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-3 z-20 w-44 bg-white rounded shadow -mt-3 lg:-mt-1">
                    <Link
                      to="/Department/BPH"
                      className="  block px-3 py-2 text-black hover:text-white hover:bg-red-800 rounded-md"
                    >
                      BPH
                    </Link>
                    <Link
                      to="/Department/KOMINFO"
                      className="  block px-3 py-2 text-black hover:text-white hover:bg-red-800 rounded-md"
                    >
                      KOMINFO
                    </Link>
                    <Link
                      to="/Department/RISTEK"
                      className="  block px-3 py-2 text-black hover:text-white hover:bg-red-800 rounded-md"
                    >
                      RISTEK
                    </Link>
                    <Link
                      to="/Department/ADVOKASI"
                      className="  block px-3 py-2 text-black hover:text-white hover:bg-red-800 rounded-md"
                    >
                      ADVOKASI
                    </Link>
                    <Link
                      to="/Department/PPSDM"
                      className="  block px-3 py-2 text-black hover:text-white hover:bg-red-800 rounded-md"
                    >
                      PPSDM
                    </Link>
                  </div>
                )}
              </div>
            </li>

            {/* Contact Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setContactDropdownOpen(true)}
              onMouseLeave={() => setContactDropdownOpen(false)}
            >
              {/* Trigger */}
              <div className="relative inline-flex items-center px-3 py-2 hover:text-white hover:bg-red-800 lg:hover:text-black lg:hover:bg-white rounded-md cursor-pointer group">
                Contact{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 w-3 h-3"
                />
                <span
                  className="absolute bottom-2 left-3 h-0.5 bg-red-800 transition-all duration-500 ease-in-out origin-left transform scale-x-0 group-hover:scale-x-100"
                  style={{ width: "calc(100% - 1.5rem)" }}
                ></span>
              </div>

              {/* Dropdown */}
              {contactDropdownOpen && (
                <div className="absolute left-0 z-20 w-32 bg-white rounded shadow">
                  <a
                    href="https://www.instagram.com/sema_ftunma/"
                    className="flex items-center px-4 py-2 hover:text-white hover:bg-red-800 rounded-md"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    Instagram
                  </a>

                  <a
                    href="mailto:semaftunma2022@gmail.com"
                    className="flex items-center px-4 py-2 hover:text-white hover:bg-red-800 rounded-md"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Email
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
