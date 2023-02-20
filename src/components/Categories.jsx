import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import logo from "../img/1.png";
import logo1 from "../img/2.png";
import logo2 from "../img/3.png";
import logo3 from "../img/4.png";

const Categories = () => {
  return (
    <div className="bg-white py-0 items-center mt-16">
      {/* Categories */}
      <div className="flex justify-between">
        <div className="font-mono ml-32 text-2xl">
          <h3>Explore Categories</h3>
        </div>
        <div className="mr-32 space-x-1 cursor-pointer">
          <ArrowCircleLeftIcon />
          <ArrowCircleRightIcon />
        </div>
      </div>

      {/* Carousal */}
      <div className="flex justify-around mt-8 ml-16 mr-16">
        <div>
          <img src={logo} alt="" width={250} height={260} />
          <p className="text-gray-600 rounded-lg bg-white mt-1 font-mono text-lg px-20">
            SKIN CARE
          </p>
        </div>
        <div>
          <img src={logo1} alt="" width={250} height={260} />
          <p className="text-gray-600 rounded-lg bg-white mt-1 font-mono text-lg px-20">
            SUN CARE
          </p>
        </div>
        <div>
          <img src={logo2} alt="" width={250} height={260} />
          <p className="text-gray-600 rounded-lg bg-white mt-1 font-mono text-lg px-20">
            FRAGRANCES
          </p>
        </div>
        <div>
          <img src={logo3} alt="" width={250} height={260} />
          <p className="text-gray-600 rounded-lg bg-white mt-1 font-mono text-lg px-16">
            BEARD GROOMING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
