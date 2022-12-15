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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { FaEthereum } from "react-icons/fa";
import { Menu } from "@mui/material";
import Image from "next/image";

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

const currencies = [
    { name: "BTC/USDT", payout: "40%", src: "/img/bitcoin.png" },
    { name: "ETH/USDT", payout: "10%", src: "/img/eth.png" },
    { name: "BNB/USDT", payout: "60%", src: "/img/bnb.png" },
    { name: "DOGE/USDT", payout: "9%", src: "/img/Dogecoin_Logo.png" },
    { name: "XRP/USDT", payout: "73%", src: "/img/xrp-logo.png" },
    { name: "SOL/USDT", payout: "80%", src: "/img/Solana_logo.png" },
    { name: "LTC/USDT", payout: "30%", src: "/img/ltclogo.png" },
    { name: "MATIC/USDT", payout: "20%", src: "/img/Polygon-MATIC-Logo.png" },
    { name: "ATOM/USDT", payout: "34%", src: "/img/atomLogo.png" },
    { name: "TON/USDT", payout: "40%", src: "/img/ton.png" },
    { name: "ADA/USDT", payout: "20%", src: "/img/ada.png" },
    { name: "ETC/USDT", payout: "10%", src: "/img/etc.png" },
    { name: "DOT/USDT", payout: "40%", src: "/img/dotLogo.png" },
    { name: "TWT/USDT", payout: "30%", src: "/img/twt.png" },
    { name: "TRX/USDT", payout: "20%", src: "/img/trxLogo.png" },
    { name: "SHIBA/USDT", payout: "10%", src: "/img/SHIBA.png" },
];

function ChartSetting() {
    const [charttop, setCharttop] = useState("BTC/USDT");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                <Menu
                    sx={{ mt: "45px", p: "1", maxHeight: "400px" }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <Box
                        sx={{
                            color: "#9396a0",
                            display: "flex",
                            justifyContent: "space-between",
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#262C41",
                            zIndex: "3",
                        }}
                    >
                        <Typography
                            fontSize={14}
                            sx={{
                                margin: "10px 20px 10px 10px",
                                color: "#9396a0",
                                "&:hover": { color: "#fff" },
                            }}
                        >
                            Crypto currencies
                        </Typography>
                        <Typography
                            fontSize={14}
                            sx={{
                                margin: "10px 0 0 10px",
                                color: "#9396a0",
                                "&:hover": { color: "#fff" },
                            }}
                        >
                            Payout <ArrowDropDownIcon />
                        </Typography>
                    </Box>
                    <List>
                        {currencies.map((data) => {
                            return (
                                <ListItem disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            setCharttop(data.name);
                                            handleCloseUserMenu();
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: "#fff" }}>
                                            <Image
                                                src={data.src}
                                                width={20}
                                                height={20}
                                                alt={data.name + "logo"}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{ color: "#fff" }}
                                            secondary={data.name}
                                        />
                                        <ListItemText
                                            secondary={data.payout}
                                            sx={{ textAlign: "right" }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Menu>
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleOpenUserMenu}
                    sx={{
                        fontFamily: "Exo 2.0",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#fff",
                        borderRadius: "4px",
                        backgroundColor: "#293145",
                        transition: " .3s",
                        paddingRight: "0",
                        "&:hover": {
                            backgroundColor: "#364059",
                        },
                    }}
                >
                    {charttop}
                    <ArrowDropDownIcon
                        sx={{
                            transform:
                                anchorElUser != null
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                            transition: "0.3s",
                        }}
                    />
                </Button>
                <Button
                    onClick={handleOpen2}
                    sx={{
                        minWidth: "35px",
                        fontFamily: "Exo 2.0",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#fff",
                        borderRadius: "4px",
                        backgroundColor: "#293145",
                        transition: " .3s",
                        marginLeft: "5px",
                        "&:hover": {
                            backgroundColor: "#364059",
                        },
                    }}
                >
                    <MoreVertIcon />
                </Button>
            </Box>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}></Box>
            </Modal> */}
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
