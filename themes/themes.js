import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#F0B90B",
        },
        text: {
            secondary: "#8ea5c0",
        },
        action: { selected: "rgba(240, 185, 11, 0.8)" },
        divider: "#515459",
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
