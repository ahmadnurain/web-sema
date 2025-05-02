import "animate.css";

const HeroSection = () => {
  return (
    <div className="h-full relative">
      {/* Background image with iframe */}
      <div className="h-screen flex justify-center bg-center bg-cover w-full relative" style={{ backgroundImage: "url('logo/image/UPN_VETERAN_JAKARTA.png')" }}>
        {/* YouTube iframe - hanya muncul di desktop */}
        <iframe
          className="w-screen h-screen aspect-video overflow-x-hidden hidden md:block"
          title="P3M BEM UPNVJ 2024"
          src="https://www.youtube-nocookie.com/embed/4lg_G0tvgnQ?enablejsapi=1&version=3&controls=0&rel=0&autoplay=1&loop=1&mute=1&playlist=4lg_G0tvgnQ&playsinline=1"
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-white w-full h-full">
          {/* Centered Text */}
          <div className="absolute inset-0 flex justify-center items-center h-full">
            <div className="flex flex-col items-center text-center text-white justify-center">
              <p className="text-xl md:text-4xl font-semibold animate__animated animate__zoomIn animate__slower animate__delay-1s">Welcome to Official Website</p>
              <p className="text-4xl md:text-7xl font-bold py-3 animate__animated animate__zoomIn animate__slower animate__delay-2s">
                <span className="text-red-800">SENAT</span> MAHASISWA
                <br /> FAKULTAS <span className="text-red-800">TEKNIK</span>
              </p>
              <p className="text-2xl md:text-4xl font-semibold pb-3 animate__animated animate__zoomIn animate__slower animate__delay-2s">Kabinet Satya Naraya</p>
              <div className="flex justify-center w-screen animate__animated animate__zoomIn animate__slower animate__delay-2s">
                <hr className="w-2/6 md:w-[15%] border-red-800 border-b-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
