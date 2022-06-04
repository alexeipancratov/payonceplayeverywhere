import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import Buy from "./pages/Buy";
import { styledTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
