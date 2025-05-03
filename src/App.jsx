import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import Departments from "./pages/Departments";
import DepartemenKominfo from "./pages/Kominfo";
import ProgramKerjaKominfo from "./pages/KominfoProker";

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
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
