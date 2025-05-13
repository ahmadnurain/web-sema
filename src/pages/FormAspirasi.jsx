import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Rating from "../components/Range";
import FormInput from "../components/FormInput";

const FormAspirasi = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:mb-10 max-w-screen-3xl">
      <div>
        <div
          className="h-64 w-full bg-repeat-y bg-cover flex justify-center items-center"
          style={{
            backgroundImage: "url(/Background/background-header2.webp)",
          }}
        >
          <div className="px-10 bg-gradient-to-t from-white/100 via-white/50 to-white/10 inset-0 flex justify-center items-center h-full w-full border-warna-kuning border-b-2">
            <h1
              className="mt-14 text-red-800 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              ASPIRASI MAHASISWA FT UNMA
              <br />
              2025/2026
            </h1>
          </div>
        </div>
        <div className="flex lg:justify-around flex-col lg:flex-row md:px-14 pt-7 p-10 lg:gap-12 text-red-800 text-justify items-center xl:items-start">
          <div
            className="bg-red-800 w-full h-full mb-10 md:w-2/3 xl:mt-10 lg:w-1/2 p-5 rounded-xl text-white"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <FormInputWithLogic />
          </div>
          <div
            className="mb-7 md:mb-10 md:text-lg lg:w-1/2 xl:w-2/5 xl:mt-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p>
              Untuk kalian yang mempunyai aspirasi terkait masalah yang
              dirasakan selama menjadi mahasiswa di Fakultas Teknik UNMA bisa di
              sampaikan melalui form ini. (Setiap aspirasi yang saudara
              sampaikan bersifat privasi dan terhindar dari setiap
              intervensi/ancaman).
            </p>
            <p className="font-bold mt-5 md:text-lg">
              Kind Regards, <br />
              Departemen ADVOKASI SEMA FT Kabinet Satya Naraya
            </p>
            <div className="text-yellow-600 mt-4">
              <p className="font-bold">Contact:</p>
              <a
                className="hover:underline"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=birosppi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-regular fa-envelope me-1"></i>
                  birosppi@gmail.com
                </p>
              </a>
              <a
                className="hover:underline"
                href="https://line.me/ti/p/~sarahczh_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa-brands fa-line me-1"></i>sarahczh_
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInputWithLogic = () => {
  const initialFormState = {
    prodi: "",
    kepuasanKuliah: 50,
    alasanKuliah: "",
    kepuasanPerpustakaan: 50,
    alasanPerpustakaan: "",
    kepuasanParkiran: 50,
    alasanParkiran: "",
    kepuasanLab: 50,
    alasanLab: "",
    kepuasanKelas: 50,
    alasanKelas: "",
    kepuasanDosen: 50,
    alasanDosen: "",
    dosenBermasalah: "",
    aspirasiLain: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = "https://advokasi.hacodes.web.id/api/aspirasi";
  // Change to your backend URL

  const getRatingLabel = (value) => {
    if (value < 20) return "Tidak Puas";
    if (value < 40) return "Kurang Puas";
    if (value < 60) return "Cukup Puas";
    if (value < 80) return "Puas";
    return "Sangat Puas";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Append form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Append files
      files.forEach((file) => {
        formDataToSend.append("files", file);
      });

      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Gagal mengirim data");
      }

      // Hanya tampilkan satu alert
      alert("Aspirasi berhasil dikirim!");

      // Reset form menggunakan initialFormState yang sudah didefinisikan
      setFormData(initialFormState);
      setFiles([]);
    } catch (error) {
      console.error("Error:", error);
      // Hanya tampilkan error jika bukan dari alert success
      if (!error.message.includes("Aspirasi berhasil dikirim")) {
        alert(`Error: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "range" ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, 5);

    // Validasi ekstensi file
    const allowedExtensions = [
      ".webp",
      ".jpeg",
      ".webp",
      ".pdf",
      ".doc",
      ".docx",
    ];
    const invalidFiles = selectedFiles.filter((file) => {
      const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
      return !allowedExtensions.includes(ext);
    });

    if (invalidFiles.length > 0) {
      alert(
        `File berikut tidak diizinkan: ${invalidFiles
          .map((f) => f.name)
          .join(", ")}`
      );
      e.target.value = ""; // Reset input file
      return;
    }

    setFiles(selectedFiles);
  };

  return (
    <FormInput
      formData={formData}
      files={files}
      handleChange={handleChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      getRatingLabel={getRatingLabel}
      isSubmitting={isSubmitting}
    />
  );
};

export default FormAspirasi;
