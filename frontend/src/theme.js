import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#42A5FF", // Electric blue accent
    },
    background: {
      default: "#000000",
      paper: "#111111",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "1px",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;