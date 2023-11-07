"use client";

import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
