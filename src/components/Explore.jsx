import React from "react";
import logo12 from "../img/12.png";
import StarIcon from "@mui/icons-material/Star";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Explore = () => {
  return (
    <div className="justify-center mt-10 text-2xl cursor-pointer">
      {/* Explore */}
      <div className="flex items-center justify-center">
        <h1 className="font-serif text-white bg-black p-4">EXPLORE ALL</h1>
      </div>

      <div className="flex bg-slate-100 mt-8 p-4 ml-10 mr-10">
        <div>
          <img src={logo12} alt="" width={400} />
          <h2 className="text-gray-800 font-serif ml-10 mt-2">
            BUY THIS PRODUCT
          </h2>
        </div>

        <div className="ml-24 mt-16">
          <p className="text-gray-600 font-serif text-base">CUSTOMER REVIEWS</p>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <p className="font-normal text-base mt-2">
            I have ordered from Mazzolari several times in the past. They always
            ship fast, and returns are easy. Large selection of very authentic
            and premium products!
          </p>
          <h2 className="text-gray-500 text-xl font-medium mt-2">
            - Jane Milano
          </h2>
          <ArrowCircleLeftIcon />
          <ArrowCircleRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Explore;
