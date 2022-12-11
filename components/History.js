import {
    Box,
    Button,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import NavFooter from "./NavFooter";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
function History() {
    const [value, setValue] = React.useState([null, null]);
    return (
        <>
            <Box sx={{ background: "#181a20" }}>
                {" "}
                <Box sx={{ padding: "20px" }}>
                    <Paper elevation={9} sx={{ background: "#181A20" }}>
                        <Typography
                            sx={{
                                color: "rgb(132, 142, 156)",
                                padding: "10px",
                                fontSize: "14px",
                            }}
                        >
                            Filters
                        </Typography>
                        <Divider />
                        <Box sx={{ padding: "10px", display: "flex" }}>
                            {" "}
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                localeText={{
                                    start: "From",
                                    end: "To",
                                }}
                            >
                                <DateRangePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField
                                                {...startProps}
                                                sx={{ color: "#fff" }}
                                            />
                                            <Box sx={{ mx: 2, color: "#fff" }}>
                                                {" "}
                                                to{" "}
                                            </Box>
                                            <TextField
                                                {...endProps}
                                                sx={{ color: "#fff" }}
                                            />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                            <Button
                                variant="outlined"
                                sx={{ margin: "0 10px" }}
                            >
                                Apply
                            </Button>
                        </Box>
                    </Paper>
                    <br />
                    <Paper>
                        <TableContainer
                            component={Paper}
                            elevation={9}
                            sx={{
                                backgroundColor: "#181a20",
                                padding: "10px",
                                paddingBottom: "50px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "rgb(132, 142, 156)",
                                    padding: "10px",
                                    fontSize: "14px",
                                }}
                            >
                                Balance History
                            </Typography>

                            <Divider />
                            <br />
                            <Stack spacing={2} direction="row">
                                <Button variant="outlined">Deposits</Button>
                                <Button variant="outlined">Withdrawal</Button>
                                <Button variant="contained">All Types</Button>
                            </Stack>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: "#fff" }}>
                                            ID
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="right"
                                        >
                                            Date
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="right"
                                        >
                                            Amount
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="right"
                                        >
                                            Method
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="right"
                                        >
                                            Type
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="center"
                                        >
                                            Status
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: "#fff" }}
                                            align="left"
                                        >
                                            Bonus amount
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* <TableRow>
                                        <TableCell></TableCell>
                                    </TableRow> */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
                <NavFooter position="absolute" />
            </Box>
        </>
    );
}

export default History;
