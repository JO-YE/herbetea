import React from "react";
import { useNavigate } from "react-router-dom";
import Mainheader from "../components/header";
import Foot from "../components/Footer";
import img1 from "../components/assets/hompage/pic2.png";
import product1 from "../components/assets/product/product1.png";
import product2 from "../components/assets/product/product2.png";
import product3 from "../components/assets/product/product3.png";
import love from "../components/assets/product/heart.png";
import lovebg from "../components/assets/product/lovebg.png";
import Review from "../components/review";

const products = [
  {
    id: 1,
    name: "Blossom Harmony Tea",
    note: "A perfect blend of nature",
    rating: 5,
    price: 3500,
    image: product1,
  },
  {
    id: 2,
    name: "Vitality Vixen Infusion",
    note: "A perfect blend of nature",
    rating: 5.0,
    price: 3500,
    image: product2,
  },
  {
    id: 3,
    name: "Serene Goddess Herbal Tea",
    note: "A perfect blend of nature",
    rating: 5.0,
    price: 3500,
    image: product3,
  },
];
const ProductDetails = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/checkout"); // this navigate to the checkout page
  };

  const handleProductClick = (id) => {
    navigate(`/productdetails`);
  };

  return (
    <div>
      <Mainheader />
      <div>
        <div className="flex flex-col lg:flex-row justify-center w-full max-w-[942px] h-auto lg:h-[912px] mx-auto">
          {/* Left side Image */}
          <div className="flex-1 relative">
            <img
              src={img1}
              alt="Description of the image"
              className="w-full h-[400px] lg:h-full object-cover"
            />
          </div>

          {/* Right side (Background Div with Content) */}
          <div className="flex-1 relative">
            <div className="bg-yellow-100 h-full flex flex-col justify-center p-5 lg:p-10">
              <div className="text-center text-white">
                <h2 className="text-neutral-900 text-3xl lg:text-4xl font-normal font-Playfair Display mb-4">
                  Blossom Harmony Tea N3500
                </h2>
                <p className="text-neutral-900 text-lg lg:text-xl font-Quicksand pt-7">
                  Our specially crafted slimming herbal tea blends are designed
                  to support women’s health and well-being. Each sip offers a
                  harmonious perfect blend of organic ingredients, promoting
                  relaxation, vitality, and overall wellness.
                </p>
                <ul className="text-neutral-900 text-base lg:text-lg font-normal font-Quicksand list-disc pl-5 lg:pl-7 pt-5">
                  <li>Detoxifies and cleanses the liver</li>
                  <li>Replenishes the body’s vitality</li>
                  <li>Strengthens the immune system</li>
                  <li>Balances the hormones</li>
                </ul>

                <div className="flex justify-center lg:justify-end mt-8">
                  <button
                    onClick={handleBuyNowClick}
                    className="w-[200px] lg:w-[263px] h-[50px] lg:h-[67px] p-2.5 bg-green-900 rounded-lg justify-center items-center gap-2.5 inline-flex text-neutral-50 text-lg lg:text-xl font-semibold font-Quicksand"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Review />
        <div className="my-36 ">
          <h2 className="text-neutral-900 opacity-90 text-3xl font-normal font-Quicksand p-5 px-9">
            Similar Products
          </h2>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto mb-4 rounded-md"
                    />
                    <div
                      className="absolute top-7 right-5 flex items-center justify-center w-12 h-12"
                      style={{
                        backgroundImage: `url(${lovebg})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <img src={love} alt="Love Icon" className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-left">
                      <h3 className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                        {product.name}
                      </h3>
                      <p className="text-neutral-900 text-base font-normal font-Quicksand mb-2">
                        {product.note}
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
                          (58)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                        ₦{product.price.toLocaleString()}
                      </p>
                      <button className="w-[111px] h-10 p-2.5 bg-orange-500 text-neutral-50 rounded justify-center items-center gap-2.5 inline-flex font-semibold font-Quicksand">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </div>
  );
};

export default ProductDetails;
