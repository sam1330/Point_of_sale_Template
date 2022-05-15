import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chart from "react-apexcharts";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HomePage = () => {
    const chart = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
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
            <h1>Dashboard</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Most Selling products
                            </Typography>
                            <Chart
                                options={chart.options}
                                series={chart.series}
                                type="bar"
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;