import HeroSection from "../components/Herosection";
import KabinetSection from "../components/Kabinetsection";
import LeaderSection from "../components/Leadersection";
import MisiSection from "../components/Misisection";
import VisiSection from "../components/Visisection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LeaderSection />
      <div
        className="bg-contain w-full h-auto md:h-full bg-repeat"
        style={{
          backgroundImage: "url(Background/background-patern-2.png)",
        }}
      >
        <div className="bg-gradient-to-b from-white/100 via-white/85 to-white/40 h-full flex flex-col justify-center">
          <div className="w-full flex justify-center lg:items-center mt-20">
            <img
              data-aos="fade-down"
              data-aos-duration="2000"
              className="w-full"
              src="Section/foto%20kabinet.png"
              alt=""
            />
          </div>
          <div className="bg-white/70 w-full pb-10 h-full px-5 flex justify-center">
            <div className="w-full h-auto lg:px-28">
              {/* section */}
              <KabinetSection />
              <VisiSection />
              <MisiSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
