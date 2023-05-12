import React from "react";
import "./movielist.css";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function Movielist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/films/`);
      const json = await response.json();
      setTimeout(() => {
        setData(json);
        setLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  return (
    <div className="movielist">
      <div style={{ padding: "15px" }}>
        {loading ? (
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={118}
                  style={{ backgroundColor: "grey" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={118}
                  style={{ backgroundColor: "grey" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={118}
                  style={{ backgroundColor: "grey" }}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <Grid container spacing={2}>
            {data.results?.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                test
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ backgroundColor: "#f02a2b", color: "white" }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="white">
                        {item.director}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
