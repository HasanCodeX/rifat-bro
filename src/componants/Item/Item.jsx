import React from "react";
import { CiHeart } from "react-icons/ci";
const Item = ({ product, handleBit }) => {
  
  // console.log(product);
  return (
    <div className="products">
      <div className="">
        <tr className="bg-red-200">
          <td>
            <img className="w-18" src={product.image} alt="" />
          </td>
          <td>
            <h3>{product.title}</h3>
          </td>
          <td>
            <h3 className="ml-4">${product.currentBidPrice}</h3>
          </td>
          <td>
            <h3 className="ml-1">{product.timeLeft}</h3>
          </td>
          <td>
            <button onClick={() => handleBit(product)}>
              {" "}
              <h3 className=" cursor-pointer ml-6">
                <CiHeart size={28} />
              </h3>
            </button>
          </td>
        </tr>
      </div>
    </div>
  );
};

export default Item;
