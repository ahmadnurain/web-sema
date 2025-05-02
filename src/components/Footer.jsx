import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-red-900 rounded-t-3xl text-gray-50 p-10 z-50">
      <div className="footer block lg:flex justify-center items-center">
        {/* Logo Section */}
        <aside className="flex justify-center lg:justify-around items-center w-full lg:w-fit h-full space-x-4">
          <a href="https://upnvj.ac.id/" className="w-16 h-16 md:w-16 md:h-16">
            <img src="Logo/Logo UPNVJ.png" className="w-full" alt="Logo UPNVJ" />
          </a>
          <a href="/" className="w-16 h-16">
            <img src="Logo/Logo BEM UPNVJ.png" className="w-full" alt="Logo BEM UPNVJ" />
          </a>
          <a href="/" className="w-16 h-16">
            <img src="Logo/Logo Parlemen BEM UPNVJ.png" className="w-full" alt="Logo Parlemen" />
          </a>
        </aside>

        {/* Divider */}
        <div className="h-32 w-px hidden lg:flex bg-white mx-4"></div>

        {/* Text Section */}
        <nav className="flex w-full lg:w-3/5 h-full justify-center items-center text-center lg:text-left">
          <p className="text-justify pr-0 lg:pr-10 py-10 lg:py-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam aut, hic, consequatur eveniet numquam pariatur at tempore illo veniam libero similique in exercitationem esse culpa enim modi adipisci maiores dolor! Asperiores
            temporibus natus aspernatur ipsum. Facere aperiam hic voluptatibus fuga alias consectetur nostrum, voluptas sapiente ut, possimus pariatur ullam. Doloribus, expedita laborum asperiores officia corporis perferendis sed? Officia
            asperiores rem totam corporis fugit, accusamus iusto rerum quia aliquam quasi libero dolor aspernatur tenetur soluta odit cum, exercitationem molestiae. Consectetur?
          </p>
        </nav>

        {/* Social Media Section */}
        <nav className="ml-3 lg:ml-0 lg:mt-3">
          <h6 className="footer-title  font-semibold mb-2">Our Social Media</h6>
          <div className="flex flex-col space-y-2">
            <a href="https://instagram.com/sema_ftunma" className="hover:underline hover:text-warna-kuning">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
            <a href="https://www.youtube.com/@SEMAFTUNMA" className="hover:underline hover:text-warna-kuning">
              <FontAwesomeIcon icon={faYoutube} className="mr-2" />
              Youtube
            </a>
          </div>
        </nav>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm mt-10">
        Senat Mahasiswa Fakultas Teknik UNMA.
        <br />
        &copy; Copyright 2025 - SEMA FT UNMA.
      </p>
    </footer>
  );
};

export default Footer;
