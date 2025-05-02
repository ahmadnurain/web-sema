import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
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
          <img src="Logo/Logo BEM UPNVJ.png" className="h-16 md:h-12" />
          <img src="Logo/Logo Parlemen BEM UPNVJ.png" className="h-12 md:h-10" />
        </a>

        {/* Hamburger */}
        <button className="lg:hidden text-warna-hijau" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>

        {/* Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full lg:block lg:w-auto bg-white lg:bg-transparent`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium text-base">
            {/* Home */}
            <li>
              <a href="/" className="flex items-center px-3 py-2 text-warna-hijau ">
                Home
              </a>
            </li>

            {/* Struktur Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <div onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                {/* Trigger */}
                <div className="flex items-center px-3 py-2 text-warna-hijau cursor-pointer">
                  Struktur Kabinet
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1 w-3 h-3" />
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-3 z-20 w-44 bg-white rounded shadow -mt-3">
                    <a href="/biro-bidang/SPPI" className="  block px-3 py-2 hover:bg-warna-hijau  hover:bg-red-600  my-2 hover:text-white">
                      KOMINFO
                    </a>
                  </div>
                )}
              </div>
            </li>

            {/* Contact Dropdown */}
            <li className="relative" onMouseEnter={() => setContactDropdownOpen(true)} onMouseLeave={() => setContactDropdownOpen(false)}>
              {/* Trigger */}
              <div className="flex items-center px-3 py-2 text-warna-hijau cursor-pointer">
                Contact <FontAwesomeIcon icon={faChevronDown} className="ml-1 w-3 h-3" />
              </div>

              {/* Dropdown */}
              {contactDropdownOpen && (
                <div className="absolute left-0 z-20 w-32 bg-white rounded shadow">
                  <a href="https://www.instagram.com/bem_upnvj/" className="flex items-center px-4 py-2 hover:bg-warna-hijau hover:bg-red-600 my-2 hover:text-white">
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    Instagram
                  </a>
                  <a href="https://liff.line.me/..." className="flex items-center px-4 py-2 hover:bg-warna-hijau hover:bg-red-600 my-2 hover:text-white">
                    <FontAwesomeIcon icon={faLine} className="mr-2" />
                    Line
                  </a>
                  <a href="mailto:bem@upnvj.ac.id" className="flex items-center px-4 py-2 hover:bg-warna-hijau hover:bg-red-600 my-2 hover:text-white">
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
