import React, { useState } from "react";
import {
  CloseIconBox,
  FlexCenter,
  FlexSpaces,
  FooterBox,
  FooterFlexCenter,
} from "../../elements/boxes";
import { footerGroupNames } from "./constants";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

export const Footer = () => {
  const [selectedId, setSelectedId] = useState(2);
  const [possitionY, setPossitionY] = useState(0);

  console.log("possitionY", possitionY);
  console.log('object',window.innerHeight);
  return (
    <FooterBox
      onMouseDown={(e) => {
        setPossitionY(e.pageY);
      }}
    >
      <FlexSpaces
        sx={{
          borderBottom: "1px solid black",
        }}
      >
        <FlexCenter padding={"5px 5px 0 5px"}>
          {footerGroupNames.map((el, i) => (
            <FooterFlexCenter
              key={i}
              onClick={() => setSelectedId(i)}
              sx={{ color: selectedId === i ? "#e17009" : "#2e6e9e" }}
            >
              {el}
            </FooterFlexCenter>
          ))}
        </FlexCenter>

        <CloseIconBox>
          <CloseIcon fontSize="small" />
        </CloseIconBox>
      </FlexSpaces>
      <Box>Select a headline or a ticker in the main panel.</Box>
    </FooterBox>
  );
};
