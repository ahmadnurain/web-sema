import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
const MisiSection = () => {
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
            {/* Mission Item 1 */}
            <div className="flex relative pb-12">
              <div
                className="h-full w-10 md:w-16 absolute inset-0 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
              </div>
              <div
                className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >               
                <FontAwesomeIcon icon={fa1} className="text-yellow-600" />
              </div>
              <div
                className="flex-grow pl-4 text-red-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum, distinctio!
                </p>
              </div>
            </div>

            {/* Mission Item 2 */}
            <div className="flex relative pb-12">
              <div
                className="h-full w-10 md:w-16 absolute inset-0 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
              </div>
              <div
                className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <FontAwesomeIcon icon={fa2} className="text-yellow-600" />
              </div>
              <div
                className="flex-grow pl-4 text-red-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis, provident!
                </p>
              </div>
            </div>

            {/* Mission Item 3 */}
            <div className="flex relative pb-12">
              <div
                className="h-full w-10 md:w-16 absolute inset-0 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
              </div>
              <div
                className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <FontAwesomeIcon icon={fa3} className="text-yellow-600" />
              </div>
              <div
                className="flex-grow pl-4 text-red-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores, ducimus!
                </p>
              </div>
            </div>

            {/* Mission Item 4 */}
            <div className="flex relative pb-12">
              <div
                className="h-full w-10 md:w-16 absolute inset-0 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="h-full w-1 bg-yellow-600 pointer-events-none"></div>
              </div>
              <div
                className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <FontAwesomeIcon icon={fa4} className="text-yellow-600" />
              </div>
              <div
                className="flex-grow pl-4 text-red-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, voluptatem.
                </p>
              </div>
            </div>

            {/* Mission Item 5 */}
            <div className="flex relative">
              <div
                className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-warna-kuning shadow-lg rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <FontAwesomeIcon icon={fa5} className="text-yellow-600" />
              </div>
              <div
                className="flex-grow pl-4 text-red-800 text-justify"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="font-semibold title-font text-xl text-red-800 mb-1 tracking-wider">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisiSection;
