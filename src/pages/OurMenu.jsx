import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layouts/MenuHeader';
import Hero from '../components/MenuHero';
import BestSellers from '../components/BestSellers';
import FoodMenu from '../components/FoodMenu';
import Footer from '../layouts/MenuFooter';
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite

const OurMenu = () => {
  const [ourmenu, setOurMenu] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  const fetchRandomFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/foods-items-random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res_data = await response.json();
      if (response.ok) {
        setOurMenu(res_data);
      }
    } catch (err) {
      console.error("Error fetching foods:", err);
    } finally {
      setLoading(false); // ✅ Stop loading after API call finishes
    }
  };

  useEffect(() => {
    fetchRandomFoods();
  }, []);

  const filteredMenu = ourmenu.filter(
    (val) => val?.price > 0 && val?.category
  );

  if (loading) {
    // ✅ Loading screen
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          src="/logo.png"  // 👉 put your logo path here (public folder in Vite)
          alt="Loading..."
          className="w-24 h-24 animate-spin"
        />
      </div>
    );
  }
  return (
    <div className="bg-charkol bg-no-repeat bg-cover text-white">
     {/* <Header /> */}
      <Hero />
      <BestSellers />
      <FoodMenu />
   
    </div>
  )
}
export default OurMenu;
