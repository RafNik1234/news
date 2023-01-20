import * as React from "react";
import { IconContainerProps } from "@mui/material/Rating";
import { StyledRating } from "../elements/rating";
import { ratingCustomIcons } from "./dialog/constants";



function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return (
    <span {...other} style={{ margin: "5px 10px" }}>
      {ratingCustomIcons[value].icon}
    </span>
  );
}

export function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => ratingCustomIcons[value].label}
      highlightSelectedOnly
    />
  );
}
