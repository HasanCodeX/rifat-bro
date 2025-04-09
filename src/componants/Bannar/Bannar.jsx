import React from "react";

const Bannar = () => {
  return (
    <div>
      <div className="mx-auto relative" >
        <img className="" src="src/assets/Banner-min.jpg" alt="" />
        <div className="absolute -mt-96 ml-[140px] text-white">
          <h3 className="text-5xl font-semibold">
            Bid on Unique Items from <br /> Around the World
          </h3>
          <p className="text-2xl opacity-80 mt-6 font-light">
            Discover rare collectibles, luxury goods, and vintage <br />{" "}
            treasures in our curated auctions
          </p>
          <button className="btn btn-primary bg-white text-black rounded-full mt-6">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
