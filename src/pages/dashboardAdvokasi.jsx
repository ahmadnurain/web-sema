import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardAdvokasi = () => {
  const [aspirasiData, setAspirasiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProdi, setSelectedProdi] = useState("Semua");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    document.title = "Dashboard Aspirasi - SEMA FT";

    // Cek authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/advokasi-login");
    }

    fetchAspirasiData();
  }, [navigate]);

  const fetchAspirasiData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://advokasi.hacodes.web.id/api/aspirasi"
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await response.json();
      setAspirasiData(data.data || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus data ini?")) return;

    try {
      const response = await fetch(
        `https://advokasi.hacodes.web.id/api/aspirasi/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menghapus data");
      }

      alert("Data berhasil dihapus");
      fetchAspirasiData(); // Refresh data
    } catch (err) {
      alert(`Error: ${err.message}`);
      console.error("Error deleting data:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/advokasi-login");
  };

  // Filter data berdasarkan search dan prodi
  const filteredData = aspirasiData.filter((item) => {
    const matchesSearch = Object.values(item).some(
      (val) =>
        val && val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesProdi =
      selectedProdi === "Semua" || item.prodi === selectedProdi;
    return matchesSearch && matchesProdi;
  });

  // Dapatkan daftar prodi unik untuk filter
  const prodiOptions = [
    "Semua",
    ...new Set(aspirasiData.map((item) => item.prodi)),
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-24 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 lg:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-red-800">
            Dashboard Advokasi
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Filter Controls */}
        <div
          className="bg-white p-4 rounded-lg shadow-md mb-6"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Cari</label>
              <input
                type="text"
                placeholder="Cari data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Filter Prodi</label>
              <select
                value={selectedProdi}
                onChange={(e) => setSelectedProdi(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {prodiOptions.map((prodi) => (
                  <option key={prodi} value={prodi}>
                    {prodi}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={fetchAspirasiData}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Refresh Data
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
            <p className="mt-2">Memuat data...</p>
          </div>
        ) : (
          /* Data Table */
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prodi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kepuasan Kuliah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aspirasi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.prodi}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-2 w-20 bg-gray-200 rounded-full mr-2">
                              <div
                                className={`h-full rounded-full ${
                                  item.kepuasanKuliah < 40
                                    ? "bg-red-500"
                                    : item.kepuasanKuliah < 70
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                                }`}
                                style={{ width: `${item.kepuasanKuliah}%` }}
                              ></div>
                            </div>
                            <span>{item.kepuasanKuliah}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="max-w-xs truncate">
                            {item.aspirasiLain || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() =>
                              navigate(`/detail-aspirasi/${item.id}`)
                            }
                            className="text-blue-600 hover:text-blue-800 mr-3"
                          >
                            Detail
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        Tidak ada data yang ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAdvokasi;
