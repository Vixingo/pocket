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
import Image from "next/image";
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
                <script src="https://www.google.com/recaptcha/api.js"></script>
            </Head>
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
                            <Box sx={{ width: "200px" }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 5120 1024"
                                    fill="#F0B90B"
                                >
                                    <path
                                        d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                                        p-id="2935"
                                    ></path>
                                </svg>
                            </Box>

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
                                        background:
                                            "linear-gradient(79deg, #ffff1a,#F0B90B)",
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
