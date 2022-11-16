import React from "react";
import styles from "../styles/Navbar.module.css";
import Nav_items from "./Nav_items";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <section className={styles.Nav_left}>
                <Nav_items icon={<TrendingUpIcon />} />
                <Box>
                    <IconButton>LogOut</IconButton>
                </Box>
            </section>
        </>
    );
}

export default Nav_left;
