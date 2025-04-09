
import React, { useEffect, useState } from "react";
import Proudacts from '../Products/Proudacts';

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch("public/products.json")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
    console.log(product);
    return (
      <div>
            <div>
                {
                    product.map((pro)=><Proudacts pro={pro}></Proudacts>)
                }
        </div>
      </div>
    );
};

export default Product;