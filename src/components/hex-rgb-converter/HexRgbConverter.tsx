import { useState } from "react";
import { hexToRgb } from "./hexToRgb";
import { testHex } from "./testHex";
import Input from "../../common/Input";

export default function HexRgbConverter() {
  const [hexValue, setHexValue] = useState("");
  const [rgbValue, setRgbValue] = useState<number[]>([]);

  const cleanHex = hexValue.startsWith("#") ? hexValue.slice(0) : hexValue;

  return (
    <>
      <h1>Hex To RGB</h1>

      <div className="">
        {/* user input */}
        <div className="">
          <div className="">
            <p>Enter Hex Value</p>
            <Input
              value={hexValue}
              onChange={(e) => setHexValue(e.target.value)}
            ></Input>
          </div>
          {/* hex value color preview */}
          <div
            className={
              testHex(hexValue) &&
              (cleanHex.length === 3 || cleanHex.length === 6)
                ? `h-30 w-30 bg-[#${cleanHex}] border-2 border-black`
                : `h-30 w-30 border-2 border-black bg-gray-200`
            }
          ></div>
        </div>

        <div className="">
          <button
            type="button"
            onClick={() => {
              const rgbValues = hexToRgb(hexValue);
              setRgbValue(rgbValues);
            }}
          >
            Convert
          </button>
          <button
            type="button"
            onClick={() => {
              setHexValue("");
              setRgbValue([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* converted values */}

      <div className="">
        <h2>Converted RGB Values</h2>
        {rgbValue.length > 0 ? (
          <>
            <p>
              R: {rgbValue[0]}, G: {rgbValue[1]}, B: {rgbValue[2]}
            </p>
            <p>CSS - RGB({`${rgbValue.join(", ")}`})</p>
          </>
        ) : (
          <p>No RGB values to display</p>
        )}
      </div>
    </>
  );
}
