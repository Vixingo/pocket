import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

function Nav_items(props) {
    const router = useRouter();
    return (
        <>
            <Box
                onClick={(event) => {
                    event.preventDefault();
                    props.href ? router.push(props.href) : "";
                }}
                sx={{
                    minWidth: "90px",
                    minHeight: "55px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    textAlign: "center",
                    backgroundColor: "#1e2131",
                    cursor: "pointer",
                    color: !props.clsName ? "#8fa5bf" : "#fff",
                    background: router.asPath.includes(props.href)
                        ? "#262B3D"
                        : "transperant",
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
