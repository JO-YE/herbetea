import React from "react";

const ShoppingCartRow = ({ product, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="shopping-cart-row flex items-center p-2 ">
      {/* Column 1: Product Image */}
      <div className="product-image w-1/6">
        <img src={product.image} alt={product.name} className="w-full" />
      </div>

      {/* Column 2: Product Details */}
      <div className="product-details w-3/6 px-4">
        <h2 className=" text-neutral-900 text-xl font-normal font-Playfair Display">{product.name}</h2>
        <p className="text-black text-base font-normal">{product.description}</p>
        <div className="quantity-control flex items-center mt-2">
          <button
            onClick={() => onDecrease(product.id)}
            className="minus-button p-2 w-[31.33px] h-7 bg-green-900 rounded-tl rounded-bl flex-col justify-center items-center gap-2.5 inline-flex text-center text-neutral-50 text-2xl font-semibold font-Quicksand"
          >
            -
          </button>
          <span className="quantity  w-[31.33px] h-7 p-2.5 bg-neutral-50  justify-center items-center gap-2.5 inline-flex  text-center text-black opacity-60 text-[19px] font-semibold font-Quicksand">{product.quantity}</span>
          <button
            onClick={() => onIncrease(product.id)}
            className="plus-button p-2 w-[31.33px] h-7 bg-green-900 rounded-tl rounded-bl flex-col justify-center items-center gap-2.5 inline-flex text-center text-neutral-50 text-2xl font-semibold font-Quicksand"
          >
            +
          </button>
        </div>
      </div>

      {/* Column 3: Price and Remove Button */}
      <div className="product-price w-2/6 flex flex-col justify-end items-end">
        <span className="w-[105px] h-10 text-neutral-900 text-xl font-normal font-Playfair Display mb-2">
          ₦{product.price.toFixed(2)}
        </span>
        <button
          onClick={() => onRemove(product.id)}
          className="remove-button text-gray-500 text-lg font-normal font-Quicksand"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartRow;
