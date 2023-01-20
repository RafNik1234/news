import { Rating } from "@mui/material";
import styled from "styled-components";

export const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme?.palette?.action?.disabled,
  },
}));
