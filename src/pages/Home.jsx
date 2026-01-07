import React, { useEffect, useState } from "react";
import OurMenu from "./OurMenu";
import MainOutlet from "./MainOutlet";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import Menu from "../components/Menu";
const API_URL = import.meta.env.VITE_API_URL; // ✅ Correct way in Vite
const Home = () => {
   
  return (
    <>
    <Navbar />
      <Hero />
      <BestSellers />
      <Menu />
      <Footer />
    </>
  );
};

export default Home;
