import {
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import Image from "next/image";
import NavFooter from "./NavFooter";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import PercentIcon from "@mui/icons-material/Percent";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CreditCardIcon from "@mui/icons-material/CreditCard";
function D_box() {
    return (
        <Box className="col-lg-6 col-md-4 col-sm-6 ">
            <Box
                sx={{
                    backgroundColor: "#293145",
                    color: "#d5d6d8",
                    borderRadius: "4px",
                    padding: "2px 10px",
                    minHeight: "60px",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flex: "0 0 80px",
                        marginRight: "7px",
                    }}
                >
                    <Image src={"/img/vm.png"} width={80} height={40} />
                </Box>
                <Typography sx={{ fontSize: "12px" }}>MasterCard</Typography>
            </Box>
        </Box>
    );
}

function Deposit() {
    return (
        <>
            <Box
                className="Deposit"
                sx={{
                    height: "calc(100vh - 108px)",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    width: "100%",
                }}
            >
                <Box
                    className="row"
                    sx={{
                        padding: "100px",
                        paddingTop: "50px",
                        "@media(max-width:600px)": {
                            padding: "20px",
                        },
                    }}
                >
                    <Box className="col-lg-6 ">
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: "400",
                            }}
                        >
                            Choose a payment system for an investment
                        </Typography>
                        <Divider
                            sx={{
                                margin: "10px auto",
                                color: "#fff",
                            }}
                        >
                            <Typography sx={{ display: "flex" }}>
                                {" "}
                                <CreditCardRoundedIcon /> &nbsp; Cards
                            </Typography>
                        </Divider>
                        <Box className="row">
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                        </Box>
                        <Divider
                            sx={{
                                margin: "10px auto",
                                color: "#fff",
                            }}
                        >
                            <Typography sx={{ display: "flex" }}>
                                {" "}
                                <LocalAtmRoundedIcon /> &nbsp; E-payments
                            </Typography>
                        </Divider>
                        <Box className="row">
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                        </Box>
                    </Box>
                    <Box className="col-lg-6">
                        <div className="row">
                            <div className="col-md-6">
                                {" "}
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        marginBottom: "25px",
                                        fontWeight: "400",
                                    }}
                                >
                                    Your profile level{" "}
                                    <Tooltip
                                        title="Profile level affects your Social Trading status and reflects your loyalty to Pocket Option. The higher your Profile level, the more various offers you will receive from the company. This is the company's initiative to help you achieve better trading performance. For our clients with high levels, we open access to premium services and attractive products in the Market."
                                        arrow
                                        placement="top"
                                    >
                                        <HelpOutlineRoundedIcon fontSize="14px" />
                                    </Tooltip>
                                </Typography>
                            </div>
                            <div className="col-md-12">
                                <Box className="user_level_block user_st">
                                    <CheckRoundedIcon
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "20px",
                                            left: "7px",
                                            position: "absolute",
                                        }}
                                    />{" "}
                                    Stranger [Without deposit]
                                </Box>
                                <Box className="user_level_block user_nb">
                                    Newbie [Balance less than $100]{" "}
                                </Box>
                                <Box className="user_level_block user_beg">
                                    Beginner [Min balance: $100]{" "}
                                </Box>
                                <Box className="user_level_block user_ex">
                                    Experienced [Min balance: $1000]{" "}
                                </Box>
                                <Box className="user_level_block user_ms">
                                    Master [Min balance: $5000]
                                </Box>
                                <Box className="user_level_block user_pro">
                                    Pro [Min balance: $15000]
                                </Box>
                                <Box className="user_level_block user_guru">
                                    Guru [Min balance: $50000]
                                </Box>
                                <Box className="reqire">
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "13px",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        <AccountBalanceIcon
                                            sx={{ color: "#009eff" }}
                                        />{" "}
                                        Minimum deposit amount: $5
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "13px",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        <PercentIcon
                                            sx={{ color: "#009eff" }}
                                        />{" "}
                                        No commission
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "13px",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        <HourglassEmptyIcon
                                            sx={{ color: "#009eff" }}
                                        />{" "}
                                        Quick withdrawals
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: "13px",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        <CreditCardIcon
                                            sx={{ color: "#009eff" }}
                                        />{" "}
                                        Minimum withdrawal amount: $50
                                    </Typography>
                                </Box>
                            </div>
                        </div>
                    </Box>
                </Box>
                <NavFooter />
            </Box>
        </>
    );
}

export default Deposit;
