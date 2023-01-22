import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <nav className="bg-slate-100 px-2">
      <div className="">
        <div className="flex justify-between items-center px-2">
          {/* logo */}
          <div className="bg-black py-1 px-2 -ml-4">
            <span className="font-sans text-white text-3xl">M.</span>
          </div>

          {/* Primary Nav */}
          <div className="font-sans space-x-6 text-sm -ml-6 -mr-2 cursor-pointer">
            <span>SKINCARE</span>
            <span>MAKEUP</span>
            <span>SUN CARE</span>
            <span>HAIRCARE</span>
            <span>BEARD GROOMING</span>
            <span>FRAGRANCES</span>
            <span>BATH</span>
            <span>HOME</span>
            <span>ACCESSORIES</span>
            <span>SALE</span>
            <span>BRANDS</span>
            <span className="font-bold">Man</span>
            <span className="font-bold">Woman</span>
          </div>

          {/* Secondary Nav */}
          <div className="space-x-4 cursor-pointer">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
