import { Box, ToggleButton, Typography } from "@mui/material";
import React, { useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
function TradeDetail() {
    const [fav, setFav] = useState(true);
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#292d41",
                    padding: "10px",
                    borderBottom: "1px solid #F0B90B",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex" }}>
                        <ToggleButton
                            sx={{ p: 0, border: "none", color: "#CD7E13" }}
                            onClick={() => {
                                fav == true ? setFav(false) : setFav(true);
                            }}
                        >
                            {fav ? (
                                <StarRoundedIcon sx={{ fontSize: "17px" }} />
                            ) : (
                                <StarBorderRoundedIcon
                                    sx={{ fontSize: "17px" }}
                                />
                            )}
                        </ToggleButton>{" "}
                        <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                            {" "}
                            Tesla OTC{" "}
                            <span style={{ color: "#6fc274" }}>+92%</span>
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "#fff", fontSize: "13px" }}>
                        03:43
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                    }}
                >
                    <Box sx={{ display: "flex" }}>
                        <ArrowOutwardRoundedIcon sx={{ color: "#6fc274" }} />
                        <Typography sx={{ color: "#fff", fontSize: "inherit" }}>
                            $100.00
                        </Typography>
                    </Box>
                    <Typography sx={{ color: "#6fc274", fontSize: "inherit" }}>
                        $192.00
                    </Typography>
                    <Typography sx={{ color: "#6fc274", fontSize: "inherit" }}>
                        +$92.00
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default TradeDetail;
