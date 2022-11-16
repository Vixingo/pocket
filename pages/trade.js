import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Nav_left from "../components/Nav_left";
import Trade_nav_right from "../components/Trade_nav_right";

function trade() {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Nav_left />
                <Trade_nav_right />
            </Box>
        </>
    );
}

export default trade;
