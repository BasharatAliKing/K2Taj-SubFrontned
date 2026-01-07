import { MapPin, Pencil, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer id="contact-us" className="bg-white container">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 py-10">
          
          {/* Location */}
          <div className="relative flex flex-col gap-5">
            <h3 className="font-dancing font-bold text-primary text-2xl sm:text-3xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-[50px] after:h-[2px] after:bg-primary">
              Our Location
            </h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8315.88589097934!2d-2.476441811659649!3d53.75787605103308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9e4ba6ec047d%3A0x7cf34d50a8245c04!2sK2%20Taj%20Chippery%20And%20Curry%20House!5e0!3m2!1sen!2s!4v1767797091405!5m2!1sen!2s"
              className="w-full h-52 sm:h-64 md:h-72 rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact */}
          <div className="relative flex flex-col gap-4">
            <h3 className="font-dancing font-bold text-primary text-2xl sm:text-3xl relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-[50px] after:h-[2px] after:bg-primary">
              Contact Us
            </h3>

            <p className="flex gap-3 text-primary font-medium items-start sm:items-center text-sm sm:text-base">
              <MapPin size={22} className="shrink-0" />
              <span>
                167 Briercliffe Road, Burnley, Lancashire, BB10 1UY, United Kingdom
              </span>
            </p>

            <p className="flex gap-3 text-primary font-medium items-center text-sm sm:text-base">
              <Phone size={22} className="shrink-0" />
              01282 432611
            </p>

            <p className="flex gap-3 text-primary font-medium items-center cursor-pointer text-sm sm:text-base hover:underline">
              <Pencil size={22} className="shrink-0" />
              Leave a Review
            </p>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm font-light md:text-base py-2 bg-primary text-gray-100">
        Copyright © <b>K2 Taj</b>, All Rights Reserved.
      </p>
    </>
  );
}
