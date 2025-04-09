import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(src/assets/Banner-min.jpg)] h-[730px] bg-cover bg-center bg-no-repeat">
      <div className=" text-white ">
        <div className="pt-[255px] pl-[130px]">
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

export default Banner;
