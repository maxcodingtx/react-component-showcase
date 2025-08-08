import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ece4a9] *:text-[#053052]">
      <h1 className="px-3 py-5 font-[Avenir] text-3xl font-bold md:text-4xl">
        Foo
      </h1>
      <hr className="md:hidden" />

      <div className="*:p-3 md:grid md:grid-cols-4 md:text-2xl md:*:flex md:*:flex-col md:*:justify-center md:*:px-6 md:*:py-12">
        <div className="col-span-2 font-[Quicksand] md:border-y">
          <h4 className="py-3 text-xl font-bold">Your Creative Partner</h4>
          <p>Email *</p>
          <div className="max-w-1/2">
            <input
              className="my-3 w-full border-b border-b-black"
              type="text"
            />
            <button
              className="w-full border border-black py-2 hover:bg-[#053052] hover:text-white"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="border-y font-[Quicksand] md:border *:md:text-center">
          {/* contact and location info */}
          <div className="">
            <div className="font-light">
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
              <p>1234 Street Name</p>
              <p>San Francisco, CA 94199</p>
            </div>
          </div>

          {/* social bar */}
          <div className="">
            <ul className="flex gap-3 *:text-center *:text-[#053052] md:justify-center">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        {/* external links */}
        <div className="font-[Quicksand] md:border-y md:border-r">
          <ul className="flex flex-col *:underline md:text-center">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <p className="p-3 md:text-2xl">© 2023 Foo, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
