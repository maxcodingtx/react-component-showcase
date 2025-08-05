import { useState } from "react";
import { hexToRgb } from "./hexToRgb";
import { testHex } from "./testHex";
import Input from "../../common/Input";
import Button from "../../common/Button";

export default function HexRgbConverter() {
  const [hexValue, setHexValue] = useState("");
  const [rgbValue, setRgbValue] = useState<number[]>([]);

  const cleanHex = hexValue.replace(/^#/, "");
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Hex To RGB</h1>

      <div className="*:my-5">
        {/* user input */}
        <div className="flex items-center justify-center">
          <div>
            <p className="mx-2.5">Enter Hex Value</p>
            <Input
              value={hexValue}
              onChange={(e) => setHexValue(e.target.value)}
            ></Input>
          </div>
          {/* hex value color preview */}
          <div
            className="h-30 w-30 border-2 border-black text-center"
            // style tag due to dynamic background color
            style={
              testHex(hexValue) &&
              (cleanHex.length === 3 || cleanHex.length === 6)
                ? { backgroundColor: `#${cleanHex}` }
                : { backgroundColor: "#e5e7eb" }
            }
          >
            {testHex(hexValue) &&
            (cleanHex.length === 3 || cleanHex.length === 6)
              ? `#${cleanHex}`
              : "Invalid Hex"}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            className="w-1/8"
            onClick={() => {
              const rgbValues = hexToRgb(hexValue);
              setRgbValue(rgbValues);
            }}
          >
            Convert
          </Button>
          <Button
            type="button"
            className="w-1/8"
            onClick={() => {
              setHexValue("");
              setRgbValue([]);
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* converted values */}

      <div className="my-5 flex flex-col items-center">
        <h2 className="text-center text-2xl font-bold">Converted RGB Values</h2>
        {rgbValue.length > 0 ? (
          <>
            <p>
              R: {rgbValue[0]}, G: {rgbValue[1]}, B: {rgbValue[2]}
            </p>
            <p className="font-semibold select-all">
              RGB({`${rgbValue.join(", ")}`})
            </p>
          </>
        ) : (
          <p>No RGB values to display</p>
        )}
      </div>
    </>
  );
}
