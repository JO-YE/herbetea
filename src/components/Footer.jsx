import React from "react";
import arrow from "./assets/arrow-up-right.png";

const Footer = () => {
  return (
    <div className="w-full h-[559px] bg-green-900 opacity-60">
      <div className="flex pt-14 pl-8">
        {/** row 1 */}
        <section className="flex">
          <div>
            <h2 className="text-neutral-50 text-[34px] font-normal italic">
              Herbetea
            </h2>
            <p className="w-[299px] text-neutral-50 text-[64px] text-base font-normal font-Quicksand">
              Each sip of our perfectly blended tea offers a harmonious balance
              of organic ingredients, promoting relaxation, vitality and overall
              wellness.
            </p>
            <div className="flex items-center mt-4">
              <a
                href="/"
                className="Link text-neutral-50 text-base font-normal font-Quicksand"
              >
                Shop here
              </a>
              <img src={arrow} alt="arrow" className="ml-2" />
            </div>
          </div>
        </section>

        {/** row 2 */}
        <div className="flex flex-wrap justify-between gap-8 ml-60">
          {/* Column 1 */}
          <section className="flex-1">
            <h3 className="text-white text-xl font-normal font-PlayfairDisplay pb-3">
              Sitemap
            </h3>
            <div className="text-white text-xl font-normal font-Quicksand">
              <a href="/" className="block mb-4 link">
                Home
              </a>
              <a href="/Products" className="block mb-4 link">
                Products
              </a>
              <a href="/Contact" className="block mb-4 link">
                Contact us
              </a>
              <a href="/FAQ" className="block mb-4 link">
                FAQ
              </a>
            </div>
          </section>

          {/* Column 2 */}
          <section className="flex-1">
            <h3 className="text-white text-xl font-normal font-PlayfairDisplay pb-3">
              Socials
            </h3>
            <div className="text-white text-xl font-normal font-Quicksand">
              <a href="/" className="block mb-4 link">
                Facebook
              </a>
              <a href="/" className="block mb-4 link">
                LinkedIn
              </a>
              <a href="/" className="block mb-4 link">
                Instagram
              </a>
              <a href="/" className="block mb-4 link">
                Twitter
              </a>
            </div>
          </section>

          {/* Column 3 */}
          <section className="flex-1">
            <h3 className="text-white text-xl font-normal font-PlayfairDisplay pb-3">
              Info
            </h3>
            <div className="text-white text-xl font-normal font-Quicksand">
              <a href="/" className="block mb-4 link">
                Return policy
              </a>
              <a href="/" className="block mb-4 link">
                Legal notice
              </a>
              <a href="/" className="block mb-4 link">
                Cookie policy
              </a>
              <a href="/" className="block mb-4 link">
                Terms and Conditions
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="relative bg-neutral-50 rounded-lg">
          <input
            type="email"
            placeholder="Email Address"
            className="w-[756px] h-[123px] px-4 py-2 pr-12 pl-12 border text-green-900 opacity-60 text-xl font-normal font-Playfair Display"
          />
          <button className="text-neutral-50 text-2xl font-semibold font-Quicksand absolute w-[273px] h-[77px] m-auto mr-4 bg-orange-500 rounded-lg inset-y-0 right-0 px-4 py-2 rounded-r-md hover:bg-green-900 ">
            Subscribe
          </button>
        </div>
        <div className="mt-8 w-[230px] h-[25px] text-white text-xl font-normal font-Quicksand">
          Copyright 2024. Florence
        </div>
      </div>
    </div>
  );
};

export default Footer;
