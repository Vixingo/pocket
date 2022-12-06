import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

function Logo() {
    return (
        <>
            {" "}
            <Box
                sx={{
                    width: "200px",
                }}
            >
                <Image src="/img/logo.png" width={200} height={50} />
            </Box>
        </>
    );
}

export default Logo;
