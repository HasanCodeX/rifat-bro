import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Items = () => {
  const [product, setProduct] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("public/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 6)));
  }, []);

  // ✅ Handle adding item to favorites
  const handleAddToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);

      setTotalAmount((prevTotal) => prevTotal + Number(product.currentBidPrice));

      toast.success(`${product.title} added to favorites!`);
    }
  };

  // ✅ Handle removing item from favorites with toast
  const handleRemoveFromFavorites = (productId) => {
    const removedProduct = favorites.find((fav) => fav.id === productId);
    if (!removedProduct) return;

    const updatedFavorites = favorites.filter((fav) => fav.id !== productId);
    setFavorites(updatedFavorites);

    setTotalAmount((prevTotal) => prevTotal - Number(removedProduct.currentBidPrice));

    toast.warn(`${removedProduct.title} removed from favorites!`);
  };

  return (
    <div>
      <div className="mx-auto flex gap-4 mt-8">
        {/* Products Section */}
        <div className="products w-[1016px] bg-white rounded-lg pb-12">
          <div className="flex justify-between p-2 items-center">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th></th>
                    <th>Current Bid</th>
                    <th>Time Left</th>
                    <th>Bid Now</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((prod) => (
                    <tr key={prod.id} className="bg-base-200">
                      <td>
                        <img className="w-18" src={prod.image} alt={prod.title} />
                      </td>
                      <td>
                        <h3>{prod.title}</h3>
                      </td>
                      <td>
                        <h3 className="ml-4">${prod.currentBidPrice}</h3>
                      </td>
                      <td>
                        <h3 className="ml-1">{prod.timeLeft}</h3>
                      </td>
                      <td>
                        <button
                          onClick={() => handleAddToFavorites(prod)}
                          className={`ml-6 text-xl transition ${
                            favorites.some((fav) => fav.id === prod.id)
                              ? "text-red-500 cursor-not-allowed"
                              : "text-gray-400 hover:text-red-500"
                          }`}
                        >
                          {favorites.some((fav) => fav.id === prod.id) ? (
                            <FaHeart />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <hr className="border text-[#DCE5F3]" />
        </div>

        {/* Favorites Section */}
        <div className="favorite w-[496px] p-2 rounded-lg bg-white">
          <div className="flex gap-4 ml-22 p-2">
            <h3>
              <CiHeart size={28} />
            </h3>
            <h3>Favorite Items</h3>
          </div>
          <hr className="border text-[#DCE5F3]" />

          <div className="text-center mb-6">
            {favorites.length === 0 ? (
              <>
                <h3 className="mt-[35px] text-[26px] font-medium">
                  No favorites yet
                </h3>
                <p className="text-[18px] opacity-80 mt-2">
                  Click the heart icon on any item <br />
                  to add it to your favorites
                </p>
              </>
            ) : null}
          </div>

          {/* Display favorite items */}
          {favorites.map((fav) => (
            <div key={fav.id}>
              <div className="flex items-center p-2">
                <figure>
                  <img className="w-16" src={fav.image} alt="Product" />
                </figure>
                <div className="card-body">
                  <div className="flex gap-2">
                    <h2 className="text-[18px] font-medium">{fav.title}</h2>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleRemoveFromFavorites(fav.id)}
                    >
                      <ImCancelCircle size={22} />
                    </button>
                  </div>
                  <div className="flex gap-12">
                    <h3>${fav.currentBidPrice}</h3>
                    <h3>Bid: {fav.bidsCount}</h3>
                  </div>
                </div>
              </div>
              <hr className="border text-[#DCE5F3]" />
            </div>
          ))}

          <hr className="border text-[#DCE5F3]" />
          <div className="flex justify-between my-2">
            <h3 className="text-[26px]">Total Amount</h3>
            <h3 className="text-[26px]">${totalAmount}</h3>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Items;
