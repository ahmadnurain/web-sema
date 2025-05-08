import data from "../utils/home.json";

const LeaderSection = () => {
  const Bro = data.home[0];
  return (
    <div
      className="bg-contain w-full h-full"
      style={{
        backgroundImage: "url(Background/background-patern-2.png)",
      }}
    >
      <div className="bg-gradient-to-b from-white/100 via-white/75 to-white/70 h-full">
        <div className="bg-gradient-to-t from-white/100 via-white/30 to-white/0 h-full flex flex-col justify-center">
          <div
            className="relative w-full flex xl:hidden justify-center items lg:px-14"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              className="object-cover w-full xl:h-screen"
              src={`/departments/${Bro.image}`}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"></div>
          </div>
          <div className="flex justify-center md:px-20 gap-8 mt-10 md:mt-0">
            <div
              className="justify-center w-2/5 md:w-[30%] h-auto mt-0"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p className="text-2xl md:text-3xl mt-10 text-red-800 font-bold">
                {Bro.ketua}
              </p>
              <div
                id="tooltip-head"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-xl font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <p className="font-semibold text-warna-kuning hover:text-warna-kuning-dark">
                <a
                  data-tooltip-target="tooltip-head"
                  href={`https://www.instagram.com/${Bro.igKetua}`}
                >
                  @{Bro.igKetua}
                </a>
              </p>
              <p className="text-red-800 font-bold">Ketua SEMA FT</p>
              <p className="text-justify text-lg md:text-xl text-red-800 font-normal px-3 md:px-0">
                {Bro.teksKetua}
              </p>
            </div>
            <div
              className="relative w-full lg:w-fit hidden xl:flex justify-center items"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="object-cover h-1/2 md:h-screen"
                src={`/departments/${Bro.image}`}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"></div>
            </div>
            <div
              className="justify-center w-2/5 md:w-[30%] h-auto md:mt-24"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <p className="text-2xl md:text-3xl text-red-800 font-bold">
                {Bro.wakil}
                <br />
              </p>
              <div
                id="tooltip-vice"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-xl font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <p className="font-semibold text-warna-kuning hover:text-warna-kuning-dark">
                <a
                  data-tooltip-target="tooltip-vice"
                  href={`https://www.instagram.com/${Bro.igWakil}`}
                >
                  @{Bro.igWakil}
                </a>
              </p>
              <p className="text-red-800 font-bold">Wakil Ketua SEMA FT</p>
              <p className="text-justify text-lg md:text-xl text-red-800 font-normal px-3 md:px-0">
                {Bro.teksWakil}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderSection;
