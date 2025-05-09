import data from "../utils/home.json";

const VisiSection = () => {
  const Visi = data.home[0];
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="relative z-10 lg:py-6 lg:-me-5">
            <div
              class="relative h-64 sm:h-80 lg:h-full"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img
                alt=""
                src={Visi.visiImage}
                class="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div
            class="relative flex items-center bg-red-800 rounded-xl lg:rounded-r-lg -mt-3"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <span class="hidden lg:absolute lg:inset-y-0 lg:-start-10 rounded-lg lg:block lg w-10:md:w-16 lg:bg-warna-hijau"></span>

            <div class="p-8 sm:p-16">
              <h2 class="text-3xl text-yellow-600 font-bold border-b-2 border-yellow-600 pb-3">
                Visi
              </h2>

              <p class="mt-4 text-white text-xl text-justify">
                {Visi.visi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiSection;
