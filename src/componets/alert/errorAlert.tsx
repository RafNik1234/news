import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorBox } from "../../elements/boxes";
import { Typography } from "@mui/material";

export const ErrorAlert = () => {
  return (
    <ErrorBox>
      <ErrorBox bgcolor={"red"}>
        <ErrorOutlineIcon sx={{ color: "white" }} />
        <Typography color="white" variant="h6">
          Alert
        </Typography>
        <Typography color="white">Text of alert/error</Typography>
      </ErrorBox>
      <Typography color="red">
        Text of alert/error Text of alert/error
      </Typography>
    </ErrorBox>
  );
};
