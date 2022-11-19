import React from "react";
import styles from "../styles/Navbar.module.css";
import Nav_items from "./Nav_items";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HistoryIcon from "@mui/icons-material/History";
import { Badge, Box, Collapse, ToggleButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Trades from "./Trades";
import Control from "./Control";

function Trade_nav_right() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <section className={styles.Trade_nav_right}>
                <Control in={open} />
                <Collapse
                    in={open}
                    timeout="auto"
                    orientation="horizontal"
                    unmountOnExit
                >
                    <Trades />
                </Collapse>
                <button onClick={handleClick} style={{ border: "none" }}>
                    <Nav_items
                        icon={<HistoryIcon sx={{ mb: -1, color: "inherit" }} />}
                        value="Trades"
                        clsName="active"
                    />
                </button>

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
