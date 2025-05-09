import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import data from "../utils/home.json";

const MisiSection = () => {
  const misiList = data.misi;

  // Mapping icon sesuai dengan id misi (id 1 - 5)
  const getIconByIndex = (index) => {
    switch (index) {
      case 1:
        return fa1;
      case 2:
        return fa2;
      case 3:
        return fa3;
      case 4:
        return fa4;
      case 5:
        return fa5;
      default:
        return fa1;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex justify-center flex-wrap">
        <div className="text-center flex justify-center py-10">
          <p
            className="text-3xl text-red-800 font-bold border-b-2 border-warna-kuning pb-3"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Misi
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-5/6 md:w-2/3 md:py-6">
            {misiList.map((item, index) => {
              const icon = getIconByIndex(item.id);
              return (
                <div className="flex relative pb-12" key={item.id}>
                  {/* Garis vertikal (tidak ditampilkan di item terakhir) */}
                  {index !== misiList.length - 1 && (
                    <div
                      className="h-full w-10 md:w-16 absolute inset-0 flex items-center justify-center"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
                    </div>
                  )}

                  {/* Ikon dan nomor misi */}
                  <div
                    className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <FontAwesomeIcon icon={icon} className="text-yellow-600" />
                  </div>

                  {/* Teks misi */}
                  <div
                    className="flex-grow pl-4 text-red-800 text-justify"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed text-xl">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisiSection;
