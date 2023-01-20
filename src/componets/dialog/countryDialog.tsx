import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, DialogActions } from "@mui/material";
import { LabelCenter } from "../../elements/label";
import { BootstrapDialog } from "../../elements/dialog";
import { FlexCenter } from "../../elements/boxes";
import LanguageIcon from "@mui/icons-material/Language";

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

export function CountryDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FlexCenter onClick={handleClickOpen} sx={{ cursor: "pointer" }}>
        <LanguageIcon fontSize="small" />
        <Typography color="#42A4B7" fontSize={12}>
          Country codes
        </Typography>
      </FlexCenter>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Select Test Mode
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <LabelCenter>
            <input type="radio" name="item" />
            <Typography gutterBottom>TTN Live Test</Typography>
            <Box width={250} />
          </LabelCenter>
          <LabelCenter>
            <input type="radio" name="item" />
            <Typography gutterBottom>BBC Radio Live</Typography>
            <Box width={250} />
          </LabelCenter>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>SAVE</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
