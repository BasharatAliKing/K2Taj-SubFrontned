export default function Navbar() {
  return (
   <div className="bg-primary container">
    <nav className=" text-white px-6 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold"><img src="/logo.png" className="h-12" alt="" /></h1>
      <div className="flex gap-6 font-medium  text-sm">
        <a href="#best-seller" className="relative text-base after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:w-full after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100">Popular</a>
        <a href="#food-menu" className="relative text-base after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:w-full after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100">Food Menu</a>
        <a href="#contact-us" className="relative text-base after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:w-full after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100">Contact Us</a>
        <a href="#" className="relative text-base after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:w-full after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100"
>
  Leave a Review
</a>

      </div>
    </nav>
   </div>
  );
}
