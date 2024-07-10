import React, { useState } from "react";
import Mainheader from "../components/header";
import Foot from "../components/Footer";
import ShoppingCartRow from "../components/shoppingcart";
import img1 from '../components/assets/hompage/pic4.png'
import img2 from '../components/assets/serenetea.png'
import img3 from '../components/assets/hompage/pic2.png'

const Checkout = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Blossom Harmony Tea',
      description: 'A perfect blend of nature’s finest herbs.',
      image: img1,
      price: 3500,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Serene Goddess Herbal Tea',
      description: 'A perfect blend of nature’s finest herbs.',
      image: img2,
      price: 3500,
      quantity: 1,
    },

    {
      id: 3,
      name: 'Vitality Vixen Infusion',
      description: 'A perfect blend of nature’s finest herbs.',
      image: img3,
      price: 3500,
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const handleIncrease = (id) => {
    setCart(cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleDecrease = (id) => {
    setCart(cart.map((product) =>
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity - 1) } : product
    ));
  };

  return (
    <div>
      <Mainheader />
      <div className="flex justify-center mt-10">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1044px] h-auto lg:h-[827px] mb-40 space-y-0 lg:space-y-0 lg:space-x-0">
          {/* Left container */}
          <div className="w-full lg:w-[672px] h-auto lg:h-[827px] bg-amber-100 rounded-[10px] p-6">
            <h2 className="text-neutral-900 text-4xl font-normal font-Quicksand pt-7">
              Shopping Cart
            </h2>
            {/* Shopping cart items */}
            {cart.map((product) => (
              <ShoppingCartRow
                key={product.id}
                product={product}
                onRemove={handleRemove}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ))}
            <h2 className="text-xl font-semibold mt-8 mb-4">Order Summary</h2>
           
          </div>

          {/* Right container */}
          <div className="w-full lg:w-[672px] h-auto lg:h-[827px] bg-amber-100 rounded-[10px] border-t lg:border-t-0 lg:border-l border-neutral-900 p-6">
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
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Address:    Apt no, Street"
                />
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent mb-4 md:mb-0"
                    placeholder="City:"
                  />
                  <input
                    type="text"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                    placeholder="Country:"
                  />
                </div>
              </div>
            </form>

            <h2 className="text-neutral-900 text-[30px] font-normal font-Quicksand leading-[105px]">
              Payment Information
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="number"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Card number:    XXXX  XXXX  XXXX  XXXX"
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent mb-4 md:mb-0"
                  placeholder="Expiry date: MM/YY"
                />
                <input
                  type="number"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="CVV: XXX"
                />
              </div>
            </form>

            <div className="flex justify-center mt-8">
              <button className="w-full py-3 bg-green-900 text-neutral-50 text-xl font-semibold rounded-lg font-Quicksand">
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

export default Checkout;
