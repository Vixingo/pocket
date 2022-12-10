import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import NavFooter from "./NavFooter";

function Cashback() {
    return (
        <>
            <Box
                sx={{
                    height: "calc(100vh - 108px)",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    width: "100%",
                    background: "#181a20",
                }}
            >
                <Grid container sx={{ padding: "50px" }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: "20px" }}>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                    color: "#fff",
                                    marginBottom: "10px",
                                }}
                            >
                                Your Cashback
                            </Typography>
                            {/* table */}
                            <table
                                style={{
                                    width: "100%",
                                    borderRight: "1px solid #31343a",
                                }}
                            >
                                <colgroup>
                                    <col style={{ width: "50%" }} />
                                    <col style={{ width: "50%" }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#009af9",
                                                    fontSize: "30px",
                                                }}
                                            >
                                                0%
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Last payout
                                            </Box>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Last payout
                                            </Box>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Max payout
                                            </Box>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Next payout
                                            </Box>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                borderBottom:
                                                    "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Date of activation
                                            </Box>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: "center",
                                                borderLeft: "1px solid #31343a",
                                                borderTop: "1px solid #31343a",
                                                borderBottom:
                                                    "1px solid #31343a",
                                                padding: "10px 15px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    color: "#8fa5bf",
                                                    fontSize: "14px",
                                                    marginTop: "3px",
                                                    lineHeight: "16px",
                                                }}
                                            >
                                                Valid until
                                            </Box>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* terms & conditions */}
                            <Box sx={{ paddingTop: "20px" }}>
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: "#fff",
                                        marginBottom: "10px",
                                    }}
                                >
                                    Terms and Conditions
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    1. Cashback will expire automatically in 1
                                    year after activation.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    2. You can prolong your cashback at any
                                    moment if you have purchased cashback with
                                    the same payout percentage.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    3. You can increase cashback percentage
                                    (maximum 10%) at any moment if you have
                                    purchased cashback with payout percentage
                                    higher than the current one. New cashback
                                    percentage will be applied at the moment of
                                    activation.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    4. Cashback is calculated in case the total
                                    amount of losses is greater than the gains
                                    for the previous month or since the date of
                                    activation. Cashback is added to your
                                    balance on the first day of every month
                                    automatically..
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    5. You can withdraw your refunded cashback
                                    at any moment if you have enough funds on
                                    your Real account&apos;s balance.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    6. The Company has a right to amend the
                                    bonus terms or terminate this promotion at
                                    any time without any notice.
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "12px", color: "#fff" }}
                                >
                                    7. Please note that the cashback activation
                                    time and validity period is displayed in
                                    accordance with the server time (UTC+2).
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Rightside */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: "20px" }}>
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
                                    sx={{
                                        color: "#394A74",
                                        marginRight: "20px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        fontFamily: "sans-serif",
                                        color: "#fff",
                                    }}
                                >
                                    In case of losses the Cashback returns a
                                    part of lost funds every month. <br />
                                    You can return up to 10% of your losses.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: "#31262b",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    margin: "20px 0",
                                    border: "1px dashed #a34b19",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "20px",
                                }}
                            >
                                <WarningIcon
                                    sx={{
                                        color: "#a34b19",
                                        marginRight: "20px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        fontFamily: "sans-serif",
                                        color: "#fff",
                                    }}
                                >
                                    You don&apos;t have active Cashback at the
                                    moment.
                                </Typography>
                            </Box>

                            {/* btn */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    color="success"
                                    variant="outlined"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        color: "#fff",
                                        backgroundColor: "#172832",
                                        "&:hover": {
                                            background: "#025044",
                                        },
                                        "@media(max-width:1090px)": {
                                            padding: "7px 11px",
                                            height: "45px",
                                            minWidth: "40px",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            "@media(max-width:1090px)": {
                                                padding: "7px 11px",
                                                display: "none",
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: " 14px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Buy it now
                                        </Typography>
                                    </Box>
                                </Button>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    sx={{
                                        marginBottom: "10px",
                                        marginTop: "20px",
                                        fontSize: "18px",
                                        color: "#fff",
                                    }}
                                >
                                    Cashback payouts
                                </Typography>
                            </Box>
                            <table style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Amount, $
                                        </th>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Cashback Percent
                                        </th>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Balance
                                        </th>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                fontSize: "14px",
                                                color: "#fff",
                                                padding: "10px 15px",
                                            }}
                                            colSpan={4}
                                        >
                                            No Data
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    sx={{
                                        marginBottom: "10px",
                                        marginTop: "30px",
                                        fontSize: "18px",
                                        color: "#fff",
                                    }}
                                >
                                    Activation history
                                </Typography>
                            </Box>
                            <table style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Date of activation
                                        </th>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Cashback Percent
                                        </th>
                                        <th
                                            style={{
                                                fontSize: "12px",
                                                color: "#7f838c",
                                                borderColor: "#292d4a",
                                                borderBottom: "2px solid",
                                                padding: "10px 15px",
                                                textAlign: "left",
                                            }}
                                        >
                                            End Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                fontSize: "14px",
                                                color: "#fff",
                                                padding: "10px 15px",
                                            }}
                                            colSpan={4}
                                        >
                                            No Data
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                    </Grid>
                </Grid>
                <NavFooter />
            </Box>
        </>
    );
}

export default Cashback;
