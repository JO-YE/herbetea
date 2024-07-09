import React from "react";
import love from "../components/assets/product/heart.png";
import lovebg from "../components/assets/product/lovebg.png";
import product1 from "../components/assets/product/product1.png";
import product2 from "../components/assets/product/product2.png";
import product3 from "../components/assets/product/product3.png";
import product4 from "../components/assets/product/product4.png";
import product5 from "../components/assets/product/product5.png";
import product6 from "../components/assets/product/product6.png";
import product7 from "../components/assets/product/product7.png";
import product8 from "../components/assets/product/product8.png";
import product9 from "../components/assets/product/product9.png";
import product10 from "../components/assets/product/product10.png";
import product11 from "../components/assets/product/product11.png";
import product12 from "../components/assets/product/product12.png";
import product13 from "../components/assets/product/product13.png";
import product14 from "../components/assets/product/product14.png";
import product15 from "../components/assets/product/product15.png";
import product16 from "../components/assets/product/product16.png";
import product17 from "../components/assets/product/product17.png";
import product18 from "../components/assets/product/product18.png";
import PageList from "../components/pagelist"

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

  {
    id: 4,
    name: "Radiant Harmony Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product4,
  },

  {
    id: 5,
    name: "Divine Diva Delight",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product5,
  },

  {
    id: 6,
    name: "Pure Bliss Botanicals",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product6,
  },

  {
    id: 7,
    name: "Celestial Sister Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product7,
  },

  {
    id: 8,
    name: "Tranquil Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product8,
  },

  {
    id: 9,
    name: "Wholesome Woman",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product9,
  },

  {
    id: 10,
    name: "Mystic Maiden",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product10,
  },

  {
    id: 11,
    name: "Serene Goddess",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product11,
  },

  {
    id: 12,
    name: "Harmony Hues Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product12,
  },

  {
    id: 13,
    name: "Enchanted Empress Elixir",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product13,
  },

  {
    id: 14,
    name: "Tranquil Tisane Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product14,
  },

  {
    id: 15,
    name: "Peaceful Potion Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product15,
  },

  {
    id: 16,
    name: "Pure Xen Herbal Mix",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product16,
  },

  {
    id: 17,
    name: "Blissful Brew Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product17,
  },

  {
    id: 18,
    name: "Garden Goddess Tea",
    note: "A perfect blend of nature.",
    rating: 5.0,
    price: 3500,
    image: product18,
  },
];

const productItem = () => {
  return (
    <div className="my-26">
      <h2 className="text-neutral-900 opacity-90 text-3xl font-normal font-Quicksand p-5 px-9">
        All Products
      </h2>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** product box */}
          {products.map((product) => (
            <div key={product.id} className="w-[354px] h-[471px] relative">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[354px] h-auto mb-4 rounded-md"
                />

                {/** love icon background */}
                <div
                  className="absolute top-7 right-5 flex items-center justify-center w-12 h-12"
                  style={{
                    backgroundImage: `url(${lovebg})`,
                    backgroundSize: "cover",
                  }}
                >
                  <img src={love} alt="Love Icon" className="w-6 h-6" />{" "}
                  {/* Love icon */}
                </div>
              </div>

              {/** Product details */}
              <div className="flex justify-between">
                {/** left side */}
                <div className="text-left">
                  <h3 className="w-[202px] text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                    {product.name}
                  </h3>
                  <p className=" text-neutral-900 text-base font-normal font-Quicksand mb-2">
                    {product.note}
                  </p>

                  {/** product rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5  ${
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
                    )}{" "}
                    <span className="pl-3 text-black text-base font-normal font-Quicksand">
                      (58)
                    </span>
                  </div>
                </div>
                {/** right side */}
                <div className="text-right">
                  <p className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <button className=" w-[111px] h-10 p-2.5 bg-orange-500 text-neutral-50 rounded justify-center items-center gap-2.5 inline-flex font-semibold font-Quicksand">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PageList />
    </div>
  );
};

export default productItem;
