import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Mainheader from "../components/header";
import Foot from "../components/Footer";
import Review from "../components/review";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const appId = "ODC6BXVSV8DEXXN";
  const apiKey = "192873e19bd04c61834c4eb4ed2151a420240712142214609520";
  const organizationId = "01f4ce5681cf405d9cdafff4da97c544";

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;
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
            src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
            alt={product.name}
            className="w-full h-[400px] lg:h-full object-cover"
          />
        </div>

        {/* Right side (Background Div with Content) */}
        <div className="flex-1 relative">
          <div className="bg-yellow-100 h-full flex flex-col justify-center p-5 lg:p-10">
            <div className="text-center text-white">
              <h2 className="text-neutral-900 text-3xl lg:text-3xl font-normal font-Playfair Display mb-3 mt-0">
                {product.name} ₦3500
              </h2>
              <p className="text-neutral-900 text-lg lg:text-xl font-Quicksand pt-7">
                {product.description} <br />
                <span>
                  Our Specially crafted slimming herbal tea blends are designed
                  to support women’s health and well-being. Each sip offers an
                  harmonious perfect blend of organic ingredients, promoting
                  relaxation, vitality, and overall wellness.{" "}
                </span>
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
                  <span className="w-[50px] h-[56px] p-2.5  bg-neutral-50 flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-green-900 text-xl font-semibold font-Quicksand">{quantity}</span>
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
