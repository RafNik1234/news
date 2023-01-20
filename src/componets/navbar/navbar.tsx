import { useState } from "react";
import { FlexCenter, LeftNavbar, NavItemBox } from "../../elements/boxes";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { SuccessText, TestText } from "../../elements/typography";
import { CustomDialog } from "../dialog/dialog";
import { GlobalNews } from "./globalNews";
import { VoiceVolumn } from "./voiceVolumn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { CustomSettingsDialog } from "../dialog/settingsDialog";
import { DateBlock } from "../dateBlock";
import { HeadlineView } from "./headlineView";
import { SelectorView } from "./sectorView";

export const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState(false);
  return (
    <Box>
      {open ? (
        <LeftNavbar width="250px">
          <NavItemBox>
            <FlexCenter>
              <Typography>TradeTheNews.com</Typography>
              <Box
                onClick={() => setStatus(!status)}
                sx={{ cursor: "pointer" }}
              >
                {status ? (
                  <SuccessText>STOP</SuccessText>
                ) : (
                  <TestText>TEST</TestText>
                )}
              </Box>
              <CustomDialog />
            </FlexCenter>
            <FlexCenter
              onClick={() => setOpen(!open)}
              style={{ background: "orange", cursor: "pointer" }}
            >
              <KeyboardDoubleArrowLeftIcon />
            </FlexCenter>
          </NavItemBox>
          <GlobalNews />
          <NavItemBox>
            <VoiceVolumn />
            <FlexCenter
              sx={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                padding: "0 5px",
              }}
            >
              <SignalCellularAltIcon />
            </FlexCenter>
            <FlexCenter style={{ padding: "0 5px" }}>
              <CustomSettingsDialog />
            </FlexCenter>
          </NavItemBox>
          <DateBlock />
          <HeadlineView />
          <SelectorView />
        </LeftNavbar>
      ) : (
        <IconButton onClick={() => setOpen(!open)}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      )}
    </Box>
  );
};
