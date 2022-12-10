import { useRouter } from "next/router";
import { Box } from "@mui/material";
import FinanceHeader from "../../components/FinanceHeader";
import Navbar from "../../components/Navbar";
import Nav_left from "../../components/Nav_left";

function SubFinance() {
    const router = useRouter();
    const pageName = router.query.id;
    return (
        <>
            <Box
                component={"div"}
                sx={{ overflow: "hidden", background: "#181a20" }}
            >
                <Navbar />
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Nav_left />
                    <FinanceHeader />
                </Box>
            </Box>
        </>
    );
}

export default SubFinance;
