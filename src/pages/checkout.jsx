import React from "react";
import Mainheader from "../components/header";
import Foot from "../components/Footer";

const checkout = () => {
  return (
    <div>
      <Mainheader />
      <div className="flex justify-center mt-10">
        <div className="flex justify-between w-full max-w-[1044px] h-[827px] mb-40">
          {/* Left container */}
          <div className="w-[672px] h-[827px] bg-amber-100 rounded-tl-[10px] rounded-bl-[10px] p-6">
            <h2 className="text-neutral-900 text-4xl font-normal font-Quicksand">
              Shopping Cart
            </h2>
            {/* Shopping cart items would go here */}
            <h2 className="text-xl font-semibold mt-8 mb-4">Order Summary</h2>
            {/* Order summary details would go here */}
          </div>

          {/* Right container */}
          <div className="w-[672px] h-[827px] bg-amber-100 rounded-tr-[10px] rounded-br-[10px] border-l border-neutral-900 p-6">
            <h2 className="text-neutral-900 text-[32px] font-normal font-Quicksand leading-[105px]">
              Shipping Information
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Email:          johndoe@gmail.com"
                />
              </div>
              <div className="rounded-lg border border-green-900">
                <input
                  type="text"
                  className="w-full h-[59px] border border-green-900 pl-5 bg-transparent"
                  placeholder="Address:    Apt no, Street"
                />
                <input
                  type="text"
                  className="w-full h-[59px]  border border-green-900 pl-5 bg-transparent"
                  placeholder="City:"
                />
                <input
                  type="text"
                  className="w-full h-[59px] border border-green-900 pl-5 bg-transparent"
                  placeholder="Country:"
                />
              </div>
            </form>

            <h2 className="text-neutral-900 text-[30px] font-normal font-Quicksand leading-[105px]">
              Payment Information
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="number"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent "
                  placeholder="Card number:    XXXX  XXXX  XXXX  XXXX"
                />
              </div>
              <div className="flex space-x-0">
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                    placeholder="Expiry date: MM/YY"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="number"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                    placeholder="CVV: XXX"
                  />
                </div>
              </div>
            </form>

            <div className="flex justify-center mt-8">
              <button className="w-full py-3 bg-green-900  text-neutral-50 text-xl font-semibold rounded-lg font-Quicksand">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default checkout;
