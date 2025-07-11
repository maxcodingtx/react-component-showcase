import React from "react";
import informationBackground from "../images/Information-bg.png";
import informationIconSprite from "../images/information-icon-sprite.png";

export const Information: React.FC = () => {
  return (
    <section
      className="font-roboto bg-cover bg-center bg-no-repeat px-3 py-9 *:mx-auto *:block *:max-w-[720px]"
      style={{ backgroundImage: `url(${informationBackground})` }}
    >
      {/* Venue & Tickets */}
      <section className="">
        <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
          Venue & Tickets
        </h1>
        <div className="my-3 flex justify-between border-b-2 border-b-indigo-950 py-3 *:w-4/7">
          <div className="border-r border-r-indigo-950">
            {/* icon */}
            <div
              className="mx-auto h-[64px] w-[64px] bg-cover"
              style={{ backgroundImage: `url(${informationIconSprite})` }}
            ></div>

            <p className="my-3 text-center font-semibold text-white">
              123 Convention Center
            </p>
            <p className="px-3 text-center text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              vel similique! Labore qui earum totam iste, nulla vel ut possimus!
            </p>
          </div>
          <div className="border-l border-l-indigo-950">
            {/* icon */}
            <div
              className="mx-auto h-[64px] w-[64px] bg-cover bg-position-[center_top_33%]"
              style={{ backgroundImage: `url(${informationIconSprite})` }}
            ></div>

            <p className="my-3 text-center font-semibold text-white">$99</p>
            <p className="px-3 text-center text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              vel similique! Labore qui earum totam iste, nulla vel ut possimus!
            </p>
          </div>
        </div>
      </section>
      {/* Event Features */}
      <section className="">
        <h1 className="text-center text-2xl font-bold text-white">
          Event Features
        </h1>
        <div className="my-3 flex justify-between py-3 *:w-4/7">
          <div className="border-r border-r-indigo-950">
            {/* icon */}
            <div
              className="mx-auto h-[64px] w-[64px] bg-cover bg-position-[center_bottom_33.33%]"
              style={{ backgroundImage: `url(${informationIconSprite})` }}
            ></div>

            <p className="my-3 text-center font-semibold text-white">
              Workshops
            </p>
            <p className="px-3 text-center text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              vel similique! Labore qui earum totam iste, nulla vel ut possimus!
            </p>
          </div>
          <div className="border-l border-l-indigo-950">
            {/* icon */}
            <div
              className="mx-auto h-[64px] w-[64px] bg-cover bg-position-[center_bottom]"
              style={{ backgroundImage: `url(${informationIconSprite})` }}
            ></div>

            <p className="my-3 text-center font-semibold text-white">
              Hackathon
            </p>
            <p className="px-3 text-center text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              vel similique! Labore qui earum totam iste, nulla vel ut possimus!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
