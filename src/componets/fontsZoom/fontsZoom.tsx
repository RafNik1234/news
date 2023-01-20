import { Box, Typography } from "@mui/material";
import React from "react";
import { FlexAlignEndFonts, FlexCenter } from "../../elements/boxes";

export const FontsZoom = ({ setSize }: { setSize: (size: number) => void }) => {
  return (
    <FlexCenter>
      <Typography>Font size:</Typography>
      <FlexAlignEndFonts>
        <Typography onClick={() => setSize(60)}>A</Typography>
        <Typography onClick={() => setSize(80)}>A</Typography>
        <Typography onClick={() => setSize(100)}>A</Typography>
        <Typography onClick={() => setSize(120)}>A</Typography>
      </FlexAlignEndFonts>
    </FlexCenter>
  );
};
