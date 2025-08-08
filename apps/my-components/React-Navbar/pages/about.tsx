import type { JSX } from "react";

const AboutPage = (): JSX.Element => {
  return (
    <body className="bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div className="mx-[auto] my-[15%] block w-[80%] rounded-2xl bg-white px-[20px] py-[25px] *:text-center">
        <div className="mb-5 pt-[10px]">
          <h1 className="my-2 text-3xl font-bold">About Us</h1>
          <p className="mx-auto my-2 max-w-[400px] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            porro eligendi impedit voluptatem obcaecati quas doloremque iste
            accusantium, incidunt magni, repellat, vel natus ipsum adipisci
            rerum voluptate? Aspernatur, porro quos?
          </p>
        </div>
      </div>
    </body>
  );
};

export default AboutPage;
