import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Image from "next/image";

function NavFooter({ position }) {
    return (
        <>
            <Box
                sx={{
                    color: "#747d98",
                    padding: "20px",
                    position: position ? position : "static",
                    bottom: "0",
                    background: "#181a20",
                }}
            >
                <Typography sx={{ fontSize: "10px" }}>
                    All materials and services provided on this site are subject
                    to copyright and belong to &quot;Gembell Limited&quot;. Any
                    use of materials of this website must be approved by an
                    official representative of &quot;Gembell Limited&quot;, and
                    contain a link to the original resource. Any third-party
                    companies of &quot;Online broker&quot; or &quot;Online
                    trading&quot; type, do not have the right to use materials
                    of this website as well as any distorted writing of
                    &quot;Gembell Limited&quot;. In case of violation, they will
                    be prosecuted in accordance with legislation of the
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
                        <Box>
                            <Box
                                sx={{
                                    display: "inline-block",
                                    marginRight: "5px",
                                }}
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 40 40"
                                    fill={blueGrey[100]}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M33.1543 13.1641C30.6543 8.41406 25.6551 5.16406 19.9551 5.16406C11.8551 5.16406 5.1543 11.8044 5.1543 19.9844C5.1543 28.1544 11.8551 34.7939 19.9551 34.7939C25.5551 34.7939 30.4551 31.7143 32.9551 27.1543L33.0547 26.9844C33.7547 25.8944 35.4543 26.644 34.6543 28.164C31.7543 33.314 26.2551 36.7939 19.9551 36.7939C10.6551 36.7939 3.1543 29.2644 3.1543 19.9844C3.1543 10.6944 10.6551 3.16406 19.9551 3.16406C26.3551 3.16406 31.8539 6.674 34.7539 11.854L34.6543 11.8442C35.4543 13.2942 33.8543 14.0541 33.1543 13.1641ZM18.5547 24.2641C19.0547 24.2641 19.4551 24.6741 19.4551 25.1841C19.4551 25.2141 19.4551 25.2339 19.4551 25.2739C19.4551 25.7739 19.0547 26.1841 18.5547 26.1841C16.8547 26.1841 13.1551 26.1841 11.4551 26.1841C11.1551 26.1841 10.9539 26.084 10.7539 25.894C10.5539 25.704 10.4551 25.4443 10.4551 25.1743C10.4551 25.1443 10.4551 25.1242 10.4551 25.0942C10.4551 24.8242 10.5539 24.5542 10.7539 24.3642C11.8539 23.3442 15.2539 20.0542 15.2539 20.0542C15.8539 19.5242 16.1535 19.0643 16.3535 18.6743C16.5535 18.2843 16.6543 17.9041 16.6543 17.5141C16.6543 16.9441 16.4543 16.5041 16.1543 16.2041C15.7543 15.9041 15.1551 15.7539 14.4551 15.7539C13.4551 15.7539 12.7543 15.9841 12.1543 16.4541C11.7543 16.7441 11.2535 16.7541 10.8535 16.4741C10.8535 16.5041 10.8535 16.5039 10.8535 16.5039C10.6535 16.3039 10.4551 16.0041 10.4551 15.6841C10.4551 15.3641 10.6535 15.064 10.8535 14.874C11.1535 14.664 11.5535 14.4742 11.8535 14.3042C12.6535 13.9542 13.5547 13.7739 14.5547 13.7739C15.9547 13.7739 16.8543 14.0941 17.6543 14.7241C18.3543 15.3441 18.7539 16.2042 18.7539 17.2842C18.7539 17.9542 18.6535 18.5743 18.3535 19.1543C18.0535 19.7443 17.7551 20.4043 16.9551 21.1543L13.6543 24.2641H18.5547ZM23.7539 24.334V15.854H22.1543C21.5543 15.854 21.1543 15.4343 21.1543 14.9043C21.1543 14.3743 21.5543 13.9541 22.1543 13.9541C22.8543 13.9541 23.8543 13.9541 24.6543 13.9541C24.9543 13.9541 25.2551 14.0739 25.4551 14.2939C25.6551 14.5239 25.8535 14.824 25.8535 15.144V24.334H27.2539C27.7539 24.334 28.1543 24.7241 28.1543 25.2041C28.1543 25.2441 28.1543 25.2739 28.1543 25.3139C28.1543 25.7939 27.7539 26.1841 27.2539 26.1841H22.3535C21.8535 26.1841 21.4551 25.7939 21.4551 25.3139C21.4551 25.2739 21.4551 25.2441 21.4551 25.2041C21.4551 24.7241 21.8535 24.334 22.3535 24.334H23.7539ZM33.8535 18.9844H31.5547C31.0547 18.9844 30.5547 19.4244 30.5547 19.9844C30.5547 20.5344 31.0547 20.9844 31.5547 20.9844H33.8535V23.2641C33.8535 23.8141 34.3535 24.2641 34.8535 24.2641C35.4535 24.2641 35.8535 23.8141 35.8535 23.2641V20.9844H38.1543C38.7543 20.9844 39.1543 20.5344 39.1543 19.9844C39.1543 19.4244 38.7543 18.9844 38.1543 18.9844H35.8535V16.7041C35.8535 16.1441 35.4535 15.7041 34.8535 15.7041C34.3535 15.7041 33.8535 16.1441 33.8535 16.7041V18.9844Z"
                                        class="svg-fill"
                                        fill-opacity="0.7"
                                    ></path>
                                </svg>
                            </Box>{" "}
                            <Image
                                width={40}
                                height={40}
                                alt="visa"
                                src="/img/visa-footer.svg"
                            />{" "}
                            <Image
                                width={40}
                                height={40}
                                alt="master"
                                src="/img/maestro-footer.svg"
                            />{" "}
                            <Image
                                width={40}
                                height={40}
                                alt="master"
                                src="/img/mast-footer.svg"
                            />{" "}
                        </Box>
                        {/* <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/visa-footer.svg"
                            alt=""
                        /> */}

                        {/* <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/maestro-footer.svg"
                            alt=""
                        /> */}
                        {/* <img
                            style={{
                                height: "30px",
                                width: "38px",
                                marginRight: "7px",
                            }}
                            src="https://pocketoption.com/images/payments/mast-footer.svg"
                            alt=""
                        /> */}
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
