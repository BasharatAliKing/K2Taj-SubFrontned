import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-10 md:py-16 px-6">
      <div className="flex justify-center">
        <img src="/logo.png" alt="K2 Taj" className="" />
      </div>

      <div className="flex flex-col justify-center text-center md:text-start">
        <h2 className="text-3xl text-center sm:text-start md:text-4xl font-bold text-primary mb-4">
          <Typewriter
            words={[
              "Biryanis",
              "Pizzas",
              "Curries",
              "Sizzlers",
              "MilkShakes",
              "Burgers",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-[#757575] mb-6 text-base md:text-[18px]">
          A very popular local establishment which has been around for over 20
          years, providing a wide range of quality food in Burnley
        </p>
        <button className="bg-primary mx-auto sm:mx-0 font-medium cursor-pointer text-white px-6 py-3 rounded w-fit">
          View Menu
        </button>
      </div>
    </section>
  );
}
