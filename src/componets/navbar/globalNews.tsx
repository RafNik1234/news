import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Battery1BarIcon from "@mui/icons-material/Battery1Bar";
import { FlexCenter, NavItemBox } from "../../elements/boxes";

export const GlobalNews = () => {
  const [selected, setSelected] = useState(true);

  return (
    <Box>
      <NavItemBox
        onClick={() => setSelected(!selected)}
        sx={{
          cursor: "pointer",
        }}
      >
        {selected && <Battery1BarIcon sx={{ rotate: "90deg" }} />}
        <Typography>Global Equity News</Typography>
        {selected ? (
          <FlexCenter>
            <img
              src="https://www.tradethenews.com/NewsStation/14/Content/images/player/now_playing.png"
              alt=""
              height="15px"
            />
          </FlexCenter>
        ) : (
          <Typography fontSize={12} color={"orange"}>
            Click <br /> to play
          </Typography>
        )}
      </NavItemBox>
      <NavItemBox
        sx={{
          cursor: "pointer",
        }}
      >
        {!selected && <Battery1BarIcon sx={{ rotate: "90deg" }} />}
        <Typography>FX/FI/Futures News</Typography>
        {selected ? (
          <Typography fontSize={12} color={"orange"}>
            Click <br /> to play
          </Typography>
        ) : (
          <FlexCenter>
            <img
              src="https://www.tradethenews.com/NewsStation/14/Content/images/player/now_playing.png"
              alt=""
              height="15px"
            />
          </FlexCenter>
        )}
      </NavItemBox>
    </Box>
  );
};
