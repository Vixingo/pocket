import React from "react";
import styles from "../styles/Navbar.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import TradeDetail from "./TradeDetail";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Trades(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#222636",
                    position: "relative",
                    right: "90px",
                    zIndex: 90,
                    textAlign: "center",
                    minWidth: "330px",
                    height: "100vh",
                    transition: "0.3s",
                    display: !props.in ? "none" : "block",
                    "@media(max-width:900px)": {
                        position: "absolute",
                        right: "0",
                        width: "270px",
                        top: "101px",
                        height: "calc(100vh - 156px)",
                    },
                }}
            >
                <Box
                    component={"div"}
                    sx={{
                        padding: "8px 20px",
                        background: "#2a3144",
                        position: "relative",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#fff",
                        }}
                    >
                        Trades
                    </Typography>
                    <ListRoundedIcon
                        sx={{
                            position: "absolute",
                            right: "20px",
                            top: "10px",
                            backgroundColor: "#8ea5c0",
                            borderRadius: "50%",
                            padding: "1px",
                            fontSize: "18px",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "#fff",
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            variant="fullWidth"
                        >
                            <Tab
                                label="Opened"
                                {...a11yProps(0)}
                                sx={{
                                    fontSize: "12px",
                                    textTransform: "capitalize",
                                    fontWeight: "400",
                                }}
                            />
                            <Tab
                                label="Closed"
                                {...a11yProps(1)}
                                sx={{
                                    fontSize: "12px",
                                    textTransform: "capitalize",
                                    fontWeight: "400",
                                }}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Typography
                            color="#fff"
                            sx={{
                                padding: "15px 7px",
                                fontSize: "14px",
                            }}
                        >
                            No placed trades
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography
                            sx={{
                                fontSize: "11px",
                                minHeight: "32px",
                                color: "text.secondary",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            2022-11-19
                        </Typography>

                        <TradeDetail />
                        <TradeDetail />
                        <TradeDetail />
                        <TradeDetail />
                        <TradeDetail />
                        <TradeDetail />
                        <TradeDetail />
                    </TabPanel>
                </Box>
            </Box>
        </>
    );
}

export default Trades;
