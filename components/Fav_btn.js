import { Box, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function Fav_btn() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: " rgba(58,70,90,.8)",
                    borderColor: "#505b6d",
                    padding: "5px 5px ",
                    minWidth: "170px",
                    marginLeft: "5px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "4px",
                    border: "1px solid #505b6d",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CloseIcon
                        sx={{
                            padding: "4px",
                            marginRight: "3px",
                            color: "#fff",
                        }}
                    />
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: "13px",
                            marginRight: "6px",
                            fontFamily: "Exo 2.0",
                        }}
                    >
                        Tesla OTC
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "13px",
                        minWidth: "50px",
                        fontFamily: "Exo 2.0",
                        textAlign: "right",
                    }}
                >
                    43%
                </Typography>
            </Box>
        </>
    );
}

export default Fav_btn;
