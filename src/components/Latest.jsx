import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import logo20 from "../img/20.png";
import logo21 from "../img/21.png";
import logo22 from "../img/22.png";
import logo23 from "../img/23.png";

const Latest = () => {
  return (
    <div className="mt-16 ml-10 mr-10">
      <div className="text-lg">
        <p className="text-gray-600 text-base font-bold">SPOTLIGHT</p>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <p className="italic text-lg font-semibold">
            Explore our latest arrivals
          </p>
        </div>
        <div className="cursor-pointer">
          <ArrowCircleLeftIcon />
          <ArrowCircleRightIcon />
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo20} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p className="text-base font-medium">
                  Revitalising citrus spray.
                </p>
                <p className="text-base font-medium">$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="text-base font-medium">Lady Million</p>
                <p className="text-base font-normal">BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo21} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p className="text-base font-medium">
                  Revitalising citrus spray.
                </p>
                <p className="text-base font-medium">$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="text-base font-medium">Lady Million</p>
                <p className="text-base font-normal">BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo22} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p className="text-base font-medium">
                  Revitalising citrus spray.
                </p>
                <p className="text-base font-medium">$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="text-base font-medium">Lady Million</p>
                <p className="text-base font-normal">BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo23} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p className="text-base font-medium">
                  Revitalising citrus spray.
                </p>
                <p className="text-base font-medium">$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="text-base font-medium">Lady Million</p>
                <p className="text-base font-normal">BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Latest;
