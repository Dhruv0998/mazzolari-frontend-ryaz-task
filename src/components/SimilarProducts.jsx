import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import logo13 from "../img/13.png";
import logo16 from "../img/16.png";
import logo17 from "../img/17.png";

const SimilarProducts = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between ml-10 mr-10 text-xl font-serif text-gray-700">
        <p>SIMILAR PRODUCTS</p>
        <p>
          <u className="cursor-pointer">Show All</u>
        </p>
      </div>

      <div className="flex mt-10 ml-10 mr-10 justify-between items-center">
        <Card sx={{ maxWidth: 150 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo13} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>Shlseido</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo16} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>St. Barth</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150 }}>
          <CardActionArea>
            <CardMedia component="img" height="80" image={logo17} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>Shlseido</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="80" image={logo16} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>St. Barth</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150 }}>
          <CardActionArea>
            <CardMedia component="img" height="80" image={logo17} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>Shlseido</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="80" image={logo16} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>St. Barth</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 150 }}>
          <CardActionArea>
            <CardMedia component="img" height="80" image={logo17} />
            <CardContent>
              <div className="flex justify-between text-base font-serif">
                <p>Shlseido</p>
                <p>$60</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Revitalising citrus face cream</p>
                <p>BODY LOTION</p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default SimilarProducts;
