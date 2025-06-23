import type { JSX } from "react";
import Button from "./common/Button";

const PricingSection = (): JSX.Element => {
  return (
    <section className="my-12">
      <h1 className="mb-4 text-center text-4xl font-bold md:text-left">
        Pricing
      </h1>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* 1299/mo pricing */}
        <div className="w-4/7 rounded-xl bg-orange-200 px-4 py-8 md:w-1/3">
          <h1 className="mb-3 text-center text-3xl font-bold md:text-start">
            $1299
          </h1>
          <ul className="list-inside list-disc text-center text-xl md:text-start">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] bg-orange-400"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>
        {/* 1699/mo pricing */}
        <div className="w-4/7 rounded-xl bg-indigo-200 px-4 py-8 md:w-1/3">
          <h1 className="mb-3 text-center text-3xl font-bold md:text-start">
            $1699
          </h1>
          <ul className="list-inside list-disc text-center text-xl md:text-start">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] bg-indigo-400"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>
        {/* 1899/mo pricing */}
        <div className="w-4/7 rounded-xl bg-cyan-200 px-4 py-8 md:w-1/3">
          <h1 className="mb-3 text-center text-3xl font-bold md:text-start">
            $1899
          </h1>
          <ul className="list-inside list-disc text-center text-xl md:text-start">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <Button
            className="mx-auto block w-[min(90%,160px)] bg-cyan-400"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
