import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Nav_left from "../components/Nav_left";
import React from "react";
import Trade_nav_right from "../components/Trade_nav_right";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MainChart from "../components/MainChart";
import Control from "../components/Control";
import Fav_btn from "../components/Fav_btn";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import styles from "../styles/Navbar.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
export default function Home() {
    return (
        <>
            <Box className={styles.page}>
                <Navbar />

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#1c202e",
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
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#1c202e",
                        "@media(max-width:900px)": {
                            flexDirection: "column",
                        },
                    }}
                >
                    <Nav_left />
                    <MainChart />
                    <Trade_nav_right />
                </Box>
            </Box>

            {/* <ul>
                <li>
                    <Link href="/login">
                        <Button variant="outlined">Login</Button>
                    </Link>
                    <Link href="/registration">
                        <Button variant="outlined">registration</Button>
                    </Link>
                    <Link href="/password_recovery">
                        <Button variant="outlined">password recovery</Button>
                    </Link>
                    <Link href="/trade">
                        <Button variant="outlined">trade</Button>
                    </Link>
                    <br />
                    <br />
                    <h6>Last Update :</h6> <span>Amount input fixed ✅</span>
                </li>
            </ul> */}
        </>
    );
}
