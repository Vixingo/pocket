import { Box, IconButton } from "@mui/material";
import React from "react";

function Nav_items(props) {
    return (
        <>
            <Box
                sx={{
                    minWidth: "90px",
                    minHeight: "55px",
                    transition: "background-color .2s,color .2s",
                    "&:hover": {
                        backgroundColor: " rgba(38,43,61,.3)",
                    },
                }}
            >
                {props.icon}
            </Box>
        </>
    );
}

export default Nav_items;
