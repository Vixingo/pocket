import React, { useState, useEffect } from "react";
import { Plot, Stock } from "@ant-design/plots";
import styles from "../styles/MainChart.module.css";
import { Box } from "@mui/material";
import ChartSetting from "./ChartSetting";

function MainChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json"
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };
    const config = {
        data,

        xField: "trade_date",
        yField: ["open", "close", "high", "low"],
        meta: {
            vol: {
                alias: "成交量",
            },
            open: {
                alias: "开盘价",
            },
            close: {
                alias: "收盘价",
            },
            high: {
                alias: "最高价",
            },
            low: {
                alias: "最低价",
            },
        },
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: "#ededed",
                        lineWidth: 1,
                        lineDash: [0, 0],
                        strokeOpacity: 0.1,
                        shadowColor: "black",
                        shadowBlur: 10,
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                        cursor: "pointer",
                    },
                },
            },
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: "#ededed",
                        lineWidth: 1,
                        lineDash: [0, 0],
                        strokeOpacity: 0.1,
                        shadowColor: "black",
                        shadowBlur: 10,
                        shadowOffsetX: 5,
                        shadowOffsetY: 5,
                        cursor: "pointer",
                    },
                },
            },
        },
        tooltip: {
            showContent: false,
            crosshairs: {
                // 自定义 crosshairs line 样式
                line: {
                    style: {
                        lineWidth: 0.5,
                        stroke: "rgba(0,0,0,0.25)",
                    },
                },
                text: (type, defaultContent, items) => {
                    let textContent;

                    if (type === "x") {
                        const item = items[0];
                        textContent = item ? item.title : defaultContent;
                    } else {
                        textContent = `${defaultContent.toFixed(2)}`;
                    }

                    return {
                        position: type === "y" ? "start" : "end",
                        content: textContent,
                        // 自定义 crosshairs text 样式
                        style: {
                            fill: "#dfdfdf",
                        },
                    };
                },
                // 自定义 crosshairs textBackground 样式
                textBackground: {
                    padding: [4, 8],
                    style: {
                        fill: "#363636",
                    },
                },
            },
        },
    };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#181A20",
                    width: "100%",
                    marginRight: "250px",
                    height: "calc(100vh - 101px)",
                    position: "relative",
                }}
            >
                <ChartSetting />

                <Stock {...config} />
            </Box>
        </>
    );
}

export default MainChart;
