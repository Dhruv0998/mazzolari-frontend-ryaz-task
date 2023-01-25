import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentIcon from "@mui/icons-material/Assignment";

const ExploreCatalog = () => {
  return (
    <div className="flex mt-32 ml-10 mr-10 justify-around items-center">
      <div className="text-5xl bg-slate-100 p-24 rounded-full italic">
        <h2>Mazzolari Milano</h2>
        <h2>cares for you.</h2>
      </div>

      <div className="mr-44">
        <div className="flex -ml-10 space-x-4">
          <VerifiedUserIcon />
          <p className="text-base font-medium text-gray-600">
            Safe Purchase at 100%
          </p>
        </div>
        <div className="flex mt-16 space-x-4">
          <LocalMallIcon />
          <p className="text-base font-medium text-gray-600">
            Over 90.000 Products in the catalog
          </p>
        </div>
        <div className="flex mt-16 ml-1 space-x-4">
          <LocalShippingIcon />
          <p className="text-base font-medium text-gray-600">
            Guaranteed Delivery in 48/72 Hours
          </p>
        </div>
        <div className="flex mt-16 -ml-8 space-x-4">
          <AssignmentIcon />
          <p className="text-base font-medium text-gray-600">
            Beauty Consultant Dedicated
          </p>
        </div>
      </div>

      <div className="mr-24 cursor-pointer">
        <p className="text-sm text-gray-700 font-medium">EXPLORE CATALOG</p>
      </div>
    </div>
  );
};

export default ExploreCatalog;
