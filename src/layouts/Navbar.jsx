import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-primary container pb-0">
      <nav className="mx-auto text-white md:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <img src="/logo.png" className="h-12" alt="Logo" />

        {/* Desktop Menu */}
       <div className="hidden md:flex gap-6 font-medium text-sm">
  {[
    { label: "Popular", href: "#best-seller" },
    { label: "Food Menu", href: "#food-menu" },
    { label: "Contact Us", href: "#contact-us" },
    { label: "Leave a Review", href: "#review" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.href}
      className="relative text-base after:content-[''] after:absolute after:left-0 after:-bottom-[5px]
      after:w-full after:h-[2px] after:bg-white after:opacity-0
      after:transition-all after:duration-200 hover:after:opacity-100"
    >
      {item.label}
    </a>
  ))}
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute left-0 w-full duration-500 bg-primary text-white px-6 py-4 space-y-4">
          <a href="#best-seller" onClick={()=>{setOpen(false)}} className="block text-base">Popular</a>
          <a href="#food-menu" onClick={()=>{setOpen(false)}} className="block text-base">Food Menu</a>
          <a href="#contact-us" onClick={()=>{setOpen(false)}} className="block text-base">Contact Us</a>
          <a href="#" onClick={()=>{setOpen(false)}} className="block text-base">Leave a Review</a>
        </div>
      )}
    </div>
  );
}
