import {
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import Image from "next/image";
import NavFooter from "./NavFooter";

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
                className="Deposit "
                sx={{
                    height: "calc(100vh - 108px)",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    width: "100%",
                }}
            >
                <Box className="row" sx={{ padding: "20px" }}>
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
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
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
                            <div className="col-md-6"> Heloo</div>
                            <div className="col-md-6"> gelo</div>
                        </div>
                    </Box>
                </Box>
                <NavFooter />
            </Box>
        </>
    );
}

export default Deposit;
