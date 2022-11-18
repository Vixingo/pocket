import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Nav_items from "./Nav_items";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function LinkTab(props) {
    return (
        <Tab
            sx={{
                color: "#8FA5BF",
                fontSize: "12px",
            }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function Nav_left() {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <section className={styles.Nav_left}>
                <Nav_items
                    icon={<TrendingUpIcon sx={{ mb: -1, color: "inherit" }} />}
                    clsName="active"
                    value="Trade"
                />
                <Nav_items
                    icon={<AttachMoneyIcon sx={{ mb: -1, color: "inherit" }} />}
                    value="Finance"
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "0",
                    }}
                >
                    <Nav_items
                        icon={
                            <ExitToAppIcon sx={{ mb: -1, color: "inherit" }} />
                        }
                        value="Logout"
                    />
                </Box>
            </section>
        </>
    );
}

export default Nav_left;
