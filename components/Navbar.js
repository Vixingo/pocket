import {
    Button,
    Box,
    Typography,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Badge,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "./Logo";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RedeemIcon from "@mui/icons-material/Redeem";
import Fav_btn from "./Fav_btn";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// var $ = require("jquery");
// if (typeof window !== "undefined") {
//     window.$ = window.jQuery = require("jquery");
// }

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//     ssr: false,
// });

function CircularProgressWithLabel(props) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
            }}
        >
            <CircularProgress variant="determinate" {...props} size="36px" />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="#fff"
                    fontSize={"10px"}
                >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};

function Navbar() {
    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <section className={styles.Navbar}>
                <div className={styles.header}>
                    <Logo />
                    <Button
                        sx={{
                            backgroundColor: "#293145",
                            border: " 1px solid #464a58",
                            display: "flex",
                            alignItems: "center",
                            height: " 45px",
                            minWidth: "40px",
                            padding: "0 6px",
                            marginLeft: "30px",
                        }}
                    >
                        <CircularProgressWithLabel value={progress} />
                        <Box
                            sx={{
                                fontSize: "12px",
                                marginLeft: "7px",
                                color: "#fff",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "inherit",
                                    color: "#8ea5c0",
                                    textAlign: "left",
                                    textTransform: "none",
                                }}
                            >
                                In progress:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "inherit",
                                    textAlign: "left",
                                    textTransform: "none",
                                }}
                            >
                                Fetching Happiness
                            </Typography>
                        </Box>
                    </Button>
                    <div className={styles.header_right}>
                        <div className={styles.safe}>
                            <Button
                                sx={{
                                    backgroundColor: " #27405e",
                                    border: "1px solid #3a74a9",
                                    color: "#67a9c4",
                                    display: "flex",
                                    alignItems: "center",
                                    height: " 45px",
                                    minWidth: "40px",
                                    padding: "7px 11px",
                                }}
                            >
                                <AccountBalanceWalletIcon color={"#67a9c4"} />
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        marginLeft: "7px",
                                        color: "#67a9c4",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",

                                            textAlign: "left",
                                        }}
                                    >
                                        Create a Safe
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            textAlign: "left",
                                            textTransform: "none",
                                        }}
                                    >
                                        with a 10% interest rate{" "}
                                    </Typography>
                                </Box>
                            </Button>
                        </div>
                        <div className={styles.safe}>
                            <Button
                                sx={{
                                    backgroundColor: " rgba(85,84,59,.7)",
                                    border: "1px solid rgba(231,206,69,.7)",
                                    color: "#c9b545",
                                    display: "flex",
                                    alignItems: "center",
                                    height: " 45px",
                                    minWidth: "40px",
                                    padding: "7px 11px",
                                }}
                            >
                                <RedeemIcon />
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        marginLeft: "7px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            textAlign: "left",
                                        }}
                                    >
                                        Get 50% bonus
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "10px",
                                            textAlign: "left",
                                            textTransform: "none",
                                        }}
                                    >
                                        On your first deposit
                                    </Typography>
                                </Box>
                            </Button>
                        </div>
                        <div className={styles.balance}>
                            <a
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "25px",
                                        linehHeight: "25px",
                                        marginBottom: "2px",
                                        textDecoration: "none",
                                        fontFamily: "Open Sans",
                                    }}
                                >
                                    $10000.00
                                </Typography>
                                <Button
                                    style={{
                                        backgroundColor: "#531B1F",
                                        border: "1px solid #f52914",
                                        boxShadow:
                                            " 0 0 4px 2px rgba(245,41,20,.3)",
                                        color: "#fff",
                                        padding: "0 8px",
                                        fontSize: "9px",
                                        width: "100%",

                                        marginTop: "-14px",
                                    }}
                                >
                                    DEMO
                                </Button>
                            </a>
                        </div>
                        <div className={styles.open_real}>
                            <Button
                                color="success"
                                variant="outlined"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    color: "#fff",
                                    backgroundColor: "#172832",
                                    "&:hover": {
                                        background: "#025044",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: " 18px",
                                        fontWeight: "700",
                                        lineHeight: "20px",
                                        fontFamily: "Exo 2",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Invest real money
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "100",
                                        fontFamily: "Exo 2",
                                        lineHeight: "14px",
                                        textTransform: "lowercase",
                                    }}
                                >
                                    Open real account
                                </Typography>
                            </Button>
                        </div>
                        <div className={styles.profile_btn}>
                            <Badge color="primary" variant="dot">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{
                                        p: 0,
                                        position: "relative",
                                        width: "50px",
                                        height: "50px",
                                    }}
                                >
                                    <Avatar
                                        alt="Profile"
                                        src="/img/no_avatar.png"
                                        sx={{ width: "50px", height: "50px" }}
                                    />
                                    <div>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                position: "absolute",
                                                right: "50%",
                                                transform: "translateX(50%)",
                                                fontSize: "9px",
                                                color: "#fff",
                                                bottom: "3px",
                                                padding: "0px",
                                                border: "1px solid hsla(45,2%,65%,.7)",
                                                backgroundColor:
                                                    "hsla(36,3%,62%,.7)",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "hsla(36,3%,62%,.7)",
                                                    borderColor:
                                                        "hsla(45,2%,65%,.7)",
                                                },
                                            }}
                                        >
                                            STRANGER
                                        </Button>
                                    </div>
                                </IconButton>
                            </Badge>

                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <h1>Hello world</h1>
                            </Menu>
                        </div>
                    </div>
                </div>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {" "}
                    <ArrowBackIosRoundedIcon
                        sx={{
                            position: "relative",
                            left: "0px",
                            color: "#fff",
                            fontSize: "14px",
                            zIndex: "10",
                            width: "40px",
                        }}
                    />
                    <div className={styles.fav_list}>
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                        <Fav_btn />
                    </div>
                    <ArrowForwardIosRoundedIcon
                        sx={{
                            fontSize: "14px",
                            position: "relative",
                            right: "0px",
                            width: "40px",
                            color: "#fff",
                            zIndex: "10",
                        }}
                    />
                </Box>
            </section>
        </>
    );
}

export default Navbar;
