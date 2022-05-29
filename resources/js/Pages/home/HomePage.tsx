import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chart from "react-apexcharts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

const HomePage = () => {
    const chart = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    "January", "February", "March", "April", "May", "June", "July", "August"
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    };

    return (
        <>
            <Typography variant="h4">
                Dashboard
            </Typography>
            <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12} sm={4}>
                    <Card style={{ backgroundColor: "rgb(20 184 166)" }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 25, color: "white" }}
                                gutterBottom
                            >
                                Most Selling product
                            </Typography>
                            <Typography
                                sx={{ fontSize: 35, color: "white" }}
                                gutterBottom
                                className="ml-5"
                            >
                                <AddShoppingCartOutlinedIcon fontSize="large" style={{ marginRight: "1rem" }}/>
                                LG Television
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card style={{ backgroundColor: "rgb(14 165 233)" }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 25, color: "white" }}
                                gutterBottom
                            >
                                Sales this month
                            </Typography>
                            <Typography
                                sx={{ fontSize: 35, color: "white" }}
                                gutterBottom
                                className="ml-5"
                            >
                                <CurrencyExchangeOutlinedIcon fontSize="large" />
                                195,870
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card style={{ backgroundColor: "rgb(244 63 94)" }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 25, color: "white" }}
                                gutterBottom
                            >
                                Expenses this month
                            </Typography>
                            <Typography
                                sx={{ fontSize: 35, color: "white" }}
                                gutterBottom
                                className="ml-5"
                            >
                                <RemoveShoppingCartOutlinedIcon fontSize="large" />
                                32,586
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 25 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Sales by month
                            </Typography>
                            <Chart
                                options={chart.options}
                                series={chart.series}
                                type="bar"
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className="bg-indigo-500 hover:bg-cyan-600">
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 25 }}
                                color="white"
                                gutterBottom
                            >
                                Sales Last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;