import { CiHeart } from "react-icons/ci";
import React, { useState } from "react";
import Proudacts from "../Products/Proudacts";
import Items from "../Items/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Title = ({ cart, setCart }) => {
  const [bit, setBit] = useState([]);
  const [favoritedIds, setFavoritedIds] = useState([]); 
  const [favorites, setFavorites] = useState([]);

  const handleBit = (pro) => {
    setBit([...bit, pro]);
    toast.success("Bid placed successfully!", {
      position: "top-right",
    });
  };

  const isFavorited = (id) => favoritedIds.includes(id);

  const handleFavorite = (product) => {
    if (!isFavorited(product.id)) {
      setFavoritedIds([...favoritedIds, product.id]);
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div className="px-30 mx-auto pt-[132px] pb-[77px] bg-slate-200">
      <h3 className="text-3xl font-semibold">Active Auctions</h3>
      <p className="text-xl mt-4 opacity-80">
        Discover and bid on extraordinary items
      </p>
      <Items
        handleBit={handleBit}
        bit={bit}
        cart={cart}
        setCart={setCart}
        isFavorited={isFavorited}
        handleFavorite={handleFavorite}  
      />
    </div>
  );
};

export default Title;
