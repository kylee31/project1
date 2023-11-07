import { Theme } from "@/styles/theme";

const defaultTheme = {
  mainColors: {
    blue: "#70A1FF",
    green: "#7EDE76",
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
    lightgray: "#f4f4f4",
    gray: "#808080",
  },
  weight: {
    thin: 100,
    exLight: 200,
    light: 300, // 수정: "ligth" 대신 "light"로 수정
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    exBold: 800,
    Black: 900,
  },
  size: {
    smaller: "0.6rem",
    small: "0.8rem",
    medium: "1rem",
    large: "2rem",
  },
};

export type defaultTheme = Theme;
