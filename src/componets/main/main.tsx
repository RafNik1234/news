import React from "react";
import { MainContent } from "../../elements/boxes";
import { useLocation } from "react-router-dom";
import { MAINTABS } from "../tabs/constants";

export const Main = () => {
  const { pathname } = useLocation();
  const selectetComponetn = MAINTABS.find(
    (el) => el.key === pathname.split("/")[1]
  );
  return <MainContent>{selectetComponetn?.component}</MainContent>;
};
