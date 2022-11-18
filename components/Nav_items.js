import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

function Nav_items(props) {
    return (
        <>
            <Box
                sx={{
                    minWidth: "90px",
                    minHeight: "55px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    textAlign: "center",
                    cursor: "pointer",
                    color: !props.clsName ? "#8fa5bf" : "#fff",
                    background: !props.clsName ? "transperant" : "#262B3D",
                    transition: "background-color .2s,color .2s",
                    "&:hover": {
                        backgroundColor: " rgba(38,43,61,.7)",
                    },
                }}
            >
                {props.icon}
                <Typography
                    sx={{
                        fontSize: "12px",
                        color: !props.clsName ? "#8fa5bf" : "#fff",
                    }}
                >
                    {props.value}
                </Typography>
            </Box>
        </>
    );
}

export default Nav_items;
