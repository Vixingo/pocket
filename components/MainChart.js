import React, { useState, useEffect } from "react";

import styles from "../styles/MainChart.module.css";

function MainChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/antfincdn/ZWgtj7pC%261/stock.json             "
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };
    const config = {
        appendPadding: [0, 10, 0, 0],
        data,
        xField: "trade_date",
        yField: ["open", "close", "high", "low"],
        slider: {},
        height: "100%",
    };

    return (
        <>
            <div className={styles.MainChart}>
                {/* <Stock {...config} /> */}
            </div>
        </>
    );
}

export default MainChart;
