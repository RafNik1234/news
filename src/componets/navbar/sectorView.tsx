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
  const [checkedCategoryItems, setCheckedCategoryItems] = useState<{
    [key: string]: boolean;
  }>({});

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
    const sectorCheckeds: { [key: string]: boolean } = {};
    sectorItems.forEach((el) => {
      nestedObj[el.title] = false;
      sectorCheckeds[`${el.title}_am`] = false;
      sectorCheckeds[`${el.title}_eu`] = false;
      sectorCheckeds[`${el.title}_as`] = false;
    });
    setCheckedItems(nestedObj);
    setCheckedCategoryItems(sectorCheckeds);
  }, []);

  // useEffect(() => {
  //   // let count_am = 0;
  //   // let count_eu = 0;
  //   // let count_as = 0;
  //   // for (const key in checkedCategoryItems) {
  //   //   if (key.includes("_am") && checkedCategoryItems[key]) {
  //   //     count_am += 1;
  //   //   }
  //   //   if (key.includes("_eu") && checkedCategoryItems[key]) {
  //   //     count_eu += 1;
  //   //   }
  //   //   if (key.includes("_as") && checkedCategoryItems[key]) {
  //   //     count_as += 1;
  //   //   }
  //   //   if (count_am !== Object.keys(checkedCategoryItems).length) {
  //   //     setIsActive({ ...isActive, am: false });
  //   //   }
  //   //   if (count_eu !== Object.keys(checkedCategoryItems).length) {
  //   //     setIsActive({ ...isActive, eu: false });
  //   //   }
  //   //   if (count_as !== Object.keys(checkedCategoryItems).length) {
  //   //     setIsActive({ ...isActive, as: false });
  //   //   }
  //   // }
  //   const sectorCheckeds: { [key: string]: boolean } = {};
  //   sectorItems.forEach((el) => {
  //     sectorCheckeds[`${el.title}_am`] = false;
  //     sectorCheckeds[`${el.title}_eu`] = false;
  //     sectorCheckeds[`${el.title}_as`] = false;
  //   });
  //   if (isActive.am) {
  //     const sectorCheckeds: { [key: string]: boolean } = {};
  //     sectorItems.forEach((el) => {
  //       sectorCheckeds[`${el.title}_am`] = true;
  //       // sectorCheckeds[`${el.title}_eu`] = false;
  //       // sectorCheckeds[`${el.title}_as`] = false;
  //     });
  //     setCheckedCategoryItems({ ...checkedCategoryItems,...sectorCheckeds });
  //   }
  //   if (isActive.eu) {
  //     setCheckedCategoryItems({ ...checkedCategoryItems });
  //   }
  //   if (isActive.as) {
  //     setCheckedCategoryItems({ ...checkedCategoryItems });
  //   }
  // }, [isActive.am, isActive.eu, isActive.as]);

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
          sx={{ "&:hover": { background: "#666" } }}
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
                bgcolor:
                  isActive.am || checkedCategoryItems[`${el.title}_am`]
                    ? "rgb(55, 90, 127)"
                    : "",
                color:
                  isActive.am || checkedCategoryItems[`${el.title}_am`]
                    ? "white"
                    : "",
              }}
              onClick={() =>
                setCheckedCategoryItems({
                  ...checkedCategoryItems,
                  [`${el.title}_am`]: !checkedCategoryItems[`${el.title}_am`],
                })
              }
            >
              Am
            </SectorButton>
            <SectorButton
              sx={{
                bgcolor:
                  isActive.eu || checkedCategoryItems[`${el.title}_eu`]
                    ? "rgb(55, 90, 127)"
                    : "",
                color:
                  isActive.eu || checkedCategoryItems[`${el.title}_eu`]
                    ? "white"
                    : "",
              }}
              onClick={() =>
                setCheckedCategoryItems({
                  ...checkedCategoryItems,
                  [`${el.title}_eu`]: !checkedCategoryItems[`${el.title}_eu`],
                })
              }
            >
              Eu
            </SectorButton>
            <SectorButton
              sx={{
                bgcolor:
                  isActive.as || checkedCategoryItems[`${el.title}_as`]
                    ? "rgb(55, 90, 127)"
                    : "",
                color:
                  isActive.as || checkedCategoryItems[`${el.title}_as`]
                    ? "white"
                    : "",
              }}
              onClick={() =>
                setCheckedCategoryItems({
                  ...checkedCategoryItems,
                  [`${el.title}_as`]: !checkedCategoryItems[`${el.title}_as`],
                })
              }
            >
              As
            </SectorButton>
          </ButtonGroup>
        </FlexSpaces>
      ))}
    </Box>
  );
};
