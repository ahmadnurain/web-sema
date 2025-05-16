import Rating from "./Range";

const FormInput = ({
  formData,
  files,
  handleChange,
  handleFileChange,
  handleSubmit,

  isSubmitting,
}) => {
  const questions = [
    {
      ratingName: "kepuasanKuliah",
      textareaName: "alasanKuliah",
      question: "Bagaimana kepuasan anda kuliah di fakultas teknik?",
    },
    {
      ratingName: "kepuasanPerpustakaan",
      textareaName: "alasanPerpustakaan",
      question: "Bagaimana kepuasan anda terhadap Perpustakaan?",
    },
    {
      ratingName: "kepuasanParkiran",
      textareaName: "alasanParkiran",
      question: "Bagaimana kepuasan anda terhadap Parkiran?",
    },
    {
      ratingName: "kepuasanLab",
      textareaName: "alasanLab",
      question: "Bagaimana tanggapan anda terhadap Lab di fakultas teknik?",
    },
    {
      ratingName: "kepuasanKelas",
      textareaName: "alasanKelas",
      question: "Bagaimana kepuasan anda terhadap ruang kelas?",
    },
    {
      ratingName: "kepuasanDosen",
      textareaName: "alasanDosen",
      question: "Bagaimana kepuasan anda terhadap kinerja dosen?",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Input Prodi */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Program Studi</label>
        <select name="prodi" value={formData.prodi} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500" required>
          <option value="">Pilih Prodi</option>
          <option value="Informatika">Informatika</option>
          <option value="Mesin">Mesin</option>
          <option value="Sipil">Sipil</option>
          <option value="Industri">Industri</option>
        </select>
      </div>

      {/* Daftar Pertanyaan */}
      {questions.map((item, index) => (
        <div key={index} className="mb-6">
          <label className="block mb-2 font-medium">{item.question}</label>

          <Rating name={item.ratingName} value={formData[item.ratingName]} onChange={handleChange} />

          <textarea
            name={item.textareaName}
            value={formData[item.textareaName]}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Berikan alasan..."
            required
            rows={3}
          />
        </div>
      ))}

      {/* Pertanyaan Khusus */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Adakah dosen yang bermasalah selama proses mengajar di FT UNMA?
          <span className="block text-sm text-gray-300 mt-1">Sebutkan Nama Dosen, Matakuliah dan Prodi</span>
        </label>
        <textarea name="dosenBermasalah" value={formData.dosenBermasalah} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800" rows={4} />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Aspirasi Lainnya</label>
        <textarea name="aspirasiLain" value={formData.aspirasiLain} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800" rows={4} />
      </div>

      {/* Upload File */}
      <div className="mb-8">
        <label className="block mb-2 font-medium">Upload Bukti (Maksimal 5 file, 100MB total)</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-yellow-500 file:text-white
            hover:file:bg-yellow-600"
          accept="image/*,.pdf,.doc,.jpg,.png,.jpeg,.docx"
        />
        {files.length > 0 && <p className="mt-2 text-sm text-gray-300">File terpilih: {files.length}</p>}
      </div>

      <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md" disabled={isSubmitting}>
        {isSubmitting ? "Mengirim..." : "Kirim Aspirasi"}
      </button>
    </form>
  );
};

export default FormInput;
