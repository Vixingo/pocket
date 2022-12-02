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

function D_box() {
    return (
        <Grid item xs={12} md={2} lg={4}
            sx={{
                backgroundColor: "#293145",
                color: "#d5d6d8",
                borderRadius: "4px",
                padding: "2px 10px",
                minHeight: "60px",
                minWidth: "190px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                marginTop: "8px",
                marginLeft: "8px",
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
        </Grid>
    );
}

function Deposit() {
    return (
        <>
            <div className="Deposit">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    sx={{
                        padding: "10px",
                        height: "calc(100vh - 108px)",
                        overflow: "scroll",
                    }}
                >
                    <Grid item xs={12} md={5}>
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
                        <Grid container sx={{
                            marginTop: "-8px",
                            marginLeft: "-8px"
                        }} columns={13} justifyContent={"center"}>
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                            <D_box />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ backgroundColor: "blue" }}>
                        asd
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Deposit;
