import type { JSX } from "react";

const HomePage = (): JSX.Element => {
  return (
    <body className="bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div className="my-6 flex flex-col items-center px-8 py-12">
        <div className="max-w-2xl rounded-tl-xl rounded-tr-xl bg-white px-12 py-18 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-6xl">
            Welcome Home
          </h1>
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="mb-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            facilis odit consequatur incidunt rerum tempora exercitationem iste,
            excepturi dolor illo?
          </p>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima debitis dolorem, mollitia consequuntur natus error vitae
            ratione voluptatem molestiae. Dolor, labore hic voluptatem
            reiciendis corrupti recusandae. Eos laudantium ratione libero,
            maxime sapiente cum nihil?
          </p>
        </div>
        <div className="max-w-2xl bg-white px-12 py-8 text-center">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-6xl">
            Section 2
          </h1>
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="mb-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            facilis odit consequatur incidunt rerum tempora exercitationem iste,
            excepturi dolor illo?
          </p>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima debitis dolorem, mollitia consequuntur natus error vitae
            ratione voluptatem molestiae. Dolor, labore hic voluptatem
            reiciendis corrupti recusandae. Eos laudantium ratione libero,
            maxime sapiente cum nihil?
          </p>
        </div>
        <div className="max-w-2xl rounded-br-xl rounded-bl-xl bg-white px-12 py-8 text-center">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-6xl">
            Section 3
          </h1>
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="mb-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            facilis odit consequatur incidunt rerum tempora exercitationem iste,
            excepturi dolor illo?
          </p>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima debitis dolorem, mollitia consequuntur natus error vitae
            ratione voluptatem molestiae. Dolor, labore hic voluptatem
            reiciendis corrupti recusandae. Eos laudantium ratione libero,
            maxime sapiente cum nihil?
          </p>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
