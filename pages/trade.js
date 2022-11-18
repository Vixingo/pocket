import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Nav_left from "../components/Nav_left";
import React from "react";
import Trade_nav_right from "../components/Trade_nav_right";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MainChart from "../components/MainChart";
import Control from "../components/Control";

function trade() {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Nav_left />
                <MainChart />
                <Control />
                <Trade_nav_right />
            </Box>
        </>
    );
}

export default trade;
