import { Box, ButtonGroup, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";
import { FlexCenter, FlexSpaces, NavHeadBox } from "../../elements/boxes";
import { sectorItems } from "./constants";
import { SectorButton, TypesButton } from "../../elements/button";

export const SelectorView = () => {
  const [isActive, setIsActive] = useState({ am: false, eu: false, as: false });
  return (
    <Box>
      <NavHeadBox>
        <Typography whiteSpace="nowrap">Sector View</Typography>
        <FlexCenter>
          <TypesButton
            size="small"
            onClick={() => setIsActive({ ...isActive, am: !isActive.am })}
            sx={{
              bgcolor: isActive.am ? "rgb(55, 90, 127)" : "",
              color: isActive.am ? "white" : "",
            }}
          >
            Am
          </TypesButton>
          <TypesButton
            size="small"
            onClick={() => setIsActive({ ...isActive, eu: !isActive.eu })}
            sx={{
              bgcolor: isActive.eu ? "rgb(55, 90, 127)" : "",
              color: isActive.eu ? "white" : "",
            }}
          >
            Eu
          </TypesButton>
          <TypesButton
            size="small"
            onClick={() => setIsActive({ ...isActive, as: !isActive.as })}
            sx={{
              bgcolor: isActive.as ? "rgb(55, 90, 127)" : "",
              color: isActive.as ? "white" : "",
            }}
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
