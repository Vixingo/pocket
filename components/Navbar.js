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

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NavDrawer from "./NavDrawer";

import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import WalletIcon from "@mui/icons-material/Wallet";
import PublicIcon from "@mui/icons-material/Public";
import CachedIcon from "@mui/icons-material/Cached";
import WarningIcon from "@mui/icons-material/Warning";
import Image from "next/image";

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
                    <Box
                        sx={{
                            display: "none",
                            "@media(max-width:900px)": {
                                display: "block",
                            },
                        }}
                    >
                        <NavDrawer />
                    </Box>
                    <Box
                        sx={{
                            "@media(max-width:900px)": {
                                display: "none",
                            },
                        }}
                    >
                        <Logo />
                    </Box>
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
                            "@media(max-width:660px)": {
                                marginLeft: "10px",
                            },
                        }}
                    >
                        <CircularProgressWithLabel value={progress} />
                        <Box
                            sx={{
                                fontSize: "12px",
                                marginLeft: "7px",
                                color: "#fff",
                                "@media(max-width:660px)": {
                                    display: "none",
                                },
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
                                    "@media(max-width:660px)": {
                                        display: "none",
                                    },
                                }}
                            >
                                <AccountBalanceWalletIcon color={"#67a9c4"} />
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        marginLeft: "7px",
                                        color: "#67a9c4",
                                        "@media(max-width:1280px)": {
                                            display: "none",
                                        },
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
                                        "@media(max-width:1280px)": {
                                            display: "none",
                                        },
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
                                    "@media(max-width:1090px)": {
                                        padding: "7px 11px",
                                        height: "45px",
                                        minWidth: "40px",
                                    },
                                }}
                            >
                                <AttachMoneyIcon
                                    sx={{
                                        display: "none",
                                        "@media(max-width:1090px)": {
                                            display: "block",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        "@media(max-width:1090px)": {
                                            padding: "7px 11px",
                                            display: "none",
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
                                </Box>
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
                                sx={{ mt: "45px", p: "0" }}
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
                                {" "}
                                <Box
                                    sx={{
                                        background: "#181a20",
                                        width: "558px",
                                    }}
                                >
                                    <div className={styles.profilebox}>
                                        <div className={styles.profilediv1}>
                                            <div
                                                className={
                                                    styles.profiledetails
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.profileimg
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.profileimg2
                                                        }
                                                    >
                                                        <Image
                                                            src={
                                                                "/img/no_avatar.png"
                                                            }
                                                            height={98}
                                                            width={98}
                                                            alt={"userimg"}
                                                        />
                                                        <button>
                                                            STRANGER
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.profilenames
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.profilename1
                                                        }
                                                    >
                                                        <Image
                                                            src={
                                                                "/img/UNKNOWN.png"
                                                            }
                                                            height={10}
                                                            width={14}
                                                            alt={"unknown"}
                                                        />
                                                        <p>Unknown Client</p>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.profilename2
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.profilename21
                                                            }
                                                        >
                                                            <PersonIcon fontSize="10px" />
                                                            <span>
                                                                id 38330819
                                                            </span>
                                                        </div>
                                                        <VisibilityOffIcon fontSize="10px" />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.profilename2
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.profilename21
                                                            }
                                                        >
                                                            <EmailIcon fontSize="10px" />
                                                            <span>
                                                                341e3f95ce...@demo.ru
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.profilename2
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.profilename21
                                                            }
                                                        >
                                                            <WalletIcon fontSize="10px" />
                                                            <span>
                                                                $10000.00
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.profilename2
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.profilename21
                                                            }
                                                        >
                                                            <PublicIcon fontSize="10px" />
                                                            <span>
                                                                103.74.230.219
                                                            </span>
                                                        </div>
                                                        <Image
                                                            src={
                                                                "/img/UNKNOWN.png"
                                                            }
                                                            height={14}
                                                            width={18}
                                                            alt={"unknown"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.profilebtn1}>
                                                <button>
                                                    YOU ARE TRADING ON DEMO
                                                    ACCOUNT
                                                </button>
                                            </div>
                                            <div className={styles.staticsbox}>
                                                <div
                                                    className={
                                                        styles.staticsitem1
                                                    }
                                                >
                                                    <p>
                                                        Real account statistics
                                                        for today:
                                                    </p>
                                                    <CachedIcon fontSize="14px" />
                                                </div>
                                                <div
                                                    className={
                                                        styles.staticsitem2
                                                    }
                                                >
                                                    <p>Trades:</p>
                                                    <span>0</span>
                                                </div>
                                                <div
                                                    className={
                                                        styles.staticsitem2
                                                    }
                                                >
                                                    <p>Trading turnover:</p>
                                                    <span>$0</span>
                                                </div>
                                                <div
                                                    className={
                                                        styles.staticsitem2
                                                    }
                                                >
                                                    <p>Net turnover:</p>
                                                    <span>$0</span>
                                                </div>
                                                <div
                                                    className={
                                                        styles.staticsitem2
                                                    }
                                                >
                                                    <p>Trading profit:</p>
                                                    <span>$0</span>
                                                </div>
                                                <div
                                                    className={
                                                        styles.profilebtn2
                                                    }
                                                >
                                                    <button>
                                                        Real account overall
                                                        statistics
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.identies}>
                                                <p>Identity status:</p>
                                                <div
                                                    className={styles.unverify}
                                                >
                                                    <WarningIcon fontSize="16px" />
                                                    <span>Unverified</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.profilediv2}>
                                            <a href="#">Profile</a>
                                            <a href="#">Deposit</a>
                                            <a href="#">Withdrawal</a>
                                            <a href="#">Notifications</a>
                                            <a href="#">Support</a>
                                            <a href="#">News</a>
                                            <a href="#">Settings</a>
                                            <a href="#">Open Real Account</a>
                                            <a href="#">Login</a>
                                        </div>
                                    </div>
                                </Box>
                            </Menu>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
