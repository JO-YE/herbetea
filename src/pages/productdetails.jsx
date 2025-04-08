import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Mainheader from "../components/header";
import Foot from "../components/Footer";
import Review from "../components/review";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // this state manages quantity
  const [showKeyIngredients, setShowKeyIngredients] = useState(false);
  const [showHowToUse, setShowHowToUse] = useState(false);
  const [showAllergyInfo, setShowAllergyInfo] = useState(false);
  

  useEffect(() => {
  const fetchProduct = async () => {
    const url = `https://dummyjson.com/products/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched product data:", data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  fetchProduct();
}, [id]);
  
  if (!product) {
    return <div>Loading...</div>;
  }

  // Handlers for increasing and decreasing quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(Math.max(1, quantity - 1));
  };


  return (
    <div>
      <Mainheader />
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-[942px] h-auto lg:h-[912px] mx-auto">
        {/* Left side Image */}
        <div className="flex-1 relative">
          <img
            src={product.thumbnail}
            alt={product.name}
           className="w-[200px] h-[300px] rounded-xl shadow-md object-cover mx-auto"
          />

        </div>

        {/* Right side (Background Div with Content) */}
        <div className="flex-1 relative">
          <div className="bg-yellow-100 h-full flex flex-col justify-start p-5 lg:p-10">
            <div className="text-center text-white">
              <h2 className="text-neutral-900 text-3xl lg:text-3xl font-normal font-Playfair Display mb-3 mt-0">
                {product.title} ₦{product.price * 10}
              </h2>
              <p className="text-neutral-900 text-lg lg:text-xl font-Quicksand mt-7">
                {product.description} <br />
               
              </p>
              <ul className="text-neutral-900 text-base lg:text-lg font-normal font-Quicksand list-disc pl-5 lg:pl-7 pt-5">
                <li>Detoxifies and cleanses the liver</li>
                <li>Replenishes the body’s vitality</li>
                <li>Strengthens the immune system</li>
                <li>Balances the hormones</li>
              </ul>

              <div className="flex justify-between items-center mt-8">
                {/* Quantity controls */}
                <div className="flex items-center">
                  {/** for decrease */}
                  <button
                    onClick={handleDecrease}
                    className="w-[50px] h-[56px] p-2.5 bg-green-900 rounded-tl rounded-bl flex-col justify-center items-center gap-2.5  inline-flex self-stretch text-center text-neutral-50 text-2xl font-semibold font-Quicksand"
                  >
                    -
                  </button>
                  <span className="w-[50px] h-[56px] p-2.5  bg-neutral-50 flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-green-900 text-xl font-semibold font-Quicksand">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="w-[50px] h-[56px] p-2.5 bg-green-900 rounded-tr rounded-br flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-neutral-50 text-2xl font-semibold font-Quicksand"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className=" w-[173px] h-[56px] ml-auto px-6 py-3 bg-green-900 rounded-lg text-neutral-50 text-lg font-semibold font-Quicksand"
                >
                  Buy Now
                </button>
              </div>

              {/** key ingredients, how to use... */}
              <div className="mt-10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-black text-lg font-normal font-Quicksand">
                    Key Ingredients
                  </span>
                  <button
                    onClick={() => setShowKeyIngredients((prev) => !prev)}
                    className="w-[16.23px] text-black text-xl font-normal font-Quicksand"
                  >
                    +
                  </button>
                </div>
                {showKeyIngredients && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      Chamomile, Peppermint, Lavender, Rose Petals, Hibiscus,
                      Lemon Balm, Ginger, Raspberry Leaf, Licorice Root, Fennel,
                      Dandelion Root, Red Clover, Echinacea, Nettle, Ashwagandha
                    </p>
                  </div>
                )}

                <hr className="my-2 border-1 border-black" />
                <div className="flex justify-between items-center">
                  <span className="text-black text-lg font-normal font-Quicksand">
                    How to use
                  </span>
                  <button
                    onClick={() => setShowHowToUse((prev) => !prev)}
                    className="w-[16.23px] text-black text-xl font-normal font-Quicksand"
                  >
                    +
                  </button>
                </div>
                {showHowToUse && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      Boil fresh, filtered water and pour it over 1 teaspoon of
                      herbal tea per cup (8 oz). Steep for 5-7 minutes, then
                      strain. Optionally, sweeten with honey or add lemon. Enjoy
                      1-3 cups daily for optimal benefits.
                    </p>
                  </div>
                )}
                <hr className="my-2 border-1 border-black"></hr>
                <div className="flex justify-between items-center">
                  <span className="text-black text-lg font-normal font-Quicksand">
                    Allergy Information
                  </span>
                  <button
                    onClick={() => setShowAllergyInfo((prev) => !prev)}
                    className="w-[16.23px] text-black text-xl font-normal font-Quicksand"
                  >
                    +
                  </button>
                </div>
                {showAllergyInfo && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      This herbal tea is crafted with natural ingredients.
                      However, if you have allergies to any herbs, please check
                      the ingredient list carefully. Some ingredients, such as
                      chamomile or licorice root, may cause reactions in
                      individuals with specific allergies. If you are pregnant,
                      nursing, or have any health conditions, consult your
                      healthcare provider before use. Discontinue use
                      immediately if any adverse reactions occur.
                    </p>
                  </div>
                )}
                <hr className="my-2 border-1 border-black"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <div className="my-36">
        <h2 className="text-neutral-900 opacity-90 text-3xl font-normal font-Quicksand p-5 px-9">
          Similar Products
        </h2>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Similar products logic will go here */}
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default ProductDetails;
