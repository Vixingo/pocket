import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={appTheme}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
