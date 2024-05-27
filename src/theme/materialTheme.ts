import { createTheme } from "@mui/material"

export const materialTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#002659",
    },
    secondary: {
      main: "#46F298",
    },
    info: {
      main: "#E4E4E4",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
