import { Dialog } from "@mui/material";
import styled from "styled-components";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme?.spacing?.(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme?.spacing?.(1),
    },
  }));