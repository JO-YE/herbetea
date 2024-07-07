import React from "react";
import searchIcon from "./assets/search.png";
import userbg from "./assets/ellipse-1.png";
import cart from "./assets/shopping-cart.png";
import user from "./assets/user.png";

const Logo = () => {
  return (
    <div className="bg-neutral-50 w-full h-20 px-24 relative flex justify-between items-start">
      {/** app header logo */}
      <section className="w-[164px] h-20 relative">
        <div className="left-0 top-0 absolute text-green-900 text-[34px] font-normal italic ">
          Herbetea
        </div>
      </section>
      {/* Search Input */}
      <div className="w-2/5 h-[49px] bg-white mt-2 relative flex justify-between border border-green-900 rounded-[10px] ">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="w-4 mt-4 absolute left-1"
        />
        <input
          type="text"
          placeholder="Search..."
          value={""}
          className="w-[350px] pl-3 ml-5 search-box opacity-75 text-base font-normal font-['Playfair Display']"
        />
      </div>
      {/** side logo */}
      <div className="flex items-center mt-4">
        <div className="relative w-[40px] h-[40px]">
          <img src={userbg} alt="usericon background" className="block w-full h-full" />
          <img src={user} alt="user" className="absolute top-1 left-2 " />
        </div>
        <img src={cart} alt="shopping cart" className="ml-4 w-[20px] h-[20px]" />
      </div>
      
    </div>
  );
};

export default Logo;
