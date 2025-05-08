import React from "react";
import { Link } from "react-router-dom";
import data from "../utils/bph.json";

const Bph = () => {
  const Default = data.default[0]; // Mengambil objek pertama dari array default

  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-cover h-[130vh] md:h-[110vh] flex justify-center"
        style={{
          backgroundImage: "url(/Background/background-header.png)",
        }}
      >
        <div className="bg-gradient-to-t from-white/100 via-white/70 lg:via-white/50 to-white/50 lg:to-white/30 absolute inset-0 flex justify-center items-center h-[130vh] md:h-[110vh]">
          <div className="bg-gradient-to-t from-white/100 via-white/50 to-white/0 absolute inset-0 flex justify-center items-center h-[130vh] md:h-[110vh]">
            <div className="w-full text-center text-red-800 justify-center">
              <p
                className="text-5xl md:text-8xl font-bold mt-32 lg:mt-20 pt-24"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Struktur Organisasi
              </p>

              <div className="flex justify-center items-center pt-10">
                <hr className="w-screen flex justify-center border-yellow-600 border-b-2" />
                <p
                  className="text-2xl md:text-3xl font-bold md:font-semibold inline lg:whitespace-nowrap px-5 lg:px-10"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  {Default.title}
                </p>
                <hr className="w-screen flex justify-center border-yellow-600 border-b-2" />
              </div>

              <div
                className="w-full flex justify-center text-center"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <img
                  src={`/departments/${Default.logo}`}
                  className="w-44 md:w-60 h-44 md:h-60"
                  alt="Logo Departemen Komunikasi & Informasi"
                />
              </div>

              <div className="w-full flex justify-center text-center mb-3 lg:mb-10">
                <p
                  className="w-[80%] text-lg md:text-xl text-red-800 font-normal"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  {Default.desk}
                </p>
              </div>

              {/* <div className="h-auto flex justify-center mb-5 lg:mb-8">
                <Link
                  className="bg-red-800 hover:bg-red-900 text-yellow-600 font-bold text-xl md:text-3xl rounded-3xl flex justify-center p-5"
                  to="/department/kominfo/Proker"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Program Kerja
                  <span className="pl-1 items-center flex justify-center">
                    <svg
                      className="w-7 md:w-9 h-7 md:h-9 text-yellow-600"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 4 4 8 12 12 20 8 12 4" />
                      <polyline points="4 12 12 16 20 12" />
                      <polyline points="4 16 12 20 20 16" />
                    </svg>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Leader Section */}
      {/* <div
        className="bg-cover w-screen h-full pt-20 lg:mt-20 lg:h-full"
        style={{
          backgroundImage: "url(/Background/background-bemu.html)",
        }}
      >
        <div className="bg-gradient-to-b from-white/100 via-white/70 to-white/85 h-full lg:h-full flex flex-col justify-center px-2 md:px-20">
          <div className="flex relative justify-center px-10 lg:px-0">

            <div className="justify-center pr-3 lg:pr-0 w-1/2 lg:w-[30%] lg:mr-16 lg:-mt-16 z-20">
              <div
                className="relative"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <img
                  className="object-cover lg:hidden block z-0"
                  src={`/departments/${Koordinator.image}`}
                  alt="Shalsabila Dwi Aprilia"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"></div>
              </div>

              <p
                className="text-xl lg:text-3xl text-red-800 font-normal text-center lg:text-end"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                {Koordinator.nama}
              </p>

              <div
                id="tooltip-Fariz Ridanhus Akhdan"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>

              <p
                className="font-normal text-yellow-600 hover:underline text-xl lg:text-2xl text-center lg:text-end"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <a
                  data-tooltip-target="tooltip-Fariz Ridanhus Akhdan"
                  href="https://www.instagram.com/"
                >
                  @{Koordinator.instagram}
                </a>
              </p>

              <p
                className="text-xl lg:text-2xl text-red-800 font-semibold lg:font-bold text-center lg:text-end"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {Koordinator.title}
              </p>
            </div>


            <div
              className="hidden relative lg:flex lg:w-2/5 justify-center z-10"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="object-cover -m-20 z-20"
                src={`/departments/${Koordinator.image}`}
                alt={Koordinator.nama}
              />
            </div>

            <div
              className="absolute hidden lg:block w-full -mt-36 -mb-24 z-30 inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"
              data-aos="fade-up"
              data-aos-duration="2000"
            ></div>
          </div>
        </div>
      </div> */}

      {/* Members Section */}
      <div
        className="bg-cover w-full"
        style={{
          backgroundImage: "url(/Background/background-bemu.html)",
        }}
      >
        <div className="bg-white/85 flex justify-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex justify-center">
              <p
                className="text-3xl md:text-4xl text-red-800 font-bold pt-16 lg:mt-20"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Badan Pengawas Harian
              </p>
            </div>

            <div className="flex justify-center pt-5">
              <hr
                className="w-28 md:w-52 justify-center border-warna-kuning border-b-2"
                data-aos="fade-down"
                data-aos-duration="2000"
              />
            </div>

            <div className="pt-10">
              <div
                className=" flex flex-wrap justify-center text-center text-lg md:text-xl font-normal text-red-800 pb-8 px-4 md:pb-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {data.anggota.map((orang) => (
                  <div
                    key={orang.id}
                    className="w-1/2 md:w-1/3 lg:w-1/4 py-2 box-border"
                  >
                    <img
                      className="object-cover z-10"
                      src={`/departments/${orang.image}`}
                      alt={orang.name}
                    />
                    <p className="flex flex-col justify-center items-center bg-red-800 border-2 border-yellow-600 text-white text-sm mx-3 px-1 py-1 rounded-lg">
                      {orang.name}
                      <hr
                        className="w-28 md:w-52 justify-center border-warna-kuning border-b-1"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                      />
                      <span>{orang.jabatan}</span>
                    </p>
                    <div
                      id={`tooltip-${orang.name.replace(/\s+/g, "-")}`}
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      <i className="fa-brands fa-instagram"></i> Instagram
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <p className="font-semibold hover:text-yellow-600">
                      <a
                        data-tooltip-target={`tooltip-${orang.name.replace(
                          /\s+/g,
                          "-"
                        )}`}
                        href={`https://www.instagram.com/${orang.instagram}`}
                      >
                        @{orang.instagram}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="bg-cover w-full hidden md:block"
        style={{
          backgroundImage: "url(image/Background/background-bemu.html)",
        }}
      >
        <div
          className="relative bg-white/85 w-full h-full flex flex-col justify-end z-20"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img
            className="z-10"
            src={`/departments/${Default.allanggota}`}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white z-20"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Bph;
