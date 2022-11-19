import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
    palette: {
        primary: {
            main: "#F0B90B",
        },
        text: {
            secondary: "#8ea5c0",
        },
    },

    typography: {
        fontFamily: "Open Sans",
        h1: {
            fontWeight: 700,
            fontSize: "2rem",
            fontFamily: "Open Sans",
        },
    },
});
