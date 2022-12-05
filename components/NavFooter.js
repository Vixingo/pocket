import React from "react";
import { Box, Typography } from "@mui/material";

function NavFooter({ position }) {
    return (
        <>
            <Box
                sx={{
                    color: "#747d98",
                    padding: "20px",
                    position: position ? position : "static",
                    bottom: "0",
                    width: "100%",
                }}
            >
                <Typography sx={{ fontSize: "10px" }}>
                    All materials and services provided on this site are subject
                    to copyright and belong to "Gembell Limited". Any use of
                    materials of this website must be approved by an official
                    representative of "Gembell Limited", and contain a link to
                    the original resource. Any third-party companies of "Online
                    broker" or "Online trading" type, do not have the right to
                    use materials of this website as well as any distorted
                    writing of "Gembell Limited". In case of violation, they
                    will be prosecuted in accordance with legislation of the
                    intellectual property protection.
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                    Gembell Limited does not provide service to residents of the
                    EEA countries, USA, Israel, UK and Japan.
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                    Gembell Limited is registered at Trust Company Complex,
                    Ajeltake Road, Ajeltake Island, Majuro, Republic of the
                    Marshall Islands MH 96960 with the registration number
                    86967.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={{ fontSize: "10px" }}>
                        Gembell Limited is regulated by IFMRRC (License number{" "}
                        <a href="#" style={{ color: "#8ea5c0" }}>
                            TSRF RU 0395 AA Vv0207)
                        </a>{" "}
                        <br />
                        All brokerage activity on this website provided by
                        Gembell Limited. Copyright ©2022 Pocket Option
                    </Typography>
                    <Box>
                        <img
                            style={{
                                height: "30px",
                                marginRight: "10px",
                                width: "32px",
                            }}
                            src="https://pocketoption.com/themes/cabinet/images/21plus.svg"
                            alt=""
                        />
                        <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/visa-footer.svg"
                            alt=""
                        />
                        <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/maestro-footer.svg"
                            alt=""
                        />
                        <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/mast-footer.svg"
                            alt=""
                        />
                    </Box>
                </Box>
                {/* footer nav */}
                <Box>
                    <ul
                        style={{
                            listStyle: "none",
                            textDecoration: "underline",
                            fontSize: "12px",
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                        }}
                    >
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#">AML and KYC Policy</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Payment Policy</a>
                        </li>
                        <li>
                            <a href="#">Responsibility Disclosure</a>
                        </li>
                    </ul>
                </Box>
            </Box>
        </>
    );
}

export default NavFooter;
