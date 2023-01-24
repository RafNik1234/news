import { Header } from "./componets/header/header";
import { MainFlex } from "./elements/boxes";
import { Navbar } from "./componets/navbar/navbar";
import { Main } from "./componets/main/main";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { themeProvider } from "./theme";
import { useState } from "react";
import { TabContext } from "./context/tabContext";
import { Footer } from "./componets/footer/footer";

function App() {
  const [mode, setMode] = useState(false);
  const [searchingParam, setSearchingParam] = useState("");

  return (
    <ThemeProvider theme={themeProvider(mode)}>
      <TabContext.Provider value={{ searchingParam, setSearchingParam }}>
        <MainFlex>
          <Navbar />
          <Box width="100%" position="relative" height="100%">
            <Header setMode={setMode} mode={mode} />
            <Main />
            <Footer />
          </Box>
        </MainFlex>
      </TabContext.Provider>
    </ThemeProvider>
  );
}

export default App;
