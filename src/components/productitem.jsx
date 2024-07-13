import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import love from '../components/assets/product/heart.png';
import lovebg from '../components/assets/product/lovebg.png';
import PageList from '../components/pagelist';
import { useCart } from '../components/cartcontext'; // Importing useCart hook

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showAddedToCart, setShowAddedToCart] = useState(false); // State for notification
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart function from CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      const appId = 'ODC6BXVSV8DEXXN';
      const apiKey = '192873e19bd04c61834c4eb4ed2151a420240712142214609520';
      const organizationId = '01f4ce5681cf405d9cdafff4da97c544';
      const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data && data.items) {
          const products = data.items.map((item) => ({
            id: item.id,
            name: item.name,
            note: item.description,
            price: item.current_price[0]?.NGN[0] || 0,
            image: item.photos.length > 0 ? `https://api.timbu.cloud/images/${item.photos[0].url}` : '', 
            rating: 5.0 
          }));
          console.log("Processed products:", products);
          setProducts(products);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addToCartAndShowNotification = (product) => {
    addToCart(product);
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 2000); // Hide notification after 2 seconds
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-26">
      <h2 className="text-neutral-900 opacity-90 text-3xl font-normal font-Quicksand p-5 px-9">
        All Products
      </h2>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="w-[354px] h-[471px] relative cursor-pointer mb-7"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[374px] h-[356px] mb-4 rounded-md"
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
                  <h3 className="w-[202px] text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
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
                  <button
                    className="w-[111px] h-10 p-2.5 bg-orange-500 text-neutral-50 rounded justify-center items-center gap-2.5 inline-flex font-semibold font-Quicksand"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents navigation to product details
                      addToCartAndShowNotification(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PageList
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {/* Notification Message */}
      {showAddedToCart && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded shadow">
          Product added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductItem;
