import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import NavFooter from "./NavFooter";

function Withdrawal() {
    return (
        <>
            <Box sx={{ boxShadow: "Withdrawal" }}>
                <Box
                    sx={{
                        backgroundColor: "#131628",
                        padding: "15px",
                        color: "#fff",
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: "600px",
                            width: "100%",
                            margin: "0 auto",
                        }}
                    >
                        <Typography sx={{ fontSize: "24px" }}>
                            Withdrawal
                        </Typography>
                        <Grid container sx={{ marginTop: "30px" }}>
                            <Grid
                                item
                                lg={4}
                                sx={{
                                    textAlign: "right",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    padding: "0 15px",
                                }}
                            >
                                Free Balance:
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sx={{
                                    textAlign: "center",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                0 USD
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: "30px" }}>
                            <Grid
                                item
                                lg={4}
                                sx={{
                                    textAlign: "right",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    padding: "0 15px",
                                }}
                            >
                                Minimum withdrawal amount:
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sx={{
                                    textAlign: "center",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                10 USD
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: "30px" }}>
                            <Grid
                                item
                                lg={4}
                                sx={{
                                    textAlign: "right",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    padding: "0 15px",
                                }}
                            >
                                Commission:
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sx={{
                                    textAlign: "center",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                0 USD
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                background: "#1E253F",
                                maxWidth: "916px",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                margin: "20px 0",
                                border: "1px dashed #394a74",
                                display: "flex",
                                alignItems: "center",
                                paddingLeft: "20px",
                            }}
                        >
                            <ErrorIcon
                                sx={{ color: "#394A74", marginRight: "20px" }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                You can withdraw money from your balance to your
                                bank card or electronic purse you used for
                                depositing <br />
                                You can request withdrawal any time. Your
                                withdrawal requests are processed in 3 business
                                days.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <NavFooter position={"absolute"} />
        </>
    );
}

export default Withdrawal;
