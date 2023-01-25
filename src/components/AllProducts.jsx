import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import logo27 from "../img/27.png";
import logo28 from "../img/28.png";
import logo29 from "../img/29.png";
import logo30 from "../img/30.png";

const AllProducts = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center cursor-pointer">
        <h1 className="font-serif text-white bg-black p-4">
          VIEW ALL PRODUCTS
        </h1>
      </div>

      <div className="flex justify-center mt-14">
        <p className="text-gray-500 text-normal font-semibold">OUR TEAM</p>
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-lg italic font-normal">
          We’re always ready to help you :)
        </p>
      </div>

      <div className="mt-10 flex ml-10 mr-10 justify-center space-x-4">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="120" image={logo27} />
            <CardContent>
              <div className="flex justify-center p-4 text-lg font-bold bg-slate-200">
                <p>STEVE SMITH</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="120" image={logo28} />
            <CardContent>
              <div className="flex justify-center p-4 text-lg font-bold bg-slate-200">
                <p>DAVID GASTAMBIDE</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="120" image={logo29} />
            <CardContent>
              <div className="flex justify-center p-4 text-lg font-bold bg-slate-200">
                <p>MONICA GALLER</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="120" image={logo30} />
            <CardContent>
              <div className="flex justify-center p-4 text-lg font-bold bg-slate-200">
                <p>PHOEBE BUFFAY</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default AllProducts;
