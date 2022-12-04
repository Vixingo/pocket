import React from 'react'
import { Box, Button, Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(Promo, Percent, Min, Max, Validfrom, Validuntill) {
    return { Promo, Percent, Min, Max, Validfrom, Validuntill };
}

const rows = [
    createData('50START', '50%', '$50', '$5000', ' ', ' '),
];


function Cashback() {
    return (
        <>
            <Box sx={{ display: "flex" }}>

                <Box sx={{ backgroundColor: "#131628", padding: "17px", width: "280px", textAlign: "center" }}>
                    <Typography sx={{ color: "#7f838c", fontSize: "14px", marginBottom: "10px" }}>Do you have a promocode?</Typography>
                    <input style={{ width: "90%", backgroundColor: "#162032", padding: "6px 12px", outline: "none", borderColor: "#495671", color: "#7e91a7", border: "1px solid", borderRadius: "5px", height: "34px" }} type="text" />
                </Box>
                <Box sx={{ background: "#131628", padding: "17px", marginLeft: "20px" }}>
                    <Typography sx={{ fontSize: "20px", marginBottom: "14px", color: "#fff" }}>Available promo codes</Typography>
                    {/* table */}
                    <TableContainer sx={{ backgroundColor: "#131628", boxShadow: "none" }} component={Paper}>
                        <Table sx={{ minWidth: '1000px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Promo code</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Percent</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Min deposit</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Max bonus</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Valid from</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}>Valid until</TableCell>
                                    <TableCell sx={{ fontSize: "12px", padding: "10px 15px", color: "#7f838c" }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Promo}</TableCell>
                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Percent}</TableCell>
                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Min}</TableCell>
                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Max}</TableCell>
                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Validfrom}</TableCell>
                                        <TableCell sx={{ fontSize: "12px", color: "#fff" }} align="left">{row.Validuntill}</TableCell>
                                        <TableCell><Button variant="outlined" color="error">CHECK</Button></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>



                </Box>

            </Box>
        </>
    )
}

export default Cashback
