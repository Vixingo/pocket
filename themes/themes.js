import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
    palette: {
        primary: {
            main: "#F0B90B",
        },
    },
    typography: {
        fontFamily: "Open Sans",
        h1: {
            fontWeight: 600,
            fontSize: "2rem",
        },
    },
});
