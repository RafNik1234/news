import * as React from "react";
import Box from "@mui/material/Box";
import { MAINTABS } from "./constants";
import { CustomTab, FlexCenter } from "../../elements/boxes";

interface MainTabsProps {
  activeKey?: string;
  onTabClick?: (activeKey: string) => void;
}

export function ScrollableTabs(props: MainTabsProps) {
  const [value, setValue] = React.useState("headlines");

  const handleOnChange = (activeKey: string): void => {
    if (props.onTabClick != null) {
      props.onTabClick(activeKey);
    }
    setValue(activeKey)
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <FlexCenter>
        {MAINTABS.map((tab) => (
          <CustomTab
            key={tab.key}
            isactive={`${value === tab.key}`}
            onClick={() => handleOnChange(tab.key)}
          >
            {tab.label}
          </CustomTab>
        ))}
      </FlexCenter>
    </Box>
  );
}
