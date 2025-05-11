import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailAspirasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aspirasi, setAspirasi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchAspirasi();
  }, [id]);

  const fetchAspirasi = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://advokasi.tpunesakti.my.id/api/aspirasi/${id}`);
      
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      }
      
      const result = await response.json();
      setAspirasi(result.data);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;
    
    try {
      const response = await fetch(`http://localhost:3001/api/aspirasi/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Gagal menghapus data');
      }
      
      alert('Data berhasil dihapus');
      navigate('/dashboard-advokasi');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-auto max-w-md mt-8">
        {error}
      </div>
    );
  }

  if (!aspirasi) {
    return <div className="text-center mt-8">Data tidak ditemukan</div>;
  }

  const ratingItems = [
    { label: 'Kepuasan Kuliah', value: aspirasi.kepuasanKuliah, alasan: aspirasi.alasanKuliah },
    { label: 'Kepuasan Perpustakaan', value: aspirasi.kepuasanPerpustakaan, alasan: aspirasi.alasanPerpustakaan },
    { label: 'Kepuasan Parkiran', value: aspirasi.kepuasanParkiran, alasan: aspirasi.alasanParkiran },
    { label: 'Kepuasan Lab', value: aspirasi.kepuasanLab, alasan: aspirasi.alasanLab },
    { label: 'Kepuasan Kelas', value: aspirasi.kepuasanKelas, alasan: aspirasi.alasanKelas },
    { label: 'Kepuasan Dosen', value: aspirasi.kepuasanDosen, alasan: aspirasi.alasanDosen }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-red-800">Detail Aspirasi</h1>
              <p className="text-gray-600">
                Prodi: <span className="font-semibold">{aspirasi.prodi}</span>
              </p>
              <p className="text-gray-600">
                Tanggal: <span className="font-semibold">
                  {new Date(aspirasi.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              >
                Kembali
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Hapus Data
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Rating Items */}
            {ratingItems.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        item.value < 40 ? 'bg-red-500' :
                        item.value < 70 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 font-medium">{item.value}%</span>
                </div>
                <p className="text-gray-700">{item.alasan}</p>
              </div>
            ))}

            {/* Dosen Bermasalah */}
            {aspirasi.dosenBermasalah && (
              <div className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-2">Dosen Bermasalah</h3>
                <p className="text-gray-700 whitespace-pre-line">{aspirasi.dosenBermasalah}</p>
              </div>
            )}

            {/* Aspirasi Lain */}
            {aspirasi.aspirasiLain && (
              <div className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-2">Aspirasi Lainnya</h3>
                <p className="text-gray-700 whitespace-pre-line">{aspirasi.aspirasiLain}</p>
              </div>
            )}

            {/* File Attachments */}
            {aspirasi.files && aspirasi.files.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Lampiran</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {aspirasi.files.map((file, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex items-center">
                        <div className="mr-3">
                          {file.name.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                            <img
                              src={file.url}
                              alt={`Lampiran ${index + 1}`}
                              className="h-16 w-16 object-cover rounded"
                            />
                          ) : (
                            <div className="h-16 w-16 bg-gray-200 flex items-center justify-center rounded">
                              <span className="text-gray-500 text-xs">File</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {file.name}
                          </p>
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAspirasi;