import React from "react";
import logo31 from "../img/31.png";

const ShopNow = () => {
  return (
    <div className="mt-24 w-full">
      <div>
        <img src={logo31} alt="" />
        <div className="text-4xl text-white -mt-96 ml-32 italic">
          <p>100% pure best selling</p>
          <p>skincare and</p>
          <p> grooming products</p>
        </div>
        <div className="text-white text-2xl ml-56 mt-16 font-semibold cursor-pointer">
            <p>SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
