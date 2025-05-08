import React from "react";
import { Link } from "react-router-dom";

const StrukturKabinet = () => {
  return (
    <div>
      <div
        className="bg-cover h-auto flex justify-center -mb-28"
        style={{
          backgroundImage: "url(/Background/background-header.png)",
        }}
      >
        <div className="bg-gradient-to-t from-white/100 via-white/70 to-white/50 inset-0 flex justify-center items-center h-screen w-full">
          <div className="bg-gradient-to-t from-white/100 via-white/50 to-white/0 inset-0 flex justify-center items-center h-screen w-full">
            <div className="w-full text-center text-red-800 justify-center">
              <p
                className="text-5xl md:text-7xl font-bold"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                STRUKTUR KABINET
              </p>
              <div className="flex justify-center items-center pt-10">
                <hr className="hidden lg:w-screen md:flex justify-center border-yellow-600 border-b-2" />
                <p
                  className="text-xl md:text-3xl font-bold md:font-semibold inline whitespace-nowrap px-10"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  SEMA FT UNMA Kabinet Satya Naraya
                </p>
                <hr className="hidden lg:w-screen md:flex justify-center border-yellow-600 border-b-2" />
              </div>
              <div
                className="w-full flex justify-center text-center pt-10"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img
                  src="Logo/Logo%20Parlemen%20BEM%20UPNVJ.png"
                  className="w-44 md:w-44 h-44 md:h-44"
                  alt="Logo BEM UPNVJ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap justify-center pb-20 bg-repeat">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/Background/background-bemu.png')",
          }}
        ></div>

        {/* Department Cards - Converted to a reusable component */}
        {departmentData.map((dept, index) => (
          <DepartmentCard key={index} {...dept} />
        ))}
      </div>
    </div>
  );
};

// Reusable Department Card Component
const DepartmentCard = ({ to, logoPath, type, fullName, shortName }) => {
  return (
    <Link
      className="relative items-center z-10 flex-shrink-0 m-3 lg:m-6 overflow-hidden bg-white border-2 border-yellow-600 rounded-xl w-40 h-44 md:w-68 md:h-75 shadow-lg group"
      to={to}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-250 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="rgba(255, 255, 255, 0.5)"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="rgba(255, 255, 255, 0.5)"
        />
      </svg>
      <div className="relative pt-5 px-10 flex items-center justify-center group-hover:scale-125 transition-transform">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.1",
          }}
        ></div>
        <img className="relative w-24 md:w-40" src={logoPath} alt="" />
      </div>
      <div className="relative text-white px-6 pb-6">
        <span className="block opacity-75 -mb-1 text-black text-center md:text-left">
          {type}
        </span>
        <div className="hidden md:flex justify-between">
          <span className="block font-semibold  text-base md:text-xl text-red-800">
            {fullName}
          </span>
        </div>
        <div className="md:hidden flex justify-center">
          <span className="block font-semibold  text-base md:text-xl text-red-800">
            {shortName}
          </span>
        </div>
      </div>
    </Link>
  );
};

// Department data
const departmentData = [
  {
    to: "/Department/BPH",
    logoPath: "/departments/sekretaris/sekretaris.png",
    type: "Sekretaris",
    fullName: "Sekretaris Umum",
    shortName: "SEKRETARIS",
  },
  {
    to: "/Department/BPH",
    logoPath: "/departments/bendahara/bendahara.png",
    type: "Bendahara",
    fullName: "Bendahara Umum",
    shortName: "BENDAHARA",
  },
  {
    to: "/department/kominfo",
    logoPath: "/departments/kominfo/kominfo.png",
    type: "Departemen",
    fullName: "Komunikasi & Informasi",
    shortName: "KOMINFO",
  },
  {
    to: "/department/ristek",
    logoPath: "/departments/ristek/ristek.png",
    type: "Departemen",
    fullName: "Riset & Teknologi",
    shortName: "RISTEK",
  },
  {
    to: "/department/ristek",
    logoPath: "/departments/advokasi/advokasi.png",
    type: "Departemen",
    fullName: "Advokasi",
    shortName: "ADVOKASI",
  },
  {
    to: "/department/ppsdm",
    logoPath: "/departments/ppsdm/ppsdm.png",
    type: "Departemen",
    fullName: "Pengembangan Potensi Sumber Daya Mahasiswa",
    shortName: "PPSDM",
  },
];

export default StrukturKabinet;
