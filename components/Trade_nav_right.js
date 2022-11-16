import React from "react";
import styles from "../styles/Navbar.module.css";
import Nav_items from "./Nav_items";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HistoryIcon from "@mui/icons-material/History";
import { Badge, Box } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

function Trade_nav_right() {
    return (
        <>
            <section className={styles.Trade_nav_right}>
                <Nav_items
                    icon={<HistoryIcon sx={{ mb: -1, color: "#8fa5bf" }} />}
                    value="Trades"
                />

                <Nav_items
                    icon={<KeyboardIcon sx={{ mb: -1, color: "#8fa5bf" }} />}
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
                            <FullscreenIcon sx={{ mb: -1, color: "#8fa5bf" }} />
                        }
                        value="Fullscreen"
                    />
                    <Box
                        sx={{
                            textAlign: "center",
                            color: "#8fa5bf",
                        }}
                    ></Box>
                </Box>
            </section>
        </>
    );
}

export default Trade_nav_right;
