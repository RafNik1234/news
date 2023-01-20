import { Box } from "@mui/material";
import React, { useState } from "react";
import { NavHeadBox, NavHeadItem } from "../../elements/boxes";
import { hedlineItems } from "./constants";

export const HeadlineView = () => {
  const [isActive, setIsActive] = useState(-1);
  return (
    <Box>
      <NavHeadBox>Complete Headline View</NavHeadBox>
      {hedlineItems.map((el, i) => (
        <NavHeadItem
          key={i}
          onClick={() => setIsActive(i)}
          active={isActive === i}
        >
          {el}
        </NavHeadItem>
      ))}
    </Box>
  );
};
