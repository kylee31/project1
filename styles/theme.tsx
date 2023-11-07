const theme = {
  mainColors: {
    blue: "#70A1FF",
    green: "#7EDE76",
  },
  colors: {
    white: "#ffffff",
    black: "#000000",
    lightgray: "#f4f4f4",
    middlegray: "lightgray",
    gray: "#808080",
  },
  weight: {
    thin: 100,
    exLight: 200,
    ligth: 300,
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
    semilarge: "1.3rem",
    large: "2rem",
  },
};

//type 지정 styled.d.ts overrding
export type Theme = typeof theme;

export default theme;
