import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ChartOptions from "./ChartOptions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { FaEthereum } from "react-icons/fa";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#181A20",
    border: "1px solid #000",
    boxShadow: 24,
    p: 2,
};

function ChartSetting() {
    const [charttop, setCharttop] = useState("Bitcoin");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    left: "22px",
                    top: "32px",
                    zIndex: "111",
                }}
            >
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleOpen}
                    sx={{
                        fontFamily: "Exo 2.0",
                        fontWeight: "700",
                        scale: "0.9",
                    }}
                >
                    {charttop}
                </Button>
                <Button
                    size="small"
                    onClick={handleOpen2}
                    sx={{
                        fontFamily: "Exo 2.0",
                        fontWeight: "700",
                        scale: "0.8",
                    }}
                >
                    <SettingsIcon />
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            color: "#9396a0",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography fontSize={14}>Crypto currencies</Typography>
                        <Typography fontSize={14}>
                            Payout <ArrowDropDownIcon />
                        </Typography>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setCharttop("Bitcoin");
                                    handleClose();
                                }}
                            >
                                <ListItemIcon sx={{ color: "#fff" }}>
                                    <CurrencyBitcoinIcon />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ color: "#fff" }}
                                    secondary="Bitcoin"
                                />
                                <ListItemText
                                    secondary="40%"
                                    sx={{ textAlign: "right" }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setCharttop("Ethereum");
                                    handleClose();
                                }}
                            >
                                <ListItemIcon
                                    sx={{ color: "#fff", padding: "5px" }}
                                >
                                    <FaEthereum />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ color: "#fff" }}
                                    secondary="Ethereum"
                                />
                                <ListItemText
                                    secondary="50%"
                                    sx={{ textAlign: "right" }}
                                />{" "}
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ChartOptions />
                </Box>
            </Modal>
        </>
    );
}

export default ChartSetting;
