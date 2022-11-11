import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/login">
                        <Button variant="outlined">Login</Button>
                    </Link>
                    <Link href="/forgot">
                        <Button variant="outlined">Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="outlined">Login</Button>
                    </Link>
                </li>
            </ul>
        </>
    );
}
