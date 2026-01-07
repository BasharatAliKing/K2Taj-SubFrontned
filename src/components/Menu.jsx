import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// src/components/FoodMenu.jsx
const API_URL = import.meta.env.VITE_API_URL;
import "./Menu.css";
export default function Menu() {
  const [category, setCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔹 Get all categories
  const getAllCategory = async () => {
    try {
      const response = await fetch(`${API_URL}/getallcategory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCategory(json.categories);
        // ✅ SET FIRST CATEGORY AS DEFAULT
      setSelectedCategory(json.categories[0].categoryname);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Get all food items
  const getAllFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/getallfooditems`);
      const json = await response.json();
      setFoods(json.message);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Filter foods by selected category
  const filteredFoods = selectedCategory
    ? foods.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  useEffect(() => {
    getAllCategory();
    getAllFoods();
  }, []);
  return (
    <section id="food-menu" className="max-w-6xl mx-auto py-10 md:py-16 px-6">
      <h2 className="text-2xl md:text-5xl font-dancing font-bold text-primary text-center mb-6">
        Food Menu
      </h2>

 {/* ================= CATEGORY TABS ================= */}
      <div className="flex flex-wrap justify-center md:max-w-[90%] mx-auto gap-3 mb-10">
        {category.map((val, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(val.categoryname)}
              className={` text-white px-4 py-2 font-medium cursor-pointer capitalize rounded text-sm
           ${
                selectedCategory === val.categoryname
                  ? "bg-[#4a4a4ad8]"
                  : "bg-primary"
              }`}
          >
            {val.categoryname}
          </button>
        ))}
      </div>
      {/* ================= FOOD ITEMS ================= */}
      <div className="grid md:grid-cols-2 gap-4 gap-y-0 mx-auto">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <MenuItem
              key={item._id}
              id={item._id}
              img={item.imageUrl}
              name={item.name}
              desc={item.description}
              price={`£${item.price}`}
            />
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No Item in this Category Coming Soon...
          </p>
        )}
      </div>
    </section>
  );
}

function MenuItem({ id, img, name, desc, price }) {
  return (
    <Link
      to={`/product-details/${id}`}
      className="flex  p-5 rounded-md justify-center items-center gap-1 pb-4"
    >
      <img
        src={`${API_URL}/${img}`}
        className="h-30 w-30 my-auto rounded-md"
        alt=""
      />
      <div className="w-full">
        <div className="border-b-[2px] border-[#757575] border-dotted flex justify-between items-center">
          <h4 className="font-bold text-lg uppercase ">{name}</h4>
          <span className="font-bold text-primary text-sm md:text-base">{price}</span>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-light text-[#757575]">
          {" "}
          {desc?.split(" ").slice(0, 18).join(" ")}
          {desc?.split(" ").length > 20 && " ..."}
        </p>
      </div>
    </Link>
  );
}
