import React, { useEffect } from "react";
import { ScrollableTabs } from "../tabs/tabs";
import useTabRouter from "../../hooks/useTabRouter";
import { useNavigate } from "react-router-dom";
import { FlexCenter, FlexSpaces } from "../../elements/boxes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Switch } from "@mui/material";

export const Header = ({
  setMode,
  mode,
}: {
  setMode: (mode: boolean) => void;
  mode: boolean;
}) => {
  const { activeTab, handleTabChange } = useTabRouter("headlines");

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/headlines");
  }, []);

  return (
    <FlexSpaces style={{ padding: "0 25px" }}>
      <ScrollableTabs activeKey={activeTab} onTabClick={handleTabChange} />
      <FlexCenter>
        <DarkModeIcon />
        <Switch checked={mode} onChange={() => setMode(!mode)} />
        <WbSunnyIcon />
      </FlexCenter>
    </FlexSpaces>
  );
};
