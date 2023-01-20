import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export function VoiceVolumn() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 150 }}>
      <Stack direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown fontSize="small" />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          sx={{ color: "orange" }}
        />
        <VolumeUp fontSize="small" />
      </Stack>
    </Box>
  );
}
