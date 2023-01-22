import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import logo24 from "../img/24.png";
import logo25 from "../img/25.png";
import logo26 from "../img/26.png";

const Offer = () => {
  return (
    <div className="mt-16 ml-10 mr-10 justify-center">
      <div className="flex italic font-semibold justify-center">
        <h2 className="text-2xl font-normal">Limited time offer - Hurry Up!</h2>
      </div>
      <div>
        <h2 className="flex justify-center text-base font-normal text-gray-600 mt-4">
          Super sale is now live at 15% off. Grab the most luxurious things at
          an affordable price.
        </h2>
      </div>
      <div>
        <h2 className="flex justify-center text-sm font-normal text-gray-600 mt-4">
          SALE
        </h2>
      </div>

      <div className="flex mt-6 justify-center space-x-10">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={logo24} />
            <CardContent>
              <div className="flex justify-between text-base font-medium">
                <p>Acca Kappa</p>
              </div>
              <div className="font-normal text-sm">
                <p>Spazzolino Da Denti Collezione Vintage - Morbido</p>
              </div>
              <div className="flex space-x-3">
                <strike className="text-red-400">
                  <p className="text-red-400">€7.00</p>
                </strike>
                <p className="text-base font-normal">€5.95</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={logo25} />
            <CardContent>
              <div className="flex justify-between text-base font-medium">
                <p>Acca Kappa</p>
              </div>
              <div className="font-normal text-sm">
                <p>Spazzolino Da Denti Collezione Vintage - Morbido</p>
              </div>
              <div className="flex space-x-3">
                <strike className="text-red-400">
                  <p className="text-red-400">€7.00</p>
                </strike>
                <p className="text-base font-normal">€5.95</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={logo26} />
            <CardContent>
              <div className="flex justify-between text-base font-medium">
                <p>Acca Kappa</p>
              </div>
              <div className="font-normal text-sm">
                <p>Spazzolino Da Denti Collezione Vintage - Morbido</p>
              </div>
              <div className="flex space-x-3">
                <strike className="text-red-400">
                  <p className="text-red-400">€7.00</p>
                </strike>
                <p className="text-base font-normal">€5.95</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Offer;
