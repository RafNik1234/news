import { Button } from "@mui/material";
import styled from "styled-components";

export const TypesButton = styled(Button)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px !important",
    height: "30px !important",
    fontSize: "12px !important",
    padding: "0px !important",
    minWidth: "40px !important",
    "&:hover": {
      color: "white",
    },
  };
});

export const SectorButton = styled(Button)(() => ({
  fontSize: "11px",
  padding: "0px",
  minWidth: "30px !important",
  width: "30px !important",
  height: "23px",
}));
