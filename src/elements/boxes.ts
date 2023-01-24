import styled from "styled-components";
import { Box, Paper } from "@mui/material";

export const FlexCenter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
}));

export const FlexAlignEnd = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "4px",
}));

export const FlexSpaces = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FlexEnd = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const FlexAlignEndFonts = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "4px",
  "p:nth-child(1)": {
    fontSize: "10px",
    cursor: "pointer",
  },
  "p:nth-child(2)": {
    marginBottom: "-1px",
    cursor: "pointer",
    fontSize: "12px",
  },
  "p:nth-child(3)": {
    marginBottom: "-2px",
    fontSize: "16px",
    cursor: "pointer",
  },
  "p:nth-child(4)": {
    marginBottom: "-3px",
    fontSize: "18px",
    cursor: "pointer",
  },
}));

export const CustomTab = styled(Box)((props: { isactive: string }) => ({
  height: "20px",
  padding: "0 8px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "11px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "80px",
  color: props.isactive === "true" ? "#fff" : "",
  background: props.isactive === "true" ? "#b1b5b4" : "",
}));

export const MainFlex = styled(Paper)`
  display: flex;
  align-items: flex-start;
  height: 100vh;
`;
export const GridHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const LeftNavbar = styled(Box)`
  display: block;
`;

export const MainContent = styled(Box)`
  display: block;
  padding: 0 25px;
`;

export const NavItemBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  alignitems: center;
  background: #1f779b;
  border-bottom: 1px solid black;
  height: 40px;
`;
export const NavHeadBox = styled(Box)(() => ({
  background: "#255D76",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px",
  color: "#ccc",
}));

export const NavHeadItem = styled(Box)(({ active }: { active: boolean }) => ({
  background: active ? "#CCE3E9" : "",
  padding: "5px",
  cursor: "pointer",
  "&:hover": {
    background: "white",
    color: "black",
  },
}));

export const CalendarGrayBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  background: "#b1b5b4",
  borderRadius: "5px",
  color: "#fff",
  padding: "0 15px",
  margin: "5px 0",
}));

export const FlexAlignStart = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const CalendarSelfBox = styled(Box)(({ bg }: { bg: string }) => ({
  background: bg,
  borderRadius: "10px",
  padding: "10px",
  color: "#000",
}));

export const ErrorBox = styled(Box)`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 5px;
  gap: 8px;
`;

export const WarningBox = styled(Box)`
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 5px;
  gap: 8px;
`;

export const FooterBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 99%;
  height: 150px;
  border: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  right: 2px;
`;

export const FlexTopAlign = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FooterFlexCenter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  border: "1px solid #ccc",
  cursor: "pointer",
  padding: "8px 16px",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  fontWeight: "bold",
}));

export const CloseIconBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "30px",
  border: "1px solid gray",
 }));
