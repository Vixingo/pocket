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
                    <Link href="/registration">
                        <Button variant="outlined">registration</Button>
                    </Link>
                    <Link href="/password_recovery">
                        <Button variant="outlined">password recovery</Button>
                    </Link>
                    <Link href="/trade">
                        <Button variant="outlined">trade</Button>
                    </Link>
                    <br />
                    <br />
                    <h6>Last Update :</h6> <span>Amount input fixed ✅</span>
                </li>
            </ul>
        </>
    );
}
