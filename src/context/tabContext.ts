import React from "react";

const initialState = {
  searchingParam: "",
  setSearchingParam: () => {},
};

interface IContext {
  searchingParam: string;
  setSearchingParam: React.Dispatch<React.SetStateAction<string>>;
}

export const TabContext = React.createContext<IContext>(initialState);
