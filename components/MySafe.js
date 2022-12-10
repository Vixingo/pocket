import React from "react";
import { Box, Typography } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DemoLine from "./Chart";
import DemoColumn from "./Chart-2";
import Image from "next/image";
import NavFooter from "./NavFooter";

function MySafe() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box
                sx={{
                    padding: "15px",
                    background: "#181a20",
                    height: "calc(100vh - 108px)",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    width: "100%",
                }}
            >
                <Box sx={{ padding: "20px" }}>
                    <Typography
                        sx={{
                            fontSize: "24px",
                            marginBottom: "14px",
                            color: "#fff",
                        }}
                    >
                        My Safe
                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: "1200px",
                            color: "#fff",
                            fontSize: "14px",
                            marginBottom: "19px",
                        }}
                    >
                        Open your personal safe for savings and receive passive
                        income of up to{" "}
                        <span style={{ fontWeight: "700" }}>10%</span> per
                        annum! <br /> Receive profit from your financial assets
                        currently not used in trading for a truly passive source
                        of income with Pocket Option. Deposits and withdrawals
                        are available at any time without any restrictions or
                        commissions.
                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: "1200px",
                            color: "#fff",
                            fontSize: "14px",
                            marginBottom: "19px",
                        }}
                    >
                        Cooperation with major European and Asian banks opens up
                        opportunities for investing in government bonds with a
                        fixed guaranteed income and promising investment funds
                        secured by demand deposits. Check out the full terms of
                        use below.
                    </Typography>
                    <Box>
                        <a
                            href="#"
                            style={{
                                color: "#8ea5c0",
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "32px",
                            }}
                        >
                            <TextSnippetIcon sx={{ marginRight: "7px" }} />
                            Terms of use{" "}
                            <span style={{ fontSize: "13px" }}>
                                [ Pdf, 327 kb{" "}
                                <OpenInNewIcon sx={{ fontSize: "14px" }} /> ]
                            </span>
                        </a>
                    </Box>
                    <Box style={{ maxWidth: "1200px" }}>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#fff",
                                marginTop: "10px",
                                marginBottom: "4px",
                            }}
                        >
                            Choose a Safe type
                        </Typography>

                        {/* boxs */}

                        <Box className="row">
                            <Box
                                className="col-md-4"
                                sx={{
                                    background: "#161a2b",
                                    padding: "10px 25px 30px",
                                    textAlign: "center",
                                    transition: ".5s",
                                    opacity: ".2",
                                    borderRadius: "5px",
                                    padding: "0 20px",
                                    "&:hover": {
                                        background: "#111424",
                                        opacity: "1",
                                    },
                                }}
                            >
                                <Image
                                    width={190}
                                    height={170}
                                    src="/img/usdsafe.png"
                                    alt="usd safe"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        color: "#fff",
                                        marginTop: "10px",
                                    }}
                                >
                                    USD Safe
                                </Typography>
                            </Box>
                            <Box
                                className="col-md-4"
                                sx={{
                                    background: "#161a2b",
                                    padding: "10px 25px 30px",
                                    textAlign: "center",
                                    transition: ".5s",
                                    opacity: ".2",
                                    borderRadius: "5px",
                                    "&:hover": {
                                        background: "#111424",
                                        opacity: "1",
                                    },
                                }}
                            >
                                <Image
                                    width={190}
                                    height={170}
                                    src="/img/bitsafe.png"
                                    alt="bitcoin safe"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        color: "#fff",
                                        marginTop: "10px",
                                    }}
                                >
                                    Bitcoin Safe
                                </Typography>
                            </Box>
                            <Box
                                className="col-md-4"
                                sx={{
                                    background: "#161a2b",
                                    padding: "10px 25px 30px",
                                    textAlign: "center",
                                    transition: ".5s",
                                    opacity: ".2",
                                    borderRadius: "5px",
                                    "&:hover": {
                                        background: "#111424",
                                        opacity: "1",
                                    },
                                }}
                            >
                                <Image
                                    width={190}
                                    height={170}
                                    src="/img/ethsafe.png"
                                    alt="eth safe"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "700",
                                        color: "#fff",
                                        marginTop: "10px",
                                    }}
                                >
                                    Ethereum Safe
                                </Typography>
                            </Box>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#fff",
                                marginTop: "10px",
                                marginBottom: "4px",
                            }}
                        >
                            Сalculate the profitability of your safe
                        </Typography>

                        <Box className="row" sx={{ marginTop: "15px" }}>
                            <Box className="col-md-8">
                                <Box className="row">
                                    <Box className="col-md-6">
                                        <Typography
                                            sx={{
                                                color: "#7e91a7",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Choose a safe
                                        </Typography>
                                        <FormControl
                                            sx={{ m: 1, width: "100%" }}
                                            size="small"
                                        >
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>
                                                    10%
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    7%
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    5%
                                                </MenuItem>
                                                <MenuItem value={40}>
                                                    3%
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box className="col-md-6">
                                        <Typography
                                            sx={{
                                                color: "#7e91a7",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Duration
                                        </Typography>
                                        <FormControl
                                            sx={{ m: 1, width: "100%" }}
                                            size="small"
                                        >
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>
                                                    10%
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    7%
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    5%
                                                </MenuItem>
                                                <MenuItem value={40}>
                                                    3%
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box className="row">
                                    <Box className="col-md-6">
                                        <Typography
                                            sx={{
                                                color: "#7e91a7",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Choose a safe
                                        </Typography>
                                        <FormControl
                                            sx={{ m: 1, width: "100%" }}
                                            size="small"
                                        >
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>
                                                    10%
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    7%
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    5%
                                                </MenuItem>
                                                <MenuItem value={40}>
                                                    3%
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box className="col-md-6">
                                        <Typography
                                            sx={{
                                                color: "#7e91a7",
                                                fontWeight: "700",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Duration
                                        </Typography>
                                        <FormControl
                                            sx={{ m: 1, width: "100%" }}
                                            size="small"
                                        >
                                            <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>
                                                    10%
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    7%
                                                </MenuItem>
                                                <MenuItem value={30}>
                                                    5%
                                                </MenuItem>
                                                <MenuItem value={40}>
                                                    3%
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="col-md-4">
                                <Typography
                                    sx={{
                                        color: "#7e91a7",
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    Calculation results on 2024-01-08
                                </Typography>
                                <Box
                                    sx={{
                                        backgroungColor: "#161a2b",
                                        border: "1px solid #20273f",
                                        padding: "20px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            marginBottom: "10px",
                                            color: "#fff",
                                        }}
                                    >
                                        Total income
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "40px",
                                            paddingBottom: "15px",
                                            color: "#F0B90B",
                                            fontWeight: "700",
                                        }}
                                    >
                                        $6257
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            marginBottom: "10px",
                                            color: "#fff",
                                        }}
                                    >
                                        Final safe balance
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "40px",
                                            color: "#F0B90B",
                                            fontWeight: "700",
                                        }}
                                    >
                                        $69257
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="row">
                            <Box className="col-md-6">
                                <Typography
                                    sx={{
                                        color: "#7e91a7",
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    Balance chart
                                </Typography>
                                <DemoLine
                                    sx={{
                                        backgroungColor: "#161a2b",
                                        border: "1px solid #20273",
                                        minWidth: "500px",
                                        padding: "0 30px",
                                    }}
                                />
                            </Box>
                            <Box className="col-md-6">
                                <Typography
                                    sx={{
                                        color: "#7e91a7",
                                        fontWeight: "700",
                                        fontSize: "16px",
                                    }}
                                >
                                    Income chart
                                </Typography>
                                <DemoColumn />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontStyle: "italic",
                                marginTop: "20px",
                                color: "#fff",
                            }}
                        >
                            * The monthly calculation of safe revenue is based
                            on daily payouts and may vary depending on the
                            number of days in a month
                        </Typography>
                    </Box>
                </Box>
                <NavFooter />
            </Box>
        </>
    );
}

export default MySafe;
