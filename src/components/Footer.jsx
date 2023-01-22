import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div className="mt-64 mb-10 flex mr-10 ml-10 justify-around">
      <div className="space-y-3">
        <p className="text-lg font-serif">MAZZOLARI</p>
        <p className="text-base font-sans italic text-gray-700">Beauty is not something you compete for.</p>
        <p>Subscribe to Newsletter</p>
        <div className="flex items-center space-x-2">
        <TextField id="outlined-basic" label="Enter your email address" variant="outlined" />
        <Button style={{ background: "black" }} variant="contained">Subscribe</Button>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-base font-serif">CUSTOMER CARE</p>
        <p className="text-base font-sans italic text-gray-700">+39 02 7600 5397</p>
        <p className="text-base font-sans italic text-gray-700">+39 334 1049 889</p>
      </div>

      <div className="space-y-1 cursor-pointer">
        <p className="text-base font-serif">ABOUT US</p>
        <p className="text-base font-sans italic text-gray-700">Our Stories</p>
        <p className="text-base font-sans italic text-gray-700">Company Informations</p>
        <p className="text-base font-sans italic text-gray-700">Quality of Products</p>
        <p className="text-base font-sans italic text-gray-700">Contact Us</p>
      </div>

      <div className="space-y-1 cursor-pointer">
        <p className="text-base font-serif">LEGAL AREA</p>
        <p className="text-base font-sans italic text-gray-700">Terms of Sale</p>
        <p className="text-base font-sans italic text-gray-700">Withdrawal and Return</p>
        <p className="text-base font-sans italic text-gray-700">Subscription</p>
        <p className="text-base font-sans italic text-gray-700">Privacy Policy</p>
        <p className="text-base font-sans italic text-gray-700">Cookie Policy</p>
      </div>

      <div className="space-y-1 cursor-pointer">
        <p className="text-base font-serif">HELP</p>
        <p className="text-base font-sans italic text-gray-700">Customer Care</p>
        <p className="text-base font-sans italic text-gray-700">Shipping and Returns</p>
        <p className="text-base font-sans italic text-gray-700">Terms of Payment</p>
        <p className="text-base font-sans italic text-gray-700">FAQ</p>
      </div>

      <div className="flex-row space-y-2 cursor-pointer">
        <div className="text-6xl">
          <FacebookIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
