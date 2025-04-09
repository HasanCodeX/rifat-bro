


const Proudacts = ({pro}) => {
    console.log(pro)
  return (
    <div>
      <div className=" mx-auto flex gap-4 mt-8 ">
        <div className="products w-[1016px] bg-white rounded-lg pb-12">
          <div className="flex justify-between p-2 items-center">
            <h3>Items</h3>
            <div className="flex gap-14 p-2">
              <h3>Current Bid</h3>
              <h3>Time Left</h3>
              <h3>Bid Now</h3>
            </div>
          </div>
          <hr className="border text-[#DCE5F3]" />
          <div className="p-2">
            <div className="flex gap-4 items-center">
              <img className="w-18" src="src/assets/Bid1-min.png" alt="" />
              <h3>Vintage Leica M3 Camera</h3>
              <h3 className="ml-20">$2340</h3>
              <h4 className="ml-14">2 days left</h4>
              <h3 className="ml-14 cursor-pointer">
                <CiHeart size={28} />
              </h3>
            </div>
            <hr className="border text-[#DCE5F3] mt-2" />
          </div>
        </div>

        <div className="favorite w-[496px] p-2 rounded-lg bg-white">
          <div className="flex gap-4 ml-22 p-2">
            <h3>
              <CiHeart size={28} />
            </h3>
            <h3> Favorite Items</h3>
          </div>
          <hr className="border text-[#DCE5F3]" />
          <div className="text-center mb-6">
            <h3 className="mt-[35px] text-[26px] font-medium">
              No favorites yet
            </h3>
            <p className="text-[18px] opacity-80 mt-2">
              Click the heart icon on any item <br />
              to add it to your favorites
            </p>
          </div>
          <hr className="border text-[#DCE5F3]" />
          <div className="flex justify-between my-2">
            <h3 className="text-[26px]">Total bids Amount</h3>
            <h3 className="text-[26px]">$000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proudacts;
