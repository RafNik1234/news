import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { WarningBox } from "../../elements/boxes";
import { Typography } from "@mui/material";

export const WarningAlert = () => {
  return (
    <WarningBox>
      <WarningBox bgcolor={"orange"}>
        <ErrorOutlineIcon />
        <Typography color="black" variant="h6">
          Alert
        </Typography>
        <Typography color="black" whiteSpace='nowrap'>Text of alert/warning</Typography>
      </WarningBox>
      <Typography>Text of alert/warning Text of alert/warning</Typography>
    </WarningBox>
  );
};
