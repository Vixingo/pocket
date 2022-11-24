import { useRouter } from "next/router";
import { Box } from "@mui/material";
import FinanceHeader from "../../components/FinanceHeader";
import Navbar from "../../components/Navbar";
import Nav_left from "../../components/Nav_left";

function subFinance() {
    const router = useRouter();
    const pageName = router.query.id;
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Nav_left />
                <FinanceHeader />
            </Box>
        </>
    );
}

export default subFinance;
