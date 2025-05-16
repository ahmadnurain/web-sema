const KabinetSection = () => {
  return (
    <>
      <div className="flex justify-center pt-10">
        <p
          className="text-3xl text-red-800 font-bold border-b-2 border-yellow-600 pb-3"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Kabinet Satya Naraya
        </p>
      </div>
      <div className="w-full h-auto flex flex-col justify-center mb-10">
        <iframe
          className="mx-auto w-full lg:max-w-xl h-56 rounded-lg sm:h-96 shadow-xl my-10"
          data-aos="fade-down"
          data-aos-duration="2000"
          src="https://www.youtube-nocookie.com/embed/4lg_G0tvgnQ?si=m8gZhlQPWxCnu96w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p
          className="px-8 lg:px-28 text-justify text-xl font-normal text-red-800"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <span className="font-bold">Satya Naraya </span>menggambarkan semangat
          kepemimpinan yang dilandasi oleh kejujuran, komitmen untuk menjaga
          amanah, serta tekad untuk mengayomi dan melayani masyarakat dengan
          penuh dedikasi.
          <br />
          <br />
          Kabinet <span className="font-bold">Satya Naraya </span>ini hadir sebagai wujud nyata dari generasi yang menjunjung tinggi integritas, tanggung jawab, serta semangat gotong royong demi terciptanya perubahan yang berkelanjutan. Dengan semangat Satya Naraya, setiap langkah diambil untuk kebaikan bersama, dengan menjadikan nilai-nilai luhur sebagai pedoman utama dalam pengabdian.


        </p>
      </div>
    </>
  );
};

export default KabinetSection;
