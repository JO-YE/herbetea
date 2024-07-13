import React, { useState } from "react";
import searchIcon from "./assets/search.png";
import carticon from "./assets/shopping-cart.png";

const Logo = ({ cart = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white pt-10 lg:bg-white w-full h-20 pb-40 px-24 py-56 relative flex justify-between items-start overflow-hidden">
      {/* App header logo */}
      <section className="w-[200px] md:w-[200px] lg:w-[250px] h-20 relative">
        <div className="left-0 top-0 absolute text-green-900 text-[24px] md:text-[28px] lg:text-[34px] font-normal italic">
          Herbetea
        </div>
      </section>

      {/* Search Input - visible on lg screens and larger */}
      <div className="hidden lg:flex w-2/5 h-[49px] bg-white mt-2 relative justify-between border border-green-900 rounded-[10px]">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="w-4 mt-4 absolute left-1"
        />
        <input
          type="text"
          placeholder="Search..."
          value={""}
          className="w-[450px] pl-3 ml-5 search-box opacity-75 text-base font-normal font-Playfair Display"
        />
      </div>

      {/* Side logo */}
      {/* Cart Icon */}
      <div className="flex items-center mt-4 relative">
        <a href="/checkout">
          <img
            src={carticon}
            alt="shopping cart"
            className="ml-4 w-[20px] h-[20px]"
          />
          {/* Red dot indicator */}
          <div className="absolute top-0 right-0 left-0.3 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center text-black">
            {cart.length}
          </div>
        </a>
      </div>

      {/* Nav list doing this for desktop view*/}
      <div className="hidden md:block w-full md:absolute md:top-[70px] md:left-50 md:z-30 md:mt-10">
        {/* Horizontal line */}
        <div className="border-b border-zinc-300 my-2"></div>

        <nav className="w-full navbox flex mx-50 justify-center items-center m-auto space-x-8 pt-5">
          <a
            href="/"
            className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight mr-8"
          >
            Home
          </a>
          <a
            href="/product"
            className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight"
          >
            Products
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-end items-center mt-4 pl-7 ">
        <button
          onClick={toggleMobileMenu}
          className="block text-gray-900 bg-white focus:outline-none lg:hidden"
        >
          <div className="w-6 h-0.5 bg-green-900 mb-1"></div>
          <div className="w-6 h-0.5 bg-green-900 mb-1"></div>
          <div className="w-6 h-0.5 bg-green-900"></div>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-10 w-full h-full border border-white bg-white absolute top-8 left-0 z-60">
          {/* Horizontal line */}
          <div className="border-b border-zinc-300 my-2"></div>

          {/* Search Input for Mobile */}
          <div className="flex w-full bg-white border border-green-900 rounded-[10px]">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="w-4 mt-4 ml-2"
            />
            <input
              type="text"
              placeholder="Search..."
              value={""}
              className="w-full pl-3 pr-2 py-1 search-box opacity-75 text-base font-normal font-['Playfair Display']"
            />
          </div>

          {/* Nav list */}
          <nav className="w-full mt-4 navbox flex flex-col items-center space-y-2 ">
            <a
              href="/"
              className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight"
            >
              Home
            </a>
            <a
              href="/product"
              className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight "
            >
              Products
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Logo;
