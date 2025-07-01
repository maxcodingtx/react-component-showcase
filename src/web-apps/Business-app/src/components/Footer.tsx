import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ece4a9] *:text-[#053052]">
      <h1 className="px-3 py-5 font-[Avenir] text-3xl font-bold">Foo</h1>
      <hr />
      <div className="px-3 py-3 font-[Quicksand]">
        <h4 className="py-3 text-xl font-bold">Your Creative Partner</h4>
        <p>Email *</p>
        <input className="my-3 w-full border-b border-b-black" type="text" />
        <button
          className="w-full border border-black py-2 hover:bg-[#053052] hover:text-white"
          type="button"
        >
          Submit
        </button>
      </div>

      <div className="mt-5 border-y px-3 py-3 font-[Quicksand] *:mb-5">
        {/* contact and location info */}
        <div className="font-light">
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
        <div className="font-light">
          <p>1234 Street Name</p>
          <p>San Francisco, CA 94199</p>
        </div>

        {/* social bar */}
        <div className="text-sm">
          <ul className="flex gap-3 *:text-[#053052] *:underline">
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

        {/* external links */}
        <div className="text-sm">
          <ul className="flex flex-col *:underline">
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
      <p className="px-3 py-3">© 2023 Foo, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
