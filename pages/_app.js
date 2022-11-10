import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/themes";
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={appTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
