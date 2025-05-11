import { React, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
