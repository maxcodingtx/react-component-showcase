import type React from "react";
import Gear from "../images/gear-icon.png";
import Shield from "../images/shield-icon.png";
import Battery from "../images/battery-icon.png";

interface OverviewProps {
  facts: string[];
  factsInfo: string[];
}

export const OverviewSection: React.FC<OverviewProps> = ({
  facts,
  factsInfo,
}) => {
  const colors = [
    "oklch(91.7% 0.06 205.041)", // cyan
    "oklch(88.5% 0.20 18.334)", // red
    "oklch(88% 0.25 274.039)", // indigo
    "oklch(90.1% 0.09 70.697)", // orange
  ];

  const iconsUrl = [Gear, Gear, Battery, Shield];
  const iconsBG = [
    "oklch(86.5% 0.13 207.078)", // cyan
    "oklch(80.8% 0.25 19.571)", // red
    "oklch(78.5% 0.30 274.713)", // indigo
    "oklch(83.7% 0.14 66.29)", // orange
  ];

  return (
    <section className="mt-3 grid grid-cols-2 grid-rows-2 gap-10">
      {facts.map((fact, index) => (
        <div
          className="flex rounded-xl px-4 py-4 opacity-80"
          style={{ backgroundColor: colors[index] }}
        >
          <div
            className="mr-4 max-w-8 self-start rounded p-2"
            style={{ backgroundColor: iconsBG[index] }}
          >
            <img src={iconsUrl[index]} alt="Gear icon" />
          </div>
          <div>
            <h1 className="mb-2 text-xl font-bold">{fact}</h1>
            <p className="text-sm font-semibold">{factsInfo[index]}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
