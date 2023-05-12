import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Box, Grid, CardActionArea } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function ImgMediaCard({ data, icons }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page2");
  };

  return (
    <div style={{ padding: "15px" }}>
      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ backgroundColor: "#f02a2b", color: "white" }}
            >
              <CardActionArea onClick={handleClick}>
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Action
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    click here
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
