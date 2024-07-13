import React from "react";
import { useCart } from "../components/cartcontext"; // Importing useCart hook

const ShoppingCart = () => {
  const { cart, removeProduct, increaseQuantity, decreaseQuantity } = useCart(); // Access cart state and functions from CartContext

  return (
    <div className="my-26">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.length === 0 ? (
            <p className="text-neutral-900 text-base font-normal font-Quicksand mb-2">
              Your cart is empty.
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="w-[354px] h-[471px] relative cursor-pointer mb-7"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[374px] h-[356px] mb-4 rounded-md"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="text-left">
                    <h3 className="w-[202px] text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                      {product.name}
                    </h3>
                    <p className="text-neutral-900 text-base font-normal font-Quicksand mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049.957L7.156 6.09H1.6l4.517 3.288L4.201 16l4.849-3.572L13.898 16l-1.916-6.622L16.5 6.09h-5.556L9.049.957z" />
                        </svg>
                      ))}
                      {product.rating % 1 !== 0 && (
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049.957L7.156 6.09H1.6l4.517 3.288L4.201 16l4.849-3.572L13.898 16l-1.916-6.622L16.5 6.09h-5.556L9.049.957z" />
                        </svg>
                      )}
                      <span className="pl-3 text-black text-base font-normal font-Quicksand">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-end space-x-4">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="quantity-button text-gray-500 text-lg font-normal font-Quicksand"
                      >
                        -
                      </button>
                      <span className="text-gray-900 text-lg font-normal font-Quicksand">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="quantity-button text-gray-500 text-lg font-normal font-Quicksand"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="remove-button text-gray-500 text-lg font-normal font-Quicksand mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
