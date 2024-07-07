import React from "react";
import arrow from "./assets/arrow-up-right.png";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[559px] bg-green-900/opacity-60">
      <div>
        {/** row 1 */}
        <section>
          <div>
            <h2 className="text-neutral-50 text-[64px] font-normal italic">
              Herbetea
            </h2>
            <p className="w-[299px] text-neutral-50 text-base font-normal font-['Quicksand']">
              Each sip of our perfectly blended tea offers a harmonious balance
              of organic ingredients, promoting relaxation, vitality and overall
              wellness.
            </p>
            <div>
              <a
                href="/"
                className="Link text-neutral-50 text-base font-normal font-['Quicksand']"
              >
                Shop here
              </a>
              <img src={arrow} alt="arrow" className="" />
            </div>
          </div>
        </section>

        {/** row 2 */}
        <section>
          <h3 className="text-white text-xl font-normal font-['Playfair Display']">
            Sitemap
          </h3>
          <div className="text-white text-xl font-normal font-Quicksand">
            {" "}
            <a href="/" className="block mb-4 link">
              Home
            </a>
            <a href="/Products" className="block mb-4 link">
              Products
            </a>
            <a href="/" className="block mb-4 link">
              Contact us
            </a>
            <a href="/" className="block mb-4 link">
              FAQ
            </a>
          </div>
        </section>

        {/** row 3 */}
        <section>
          <h3 className="text-white text-xl font-normal font-['Playfair Display']">
            Socials
          </h3>
          <div className="text-white text-xl font-normal font-['Quicksand']">
            {" "}
            <a href="/" className="link">
              Facebook
            </a>
            <a href="/" className="link">
              LinkedIn
            </a>
            <a href="/" className="link">
              Instagram
            </a>
            <a href="/" className="link">
              Twitter
            </a>
          </div>
        </section>

        {/** row 4 */}
        <section>
          <h3 className="text-white text-xl font-normal font-['Playfair Display']">
            Info
          </h3>
          <div className="text-white text-xl font-normal font-['Quicksand']">
            {" "}
            <a href="/" className="link">
              Return policy
            </a>
            <a href="/" className="link">
              Legal notice
            </a>
            <a href="/" className="link">
              Cookie policy
            </a>
            <a href="/" className="link">
              Terms and Conditions
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
