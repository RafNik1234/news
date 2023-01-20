import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { FontsZoom } from "../componets/fontsZoom/fontsZoom";
import { FlexAlignEnd, FlexCenter, FlexSpaces } from "../elements/boxes";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

export const Headlines = () => {
  const [size, setSize] = useState(100);
  return (
    <Box sx={{ zoom: `${size}%` }}>
      <FlexSpaces>
        <FlexAlignEnd>
          <Typography fontSize={20}>Headline Filters On</Typography>
          <Typography fontSize={12}>| January 18 |</Typography>
        </FlexAlignEnd>
        <FlexCenter gap="18px">
          <FontsZoom setSize={setSize} />
          <FlexCenter>
            <CreateNewFolderIcon />
            <a
              href="http://localhost:5173/#/headlines"
              target="popup"
              onClick={() =>
                window.open(
                  "http://localhost:5173/#/headlines",
                  "name",
                  "width=600,height=400"
                )
              }
            >
              Watch Window
            </a>
          </FlexCenter>
          <FlexCenter>
            <CreateNewFolderIcon />
            <a
              href="http://localhost:5173/#/headlines"
              target="popup"
              onClick={() =>
                window.open(
                  "http://localhost:5173/#/headlines",
                  "name",
                  "width=600,height=400"
                )
              }
            >
              Portfolio Search Window
            </a>
          </FlexCenter>
        </FlexCenter>
      </FlexSpaces>
    </Box>
  );
};
