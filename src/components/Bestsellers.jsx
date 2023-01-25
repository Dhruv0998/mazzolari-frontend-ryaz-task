import React from "react";
import logo6 from "../img/6.png";
import logo7 from "../img/7.png";
import logo8 from "../img/8.png";
import logo9 from "../img/9.png";
import logo10 from "../img/10.png";
import logo11 from "../img/11.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Bestsellers = () => {
  return (
    <div className="bg-white mt-10">
      {/* Bestsellers */}
      <div className="font-mono ml-32 text-2xl">
        <h3>Bestsellers</h3>
      </div>

      {/* Cards Left */}
      <div className="flex mt-4 ml-8 mr-8 justify-between">
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo6} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $50
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo7} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $45
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo8} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $72
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo9} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $59
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo10} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $62
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image={logo11} />
            <CardContent>
              <div>
                <Typography gutterBottom variant="h7" component="div">
                  Natura Bisse, Vitamin C Splash, Revitalising citrus spray.
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography variant="body2" color="text.secondary">
                  200 ML
                </Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    $80
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Bestsellers;
