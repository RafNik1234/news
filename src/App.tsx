import { Header } from "./componets/header/header";
import { MainFlex } from "./elements/boxes";
import { Navbar } from "./componets/navbar/navbar";
import { Main } from "./componets/main/main";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { themeProvider } from "./theme";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeProvider theme={themeProvider(mode)}>
      <MainFlex>
        <Navbar />
        <Box width="100%">
          <Header setMode={setMode} mode={mode} />
          <Main />
        </Box>
      </MainFlex>
    </ThemeProvider>
  );
}

export default App;
