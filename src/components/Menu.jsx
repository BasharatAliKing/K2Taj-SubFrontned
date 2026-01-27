import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function Menu() {
  const [category, setCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get categories
  const getAllCategory = async () => {
    try {
      const response = await fetch(`${API_URL}/getallcategory`);
      const json = await response.json();
      setCategory(json.categories);
      setSelectedCategory(json.categories[0]?.categoryname || "");
    } catch (error) {
      console.log(error);
    }
  };

  // Get foods
  const getAllFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/getallfooditems`);
      const json = await response.json();
      setFoods(json.message);
    } catch (error) {
      console.log(error);
    }
  };

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
    <section
      id="food-menu"
      className="max-w-6xl mx-auto py-10 md:py-16 px-4 sm:px-6"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-dancing font-bold text-primary text-center mb-8">
        Food Menu
      </h2>

      {/* ================= CATEGORY TABS ================= */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {category.map((val, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(val.categoryname)}
            className={`px-4 py-2 rounded-md cursor-pointer text-sm sm:text-base font-medium capitalize transition
              ${
                selectedCategory === val.categoryname
                  ? "bg-[#4a4a4ad8] text-white"
                  : "bg-primary text-white hover:bg-opacity-80"
              }`}
          >
            {val.categoryname}
          </button>
        ))}
      </div>

      {/* ================= FOOD ITEMS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <p className="text-center col-span-full text-gray-500">
            No Item in this Category — Coming Soon...
          </p>
        )}
      </div>
    </section>
  );
}

/* ================= MENU ITEM ================= */

function MenuItem({ id, img, name, desc, price }) {
  return (
    <Link
      to={`/product-details/${id}`}
      className="flex flex-row items-center gap-1 sm:gap-4 pl-0 sm:pl-4 sm:p-4 rounded-lg hover:bg-gray-50 transition"
    >
      {/* Image */}
      <img
        src={`${API_URL}/${img}`}
        className="w-22 h-full sm:w-28 sm:h-28 object-cover rounded-md"
        alt={name}
      />

      {/* Content */}
      <div className="w-full">
        <div className="border-b border-dotted border-gray-400 flex justify-between items-center pb-1 mb-1">
          <h4 className="font-bold text-base sm:text-lg uppercase">
            {name}
          </h4>
          <span className="font-bold text-charkol text-sm sm:text-base">
            {price}
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          {desc?.split(" ").slice(0, 18).join(" ")}
          {desc?.split(" ").length > 18 && " ..."}
        </p>
      </div>
    </Link>
  );
}
