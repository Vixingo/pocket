import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
                <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function ChartOptions() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [timeFrame, settimeFrame] = React.useState("M1");

    const handletimeFrame = (event, newtimeFrame) => {
        settimeFrame(newtimeFrame);
    };
    return (
        <>
            {" "}
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                    >
                        <Tab label="Chart Types" {...a11yProps(0)} />
                        <Tab
                            label={`Time Frames (${timeFrame})`}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Typography>Coming soon</Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ToggleButtonGroup
                        value={timeFrame}
                        exclusive
                        onChange={handletimeFrame}
                        aria-label="text timeFrame"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            "& > :not(style)": {
                                border: "none",
                            },
                        }}
                    >
                        <ToggleButton value="S5">
                            <Typography sx={{ color: "#fff" }}>S5</Typography>
                        </ToggleButton>
                        <ToggleButton value="S10">
                            <Typography sx={{ color: "#fff" }}>S10</Typography>
                        </ToggleButton>
                        <ToggleButton value="S15">
                            <Typography sx={{ color: "#fff" }}>S15</Typography>
                        </ToggleButton>
                        <ToggleButton value="S30">
                            <Typography sx={{ color: "#fff" }}>S30</Typography>
                        </ToggleButton>
                        <ToggleButton value="M1">
                            <Typography sx={{ color: "#fff" }}>M1</Typography>
                        </ToggleButton>
                        <ToggleButton value="M2">
                            <Typography sx={{ color: "#fff" }}>M2</Typography>
                        </ToggleButton>
                        <ToggleButton value="M3">
                            <Typography sx={{ color: "#fff" }}>M3</Typography>
                        </ToggleButton>
                        <ToggleButton value="M5">
                            <Typography sx={{ color: "#fff" }}>M5</Typography>
                        </ToggleButton>
                        <ToggleButton value="M10">
                            <Typography sx={{ color: "#fff" }}>M10</Typography>
                        </ToggleButton>
                        <ToggleButton value="M15">
                            <Typography sx={{ color: "#fff" }}>M15</Typography>
                        </ToggleButton>
                        <ToggleButton value="M30">
                            <Typography sx={{ color: "#fff" }}>M30</Typography>
                        </ToggleButton>
                        <ToggleButton value="H1">
                            <Typography sx={{ color: "#fff" }}>H1</Typography>
                        </ToggleButton>
                        <ToggleButton value="H4">
                            <Typography sx={{ color: "#fff" }}>H4</Typography>
                        </ToggleButton>
                        <ToggleButton value="D1">
                            <Typography sx={{ color: "#fff" }}>D1</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </TabPanel>
            </Box>
        </>
    );
}

export default ChartOptions;
