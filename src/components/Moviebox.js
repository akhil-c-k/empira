import React, { useEffect, useState } from "react";
import { Divider, Typography, colors, Box } from "@mui/material";
import ImgMediaCard from "./Moviecard";
import { GiPistolGun, GiDramaMasks, GiBatwingEmblem } from "react-icons/gi";
import { icons } from "react-icons";

export default function Moviebox() {
  const [data, setData] = useState([]);
  const iconarray = [<GiPistolGun />, <GiDramaMasks />, <GiBatwingEmblem />];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/films/`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  const styles = {};
  return (
    <React.Fragment>
      <div className="dividertext">Trending</div>

      <Divider variant="middle" sx={{ bgcolor: "red", height: "1px" }}>
        {" "}
      </Divider>

      <ImgMediaCard data={data.results} icons={iconarray} />
    </React.Fragment>
  );
}
