import React from "react";

const ProgramKerjaRistek = () => {
  // Program data array
  const programData = [
    {
      id: 1,
      title: "Lorem",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi exercitationem itaque dolorum dolore repellat natus at tenetur neque corporis vel!",
      image: "/Proker/comingsoon.png",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius eligendi quisquam ipsa quos alias doloremque, ex quis reprehenderit quasi.",
      image: "/Proker/comingsoon.png",
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aspernatur, voluptatem quod quibusdam animi quia quam mollitia veritatis! Aspernatur, corporis.",
      image: "/Proker/comingsoon.png",
    },
  ];

  return (
    <div className="pb-0 mb-10">
      {/* Header Section */}
      <div
        className="bg-cover h-96 flex justify-center"
        style={{
          backgroundImage: "url(/Background/background-header.png)",
        }}
      >
        <div className="bg-gradient-to-t from-white/100 via-white/70 to-white/50 absolute inset-0 flex justify-center items-center h-96">
          <div className="bg-gradient-to-t from-white/100 via-white/50 to-white/0 absolute inset-0 flex justify-center items-center h-96">
            <div className="w-full pt-14 text-center text-red-800 justify-center">
              <p
                className="text-4xl md:text-8xl font-bold"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Program Kerja
              </p>
              <div className="flex justify-center items-center py-10">
                <hr className="w-screen flex justify-center border-yellow-600 border-b-2" />
                <p
                  className="text-2xl md:text-3xl font-bold md:font-semibold inline lg:whitespace-nowrap px-5 lg:px-10"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Departemen Ristek & Teknologi
                </p>
                <hr className="w-screen flex justify-center border-yellow-600 border-b-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program List Section */}
      <div className="bg-white flex justify-center">
        <div className="w-[90%] h-auto">
          <div className="flex justify-center lg:justify-start mb-10">
            <p
              className="text-yellow-600 text-center lg:text-start text-2xl lg:text-3xl font-bold border-warna-kuning border-b-2"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Program Kerja Departemen Ristek & Teknologi
            </p>
          </div>

          {/* Program List - Mapped from array */}
          {programData.map((program) => (
            <div key={program.id} className="pb-12">
              <div
                className="flex flex-col lg:flex-row justify-center items-center px-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  className="w-3/4 lg:w-[15%] h-3/4 lg:h-[15%] rounded-3xl"
                  src={program.image}
                  alt={`Program ${program.title}`}
                />
                <div className="w-full pt-5 lg:pt-0 pl-0 lg:pl-10 items-center">
                  <div className="flex flex-col justify-center lg:justify-start">
                    <p className="text-red-800 text-xl text-center lg:text-left font-bold">
                      {program.title}
                    </p>
                    <p className="text-red-800 text-lg text-center lg:text-justify my-3">
                      {program.description}
                    </p>
                  </div>
                  <hr className="border border-gray-200 mt-10 block lg:hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramKerjaRistek;
