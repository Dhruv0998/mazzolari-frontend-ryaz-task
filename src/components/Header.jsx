import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-white flex justify-around py-8 items-center md:flex md:justify-around">
      {/* Header Left */}
      <div className="">
        <h1 className="font-sans text-3xl">
          <i className="text-4xl font-semibold">Mazzolari,</i> the defination
        </h1>
        <p className="font-sans text-3xl">of luxury since 1881.</p>
      </div>

      {/* Header Right */}
      <div className="font-sans flex space-x-4 items-center">
        <input className="text-xl py-1 px-0 rounded-lg bg-slate-100" />
        <div className="text-3xl cursor-pointer bg-slate-100 py-1 px-2 rounded-xl">
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
