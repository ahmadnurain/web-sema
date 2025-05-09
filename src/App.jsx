import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";
import Departments from "./pages/Departments";
import DepartmentPage from "./pages/Department/[departmentId]";
import ProgramKerjaDepartemen from "./pages/Department/proker";
import Bph from "./pages/BphPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/Department/BPH" element={<Bph />} />
          <Route
            path="/department/:departmentId"
            element={<DepartmentPage />}
          />
          <Route
            path="/department/:departmentId/proker"
            element={<ProgramKerjaDepartemen />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
