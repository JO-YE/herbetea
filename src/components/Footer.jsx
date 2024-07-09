import React from "react";
import arrow from "./assets/arrow-up-right.png";

const Footer = () => {
  return (
    <div className="bg-green-900 opacity-60">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <section className="text-white">
            <h2 className="text-2xl md:text-4xl font-normal italic mb-4">
              Herbetea
            </h2>
            <p className="max-w-sm md:max-w-none text-base md:text-lg font-normal font-Quicksand mb-4">
              Each sip of our perfectly blended tea offers a harmonious balance
              of organic ingredients, promoting relaxation, vitality and overall
              wellness.
            </p>
            <div className="flex items-center">
              <a href="/" className="text-base font-normal font-Quicksand link">
                Shop here
              </a>
              <img src={arrow} alt="arrow" className="ml-2" />
            </div>
          </section>

          {/* Column 2 */}
          <section className="text-white flex-1">
            <h3 className="text-xl font-normal font-PlayfairDisplay pb-3">
              Sitemap
            </h3>
            <div className="text-base font-normal font-Quicksand">
              <a href="/" className="block mb-2 link">
                Home
              </a>
              <a href="/Products" className="block mb-2 link">
                Products
              </a>
              <a href="/Contact" className="block mb-2 link">
                Contact us
              </a>
              <a href="/FAQ" className="block mb-2 link">
                FAQ
              </a>
            </div>
          </section>

          {/* Column 3 */}
          <section className="text-white">
            <h3 className="text-xl font-normal font-PlayfairDisplay pb-3">
              Socials
            </h3>
            <div className="text-base font-normal font-Quicksand">
              <a href="/" className="block mb-2 link">
                Facebook
              </a>
              <a href="/" className="block mb-2 link">
                LinkedIn
              </a>
              <a href="/" className="block mb-2 link">
                Instagram
              </a>
              <a href="/" className="block mb-2 link">
                Twitter
              </a>
            </div>
          </section>

          {/* Column 4 */}
          <section className="text-white">
            <h3 className="text-xl font-normal font-PlayfairDisplay pb-3">
              Info
            </h3>
            <div className="text-base font-normal font-Quicksand">
              <a href="/" className="block mb-2 link">
                Return policy
              </a>
              <a href="/" className="block mb-2 link">
                Legal notice
              </a>
              <a href="/" className="block mb-2 link">
                Cookie policy
              </a>
              <a href="/" className="block mb-2 link">
                Terms and Conditions
              </a>
            </div>
          </section>
        </div>

        {/* Subscribe Section */}
        <div className="flex items-center justify-center mt-8">
          <div className="relative bg-neutral-50 rounded-lg overflow-hidden w-full lg:w-80">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 px-4 py-2 pr-12 pl-12 border text-green-900 opacity-60 text-base font-normal font-PlayfairDisplay"
            />
            <button className="absolute inset-y-0 right-0 w-40 h-12 bg-orange-500 text-neutral-50 text-base font-semibold font-Quicksand rounded-r-md hover:bg-green-900 flex items-center justify-center">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-white text-xl font-normal font-Quicksand text-center">
          &copy; {new Date().getFullYear()}. Florence
        </div>
      </div>
    </div>
  );
};

export default Footer;
