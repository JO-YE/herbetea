// Example of Nav.jsx content
import React from "react";

const Nav = () => {
  return (
    <div className="bg-neutral-50 w-full h-[60px] py-10 flex justify-center items-center ">
      <nav className="navbox flex ">
        <div className="hidden md:flex gap-10 items-center space-x-8 ">
          <a
            href="/"
            className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight"
          >
            Home
          </a>
          <a
            href="/product"
            className="link text-green-900 text-xl font-normal font-Playfair Display tracking-tight"
          >
            Products
          </a>
          
        </div>
      </nav>
    </div>
  );
};

export default Nav;
