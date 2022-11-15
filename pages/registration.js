import styles from "../styles/login.module.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Link from "next/link";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterMenu from "../components/FooterMenu";
import Script from "next/script";
import Image from "next/image";
import Logo from "../components/Logo";
function registration() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <>
            <Head>
                <title>Registration</title>
                <Link rel="preconnect" href="https://www.google.com" />
                <Link
                    rel="preconnect"
                    href="https://www.gstatic.com"
                    crossorigin
                />
            </Head>
            <Script
                async
                src="https://www.google.com/recaptcha/api.js"
            ></Script>
            <section className={styles.login}>
                <Container maxWidth="sm" sx={{ padding: "0" }}>
                    {" "}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItem: "center",
                            padding: "10px",
                        }}
                    >
                        <ChevronLeftRoundedIcon sx={{ color: "#F0B90B" }} />
                        <span className="my_link" style={{ color: "#fff" }}>
                            To home page
                        </span>
                    </Link>{" "}
                    <Container
                        component="main"
                        maxWidth="sm"
                        sx={{
                            mt: 1,
                            background: "#fff",
                            borderRadius: "10px",
                            mt: 4,
                            "@media(max-width:600px)": {
                                mt: 2,
                            },
                        }}
                    >
                        <CssBaseline />
                        <Box
                            sx={{
                                paddingTop: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                pb: 8,
                            }}
                        >
                            <Logo />

                            <Typography
                                component="h1"
                                variant="h1"
                                sx={{
                                    pt: 3,
                                    pb: 2,
                                }}
                            >
                                Registration
                            </Typography>
                            <Typography
                                display="flex"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                Already registered?
                                <Link
                                    href="/login"
                                    className="my_link"
                                    style={{ marginLeft: "10px" }}
                                >
                                    Sign in
                                </Link>
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{
                                    pt: 1,
                                    maxWidth: "420px",
                                    padding: "12px 0px",
                                    textAlign: "center",
                                }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    variant="standard"
                                    size="small"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    size="small"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password confirmation *"
                                    type="password"
                                    id="password"
                                    size="small"
                                    variant="standard"
                                />
                                <Box
                                    display={"flex"}
                                    sx={{
                                        justifyContent: "space-between",
                                        mt: 2,
                                        mb: 4,
                                    }}
                                >
                                    {" "}
                                    <Box>
                                        {" "}
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                            sx={{ padding: "4px" }}
                                        />
                                        <Typography
                                            sx={{
                                                display: "inline",
                                                fontSize: "12px",
                                            }}
                                        >
                                            I have read and accepted the
                                            following agreement:{" "}
                                            <Link
                                                href={"/Public"}
                                                className="my_link"
                                            >
                                                {" "}
                                                Public Offer
                                            </Link>
                                        </Typography>{" "}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                    }}
                                >
                                    {" "}
                                    {/* <Recaptcha
                                        sitekey="6LeRgvYiAAAAAMVwOuiOcXsmJk5Dbziwvnp8YCVe"
                                        render="explit"
                                        // onloadCallback={recaptchaLoaded}
                                        // verifyCallback={verifyCallback}
                                    /> */}
                                    <div
                                        class="g-recaptcha"
                                        data-sitekey="6LeRgvYiAAAAAMVwOuiOcXsmJk5Dbziwvnp8YCVe"
                                    ></div>
                                </Box>
                                <Button
                                    className={styles.btn_grad}
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        width: "310px",
                                        mt: 3,
                                        mb: 2,
                                        fontSize: "16px",
                                        padding: "16px 20px 14px",
                                        mx: "auto",
                                        fontWeight: "800",
                                        backgroundImage:
                                            "linear-gradient( to right, #f2994a 0%,  #f0b90b 51%,  #f2994a 100%)",
                                        transition: "0.5s",
                                        backgroundSize: "200% auto",
                                        color: "#fff",
                                        boxShadow: "0 0 20px #eee",
                                        borderRadius: "10px",
                                        display: "block",
                                    }}
                                >
                                    Sign Up
                                </Button>

                                <h5 style={{ marginBottom: "16px" }}>
                                    Or login with
                                </h5>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <button
                                        className={styles.social_btn}
                                        style={{
                                            background: "#0099fa",
                                            color: "#fff",
                                        }}
                                    >
                                        <FacebookIcon /> &nbsp; Facebook
                                    </button>

                                    <button className={styles.social_btn}>
                                        <Image
                                            src="/img/G _Logo.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />{" "}
                                        &nbsp; Google
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    </Container>{" "}
                    <FooterMenu />
                </Container>
            </section>
        </>
    );
}

export default registration;
