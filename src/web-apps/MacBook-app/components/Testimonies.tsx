import type React from "react";
import UserIconOrange from "../images/user-icon-orange.jpg";
import UserIconIndigo from "../images/user-icon-indigo.jpg";
import UserIconRed from "../images/user-icon-red.jpg";
import UserIconCyan from "../images/user-icon-cyan.jpg";

interface TestimonialsProps {
  testimonies: string[];
  names: string[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonies, names }) => {
  const iconURLS = [UserIconIndigo, UserIconRed, UserIconOrange, UserIconCyan];
  const colors = [
    "bg-indigo-300",
    "bg-red-300",
    "bg-orange-300",
    "bg-cyan-300",
  ];

  return (
    <section>
      {testimonies.map((testimony, index) => {
        return (
          <div
            key={index}
            className={`my-5 flex justify-around rounded-2xl px-8 py-4 ${colors[index]}`}
          >
            <div className="w-1/10">
              <img
                className="mt-2 w-14 rounded-full"
                src={iconURLS[index]}
                alt="User Icon"
              />
            </div>

            <div className="w-9/10">
              <p className="text-lg font-semibold">{testimony}</p>
              <p>{names[index]}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonials;
