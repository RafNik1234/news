import { Box, ButtonGroup, Checkbox, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FlexCenter, FlexSpaces, NavHeadBox } from "../../elements/boxes";
import { sectorItems } from "./constants";
import { SectorButton, TypesButton } from "../../elements/button";

interface ISelectorItems {
  title: string;
  describtion: string;
  am: boolean;
  eu: boolean;
  as: boolean;
}

export const SelectorView = () => {
  const [isActive, setIsActive] = useState({ am: false, eu: false, as: false });
  const [sectorElements, setSectorElements] = useState<ISelectorItems[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const elems = sectorItems.map((el) => {
      return {
        title: el.title,
        am: false,
        eu: false,
        as: false,
        describtion: el.describtion,
      };
    });
    setSectorElements(elems);
    const nestedObj: { [key: string]: boolean } = {};
    sectorItems.forEach((el) => {
      nestedObj[el.title] = false;
    });
    setCheckedItems(nestedObj);
  }, []);

  console.log("checkedItems", checkedItems);
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
      {sectorElements.map((el) => (
        <FlexSpaces
          key={el.title}
          onClick={() => {
            setCheckedItems({
              ...checkedItems,
              [el.title]: !checkedItems[el.title],
            });
          }}
        >
          <FlexCenter>
            <Checkbox checked={checkedItems[el.title]} />
            <Typography fontSize={12}>{el.describtion}</Typography>
          </FlexCenter>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <SectorButton
              sx={{
                bgcolor: isActive.am || el.am ? "rgb(55, 90, 127)" : "",
                color: isActive.am || el.am ? "white" : "",
              }}
            >
              Am
            </SectorButton>
            <SectorButton
              sx={{
                bgcolor: isActive.eu || el.eu ? "rgb(55, 90, 127)" : "",
                color: isActive.eu || el.eu ? "white" : "",
              }}
            >
              Eu
            </SectorButton>
            <SectorButton
              sx={{
                bgcolor: isActive.as || el.as ? "rgb(55, 90, 127)" : "",
                color: isActive.as || el.as ? "white" : "",
              }}
            >
              As
            </SectorButton>
          </ButtonGroup>
        </FlexSpaces>
      ))}
    </Box>
  );
};
