import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "../styles/Control.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Control(props) {
    const [amount, setAmount] = useState(1);
    return (
        <>
            <Box
                sx={{
                    transition: !props.in ? ".2s" : "0",
                    transitionDelay: !props.in ? "0.2s" : "0",
                    position: "absolute",
                    left: !props.in ? "-160px" : "-490px",
                    backgroundColor: "#23283B",
                    minWidth: "160px",
                    height: "100vh",
                    padding: "10px",
                    "@media(max-width:900px)": {
                        maxWidth: "500px",
                        paddingBottom: "20px",
                        margin: "0 auto",
                        border: "1px solid #615f6b",
                        padding: "10px",
                        borderRadius: "6px",
                        zIndex: "100",
                        height: "unset",
                        bottom: "65px",
                        left: "unset",
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                <Box
                    sx={{
                        "@media(max-width:900px)": {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                        },
                    }}
                >
                    {" "}
                    <Box
                        sx={{
                            border: "1px solid #535562",
                            borderRadius: "4px",
                            position: "relative",
                            maxWidth: "136px",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: "11px",
                                textAlign: "center",
                                backgroundColor: "#23283B",
                                display: "inline",
                                position: "absolute",
                                top: "-10px",
                                left: "36%",
                                padding: "0 4px",
                                "@media(max-width:900px)": {
                                    left: "30%",
                                },
                            }}
                        >
                            {" "}
                            Time{" "}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "19px",
                                textAlign: "center",
                                padding: "8px 8px 4px 8px",
                            }}
                        >
                            00:01:00
                        </Typography>
                        <Button
                            sx={{
                                width: "100%",
                                borderTop: "1px solid #535562",
                                padding: "2px",
                                borderRadius: "0",
                            }}
                        >
                            <AccessTimeIcon sx={{ fontSize: "14px" }} />
                        </Button>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            border: "1px solid #535562",
                            borderRadius: "4px",
                            position: "relative",
                            maxWidth: "136px",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: "11px",
                                textAlign: "center",
                                backgroundColor: "#23283B",
                                display: "inline",
                                position: "absolute",
                                top: "-10px",
                                left: "29%",
                                padding: "0 4px",
                            }}
                        >
                            {" "}
                            Amount{" "}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "19px",
                                textAlign: "center",
                                padding: "8px 8px 4px 8px",
                            }}
                        >
                            ${amount}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            {" "}
                            <Button
                                sx={{
                                    borderTop: "1px solid #535562",
                                    padding: "2px",
                                    borderRadius: "0",
                                    minWidth: "45px",
                                }}
                                onClick={() => {
                                    setAmount(amount - 1);
                                }}
                            >
                                <RemoveRoundedIcon sx={{ fontSize: "14px" }} />
                            </Button>
                            <Button
                                sx={{
                                    borderTop: "1px solid #535562",
                                    borderRadius: "0",
                                    padding: "2px",

                                    minWidth: "45px",
                                }}
                            >
                                <AttachMoneyIcon sx={{ fontSize: "14px" }} />
                            </Button>
                            <Button
                                sx={{
                                    borderTop: "1px solid #535562",
                                    padding: "2px",

                                    borderRadius: "0",
                                    minWidth: "45px",
                                }}
                                onClick={() => {
                                    setAmount(amount + 1);
                                }}
                            >
                                <AddIcon sx={{ fontSize: "14px" }} />
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <br />
                <Box
                    sx={{
                        backgroundColor: "#1f2334",
                        border: "1px dashed #535562",
                        color: "#7d879d",
                        marginBottom: "15px",
                        padding: "4px 6px",
                        borderRadius: "4px",
                        minWidth: "136px",
                        textAlign: "center",
                        "@media(max-width:900px)": {
                            maxWidth: "500px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        },
                    }}
                >
                    <Typography sx={{ fontSize: "13px" }}>Payout : </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "#6fc274",
                        }}
                    >
                        $1.84
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            color: "#6fc274",
                            fontWeight: "600",
                            "@media(max-width:900px)": {
                                padding: "0 25px",
                            },
                        }}
                    >
                        +84%
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        Profit :
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        +$0.84
                    </Typography>
                </Box>

                <Box className={styles.btn_holder}>
                    <button className={styles.High_btn}>
                        {" "}
                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            data-src="/themes/cabinet/svg/icons/call-arrow.svg"
                        >
                            <path
                                d="M44.695 153.9v56.878h25.536v-74.364l-4.025-4.025L44.695 153.9Zm37.38 56.878h40.001v-41.203a20.197 20.197 0 0 1-8.427 1.846 20.172 20.172 0 0 1-14.36-5.949l-17.214-17.211v62.517Zm91.85 0v-91.096l-40.001 40.001v51.095h40.001Zm51.845 0V67.833l-40.001 40.001v102.944h40.001ZM44.695 96.514v39.562l21.511-21.511 41.995 41.995a7.701 7.701 0 0 0 10.892 0l4.521-4.521c.232-.185.476-.35.692-.565l103.909-103.91 16.231 16.23c3.54 3.541 9.59 1.034 9.59-3.971V7.582a5.618 5.618 0 0 0-5.618-5.618h-52.241c-5.005 0-7.512 6.05-3.971 9.59l16.23 16.231-94.723 94.723-42.059-42.06a7.703 7.703 0 0 0-10.893 0L44.695 96.514Z"
                                transform="translate(-44.69 45.233)"
                            ></path>
                        </svg>
                        <Typography
                            sx={{
                                marginLeft: "auto",
                                paddingRight: "15px",
                                fontFamily: "Exo 2.0, Arial",
                                fontWeight: 700,
                                fontSize: "14px",
                            }}
                        >
                            Long
                        </Typography>
                    </button>

                    <br />

                    <button className={styles.Low_btn}>
                        {" "}
                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            data-src="/themes/cabinet/svg/icons/put-arrow.svg"
                        >
                            <path
                                d="M70.231 107.837v121.946h-24.71V83.127l24.71 24.71Zm11.847 121.946h40.001v-70.1l-40.001-39.999v110.099Zm91.847 0v-81.525l-17.217 17.214a20.157 20.157 0 0 1-14.357 5.949c-2.96 0-5.814-.65-8.427-1.846v60.208h40.001Zm11.847 0h40.001v-58.155h-29.596c-3.82 0-7.419-1.196-10.405-3.277v61.432ZM45.521 25.737v39.566l86.17 86.171c.216.215.46.38.692.565l4.521 4.521a7.701 7.701 0 0 0 10.892 0l41.995-41.995 18.642 18.642-16.23 16.23c-3.538 3.538-1.034 9.59 3.971 9.59h52.241a5.618 5.618 0 0 0 5.618-5.618v-52.243c.003-5.003-6.047-7.509-9.587-3.972l-16.231 16.231-32.976-32.977a7.703 7.703 0 0 0-10.893 0l-8.889 8.89-33.167 33.17-96.769-96.771Z"
                                transform="translate(-45.519 26.217)"
                            ></path>
                        </svg>
                        <Typography
                            sx={{
                                marginLeft: "auto",
                                paddingRight: "15px",
                                fontFamily: "Exo 2.0, Arial",
                                fontWeight: 700,
                                fontSize: "14px",
                            }}
                        >
                            Short
                        </Typography>
                    </button>
                </Box>
            </Box>
        </>
    );
}

export default Control;
