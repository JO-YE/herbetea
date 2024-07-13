import React from "react";
import pic1 from "../components/assets/hompage/pic1.png";
import pic2 from "../components/assets/hompage/pic2.png";
import pic3 from "../components/assets/hompage/pics3.png";
import pic4 from "../components/assets/hompage/pic4.png";
import visa from "../components/assets/visa.png";
import master from "../components/assets/master.png";
import apple from "../components/assets/apple.png";
import google from "../components/assets/google.png";

const homepage = () => {
  return (
    <div className="bg-white pt-2 ">
      {/** row 1 */}
      <div className="relative lg:w-full max-w-[1440px] mx-auto rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-900 opacity-60 mx-9"></div>

        {/* Main content container */}
        <div className="relative flex flex-col-reverse h-[500px] mr-9 md:flex-row md:h-[auto]">
          {/* Right side content (on mobile, this will be below the image) */}
          <div className="flex-1 flex items-center justify-center md:order-1">
            <div className="text-white text-center md:text-left md:ml-20">
              <h2 className="w-[471px] text-neutral-50 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Playfair Display leading-[80px] mt-0 pt-0">
                Women’s Herbal Tea
              </h2>
              <p className="w-[361px] text-neutral-50 p-5 text-lg md:text-xl mt-5 md:mt-5 font-normal font-Quicksand leading-normal text-center md:text-left sm:pb-5 lg:pb-8">
                Nurture your wellness with our Women’s Herbal Tea. Discover the
                perfect blend of nature’s finest herbs at Herbetea
              </p>

              <a href="/product">
                <button className="lg:mt-12 p-2.5 bg-orange-500 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-1xl font-semibold font-Quicksand">
                  Explore Products
                </button>
              </a>
            </div>
          </div>

          {/* Image container */}
          <div className="flex-1 relative md:order-2">
            <img
              src={pic1}
              alt="Women’s Herbal Tea"
              className="w-full h-[262px] md:w-full md:h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/** explore categories */}
      <div className="flex items-center justify-center my-20">
        <div className="text-center">
          <div className="w-[371px] h-[0px] border border-neutral-900 opacity-90 mb-4"></div>
          <h3 className="text-2xl font-semibold mb-4">Explore Categories</h3>
          <div className="w-[371px] h-[0px] border border-neutral-900 opacity-90"></div>
        </div>
      </div>

      {/** row 2 */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-[1440px] h-[500px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500 opacity-25 mx-9"></div>
          <div className="relative flex flex-col md:flex-row">
            <div className="flex-1 relative ml-9">
              <img
                src={pic2}
                alt="Search Icon"
                className="w-full h-[262px] md:w-full md:h-full object-cover"
              />
            </div>
            {/* Main content container */}

            <div className="flex-1 flex items-center  justify-center md:order-1">
              {/* Right side content */}
              <div className="text-white text-center md:text-left md:ml-20">
                <h2 className="w-[410.66px] text-neutral-900 text-4xl font-normal font-Playfair Display py-2">
                  Slimming Tea
                </h2>
                <p className="w-[361px] text-neutral-900 text-1xl mt-5 font-normal font-['Quicksand'] leading-normal">
                  Our Specially crafted slimming herbal tea blends are designed
                  to support women’s health and well-being.
                </p>
                <a href="/checkout">
                  <button className="w-[263px] h-[67px] mt-12 p-2.5  bg-green-900 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-1xl font-semibold font-Quicksand">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** row 3 */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-[1440px] h-[500px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500 opacity-25 mx-9"></div>
          <div className="relative flex flex-col-reverse h-[500px] md:flex-row md:h-[auto]">
            <div className="flex-1 flex items-center justify-center">
              {/* Left side content */}
              <div className="ml-20">
                <h2 className="w-[410.66px] text-neutral-900 text-4xl font-normal font-Playfair Display">
                  Cleansing Tea
                </h2>
                <p className="w-[361px] text-neutral-900 text-1xl mt-5 font-normal font-Quicksand leading-normal">
                  Our Specially crafted slimming herbal tea blends are designed
                  to support women’s health and well-being.
                </p>
                <a href="/checkout">
                  <button className="w-[263px] h-[67px] mt-12 p-2.5  bg-green-900 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-1xl font-semibold font-Quicksand">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 relative mr-9">
              <img
                src={pic3}
                alt="Search Icon"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/** row 4 */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-[1440px] h-[500px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500 opacity-25 mx-9"></div>
          <div className="relative flex flex-col md:flex-row">
            <div className="flex-1 relative">
              <img
                src={pic4}
                alt="Search Icon"
                className="w-full h-[262px] md:w-full md:h-full object-cover ml-9"
              />
            </div>
            <div className="flex-1 flex items-center justify-center md:order-1">
              {/* Right side content */}
              <div className="text-center md:text-left md:ml-20">
                <h2 className="w-[410.66px] text-neutral-900 text-4xl font-normal font-Playfair Display Display py-2">
                  English Tea
                </h2>
                <p className="w-[361px] text-neutral-900 text-1xl mt-5 font-normal font-Quicksand leading-normal">
                  Our Specially crafted slimming herbal tea blends are designed
                  to support women’s health and well-being.
                </p>
                <a href="/checkout">
                  <button className="w-[263px] h-[67px] mt-12 p-2.5  bg-green-900 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-1xl font-semibold font-Quicksand">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Payment options */}
      <div className="flex items-center justify-center  my-20">
        <div className="text-center ">
          <div className="w-[371px] h-[0px] border border-neutral-900 opacity-90  mb-4"></div>
          <h3 className="text-2xl font-semibold mb-4">Payment options</h3>
          <div className="w-[371px] h-[0px] border border-neutral-900 opacity-90"></div>
        </div>
      </div>
      <a href="/checkout">
        <div className="flex pb-52 items-center justify-center space-x-4">
          <div className="relative w-[100px] h-[42px] bg-white rounded-lg border border-green-900 opacity-60 flex items-center justify-center">
            <img
              src={visa}
              alt=""
              className="m-auto  object-contain rounded-lg blue-700"
            />
          </div>
          <div className="relative w-[100px] h-[42px] bg-white rounded-lg border border-green-900 opacity-60 flex items-center justify-center">
            <img src={master} alt="" className=" object-contain rounded-lg " />
          </div>
          <div className="relative w-[100px] h-[42px] bg-white rounded-lg border border-green-900 opacity-60 flex items-center justify-center">
            <div className="flex items-center">
              <img
                src={apple}
                alt=""
                className="w-[32px] h-[32px] object-contain rounded-lg"
              />
              <p className="ml-2 text-black opacity-90 text-[22px] font-medium font-Inter">
                Pay
              </p>
            </div>
          </div>
          <div className="relative w-[100px] h-[42px] bg-white rounded-lg border border-green-900 opacity-60 flex items-center justify-center">
            <div className="flex items-center">
              <img
                src={google}
                alt=""
                className="w-[32px] h-[32px] object-contain rounded-lg"
              />
              <p className="ml-2 text-black opacity-90 text-[22px] font-medium font-Inter">
                Pay
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default homepage;
