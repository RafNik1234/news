import { Box, ButtonGroup, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import { FlexCenter, FlexSpaces, NavHeadBox } from "../../elements/boxes";
import { sectorItems } from "./constants";
import { SectorButton, TypesButton } from "../../elements/button";

export const SelectorView = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <Box>
      <NavHeadBox>
        <Typography whiteSpace="nowrap">Sector View</Typography>
        <FlexCenter>
          <TypesButton
            size="small"
            isActive={isActive === "am"}
            onClick={() => setIsActive("am")}
          >
            Am
          </TypesButton>
          <TypesButton
            size="small"
            isActive={isActive === "eu"}
            onClick={() => setIsActive("eu")}
          >
            Eu
          </TypesButton>
          <TypesButton
            size="small"
            isActive={isActive === "as"}
            onClick={() => setIsActive("as")}
          >
            As
          </TypesButton>
        </FlexCenter>
      </NavHeadBox>
      {sectorItems.map((el, i) => (
        <FlexSpaces key={el.title}>
          <FlexCenter>
            <Checkbox />
            <Typography fontSize={12}>{el.describtion}</Typography>
          </FlexCenter>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <SectorButton isActive={false}>Am</SectorButton>
            <SectorButton isActive={false}>Eu</SectorButton>
            <SectorButton isActive={false}>As</SectorButton>
          </ButtonGroup>
        </FlexSpaces>
      ))}
    </Box>
  );
};
