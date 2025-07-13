import React from "react";
import speakerIcon from "../images/icon-speaker.png";
export const Speakers: React.FC = () => {
  return (
    <section className="px-3 py-9 md:py-18">
      <div className="mx-auto grid max-w-[720px] grid-cols-2 gap-3 md:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div key={index + 1}>
            <img
              className="mx-auto h-auto w-20"
              src={speakerIcon}
              alt={`Speaker Icon${index + 1}`}
            />
            <h3 className="font-roboto text-center text-2xl font-semibold text-white">
              First Last
            </h3>

            <p className="font-roboto text-center text-xl text-gray-600">
              Occupation
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
