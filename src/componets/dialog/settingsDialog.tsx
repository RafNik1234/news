import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Checkbox, DialogActions } from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { IOSSlider } from "../../elements/slider";
import { RadioGroupRating } from "../rating";
import { LabelCenter } from "../../elements/label";
import { BootstrapDialog } from "../../elements/dialog";
import { marks } from "./constants";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme: any) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


export function CustomSettingsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SettingsApplicationsIcon onClick={handleClickOpen} color="warning" />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Player settings
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box>
            <Typography>Entry tones volume level:</Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={60}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          <Box>
            <Typography>Exit tones volume level:</Typography>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={60}
              marks={marks}
              valueLabelDisplay="on"
            />
          </Box>
          <LabelCenter>
            <Checkbox color="default" />
            <Typography>
              Broadcast alert for disconnected audio channel
            </Typography>
          </LabelCenter>
        </DialogContent>
        <DialogContent dividers>
          <Typography>
            If you have a quick second, can you rate your current audio
            experience?
          </Typography>
          <RadioGroupRating />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
