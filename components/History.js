import { Box, Typography } from "@mui/material";
import React from "react";
import NavFooter from "./NavFooter";

function History() {
    return (
        <>
            <Box>
                <Typography>Filters</Typography>
            </Box>
            <NavFooter position="absolute" />
        </>
    );
}

export default History;
