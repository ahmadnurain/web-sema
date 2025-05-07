import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import Departments from "./pages/Departments";
import DepartemenKominfo from "./pages/Kominfo";
import ProgramKerjaKominfo from "./pages/KominfoProker";
import DepartemenRistek from "./pages/Ristek";
import ProgramKerjaRistek from "./pages/RistekProker";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/Department/KOMINFO" element={<DepartemenKominfo />} />
          <Route
            path="/Department/KOMINFO/Proker"
            element={<ProgramKerjaKominfo />}
          />
          <Route path="/Department/RISTEK" element={<DepartemenRistek />} />
          <Route
            path="/Department/RISTEK/Proker"
            element={<ProgramKerjaRistek />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
