import React from "react";
import styles from "../styles/Navbar.module.css";
import Nav_items from "./Nav_items";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HistoryIcon from "@mui/icons-material/History";
import { Badge, Box, ToggleButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

function Trade_nav_right() {
    return (
        <>
            <section className={styles.Trade_nav_right}>
                <Nav_items
                    icon={<HistoryIcon sx={{ mb: -1, color: "inherit" }} />}
                    value="Trades"
                    clsName="active"
                />

                <Nav_items
                    icon={<KeyboardIcon sx={{ mb: -1, color: "inherit" }} />}
                    value="Hotkeys"
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "101px",
                    }}
                >
                    <Nav_items
                        icon={
                            <FullscreenIcon sx={{ mb: -1, color: "inherit" }} />
                        }
                        value="Fullscreen"
                    />
                </Box>
            </section>
        </>
    );
}

export default Trade_nav_right;
