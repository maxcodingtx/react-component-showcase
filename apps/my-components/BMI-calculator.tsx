import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="mx-auto mt-[20px] block max-w-[400px] rounded border px-[12px] py-[18px]">
      <div className="flex justify-between">
        <Input
          label="Weight (kg)"
          type="text"
          onChange={(e) => {
            setWeight(parseInt(e.target.value));
          }}
        />

        <Input
          label="Height (cm)"
          type="text"
          onChange={(e) => {
            setHeight(parseInt(e.target.value));
          }}
        />
      </div>

      <Button
        onClick={() => {
          if (weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height values.");
            return;
          }
          const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
          alert(`Your BMI is ${bmi}`);
        }}
      >
        Get BMI
      </Button>
    </div>
  );
};

export default BMICalculator;
