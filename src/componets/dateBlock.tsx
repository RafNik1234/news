import { Box, TextField } from "@mui/material";
import React from "react";
import { DatePicker } from "./datePicker/datePicker";
import { FlexCenter, FlexSpaces } from "../elements/boxes";
import { SearchDialog } from "./dialog/searchDialog";
import { CountryDialog } from "./dialog/countryDialog";

export const DateBlock = () => {
  return (
    <Box margin="5px 0">
      <FlexCenter>
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
          size="small"
        />
        <DatePicker />
      </FlexCenter>
      <FlexSpaces>
        <SearchDialog />
        <CountryDialog />
      </FlexSpaces>
    </Box>
  );
};
