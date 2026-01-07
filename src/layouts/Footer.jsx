import { MapPin, Pencil, Phone } from "lucide-react";

export default function Footer() {
  return (
 <>
    <footer id="contact-us" className="bg-white container ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">
        <div className="relative flex gap-5 md:gap-10 flex-col">
          <h3 className="font-bold text-primary mb-3 text-2xl md:text-3xl font-dancing after:content-[''] after:absolute after:left-0 after:top-12 after:w-[50px] after:h-[2px] after:bg-primary">Our Location</h3>
          <iframe
            className="w-full h-48 md:h-72 rounded"
            src="https://maps.google.com/maps?q=Briercliffe%20Chippery&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>

        <div className="relative flex gap-2 md:gap-5 flex-col">
          <h3 className="font-bold md:mb-7 text-primary mb-3 text-2xl md:text-3xl font-dancing after:content-[''] after:absolute after:left-0 after:top-12 after:w-[50px] after:h-[2px] after:bg-primary">Contact Us</h3>
        <p className="flex gap-1 font-medium text-primary duration-500 cursor-pointer items-start "><MapPin  size={22}/>  167 Briercliffe Road, Burnley, Lancashire, BB10 1UY, United Kingdom  </p>
          <p className="flex gap-1 font-medium text-primary duration-500 cursor-pointer items-center  "><Phone size={22}/> 01282 432611</p>
          <p className="flex gap-1 font-medium text-primary duration-500 cursor-pointer items-center  "><Pencil size={22}/>  Leave a Review</p>
        </div>
      </div>

    </footer>
      <p className="text-center text-sm  md:text-base py-1 bg-primary text-gray-100">
       Copyright © <b>K2 Taj</b>, All Rights Reserved.
      </p>
 </>
  );
}
