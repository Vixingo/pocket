import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/Control.module.css";
function Control(props) {
    return (
        <>
            <Box
                sx={{
                    transitionDelay: !props.in ? "0.3s" : "0",
                    position: "absolute",
                    left: !props.in ? "-160px" : "-490px",
                    backgroundColor: "#23283B",
                    minWidth: "160px",
                    height: "100vh",
                }}
            >
                <Box>
                    <Typography
                        sx={{ color: "text.secondary", fontSize: "13px" }}
                    >
                        Time
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default Control;
