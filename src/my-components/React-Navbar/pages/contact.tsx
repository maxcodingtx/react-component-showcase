import React from "react";

type ContactProps = {
  ContactMethodInfo: [string, string, string, string];
  ContactMethods: [string, string, string, string];
};

const ContactPage: React.FC<ContactProps> = ({
  ContactMethods,
  ContactMethodInfo,
}) => {
  return (
    <body className="bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div className="mx-[auto] my-[15%] block w-[80%] rounded-2xl bg-white px-[20px] py-[20px] *:text-center lg:flex lg:items-center lg:justify-around">
        <div className="mb-5 pt-[10px] lg:w-[40%]">
          <h1 className="my-2 text-3xl font-bold">Contact Us</h1>
          <p className="mx-auto my-2 max-w-[400px] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            porro eligendi impedit voluptatem obcaecati quas doloremque iste
            accusantium, incidunt magni, repellat, vel natus ipsum adipisci
            rerum voluptate? Aspernatur, porro quos?
          </p>
        </div>
        <div className="pb-[10px] lg:grid lg:w-[40%] lg:grid-cols-2 lg:grid-rows-2">
          {ContactMethods.map((contactMethod, index) => (
            <div className="my-2">
              <p className="text-lg font-semibold">
                {ContactMethodInfo[index]}
              </p>
              <p className="text-lg font-bold">{contactMethod}</p>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default ContactPage;
