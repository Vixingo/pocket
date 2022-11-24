import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Withdrawal from "./Withdrawal";

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
            {value === index && (
                <Box sx={{ p: 3, width: "100%" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function FinanceHeader() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const router = useRouter();

    return (
        <>
            <Box
                sx={{
                    display: "block",
                    backgroundColor: "#202237",
                    width: "100%",
                }}
            >
                {" "}
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            width: "100%",
                        }}
                    >
                        <Tab
                            label="DEPOSIT"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/deposit");
                            }}
                        />
                        <Tab
                            label="WITHDRAWAL"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/withdrawal");
                            }}
                        />
                        <Tab
                            label="HISTORY"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/history");
                            }}
                        />
                        <Tab
                            label="cashback"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/cashback");
                            }}
                        />
                        <Tab
                            label="promo codes"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/promo");
                            }}
                        />
                        <Tab
                            label="my safe"
                            onClick={(event) => {
                                event.preventDefault();
                                router.push("/finance/my-safe");
                            }}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Withdrawal />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item 3
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item 4
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item 5
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item 6
                </TabPanel>
            </Box>
        </>
    );
}

export default FinanceHeader;
