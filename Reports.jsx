import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const Reports = () => (
    <Container>
        <Typography variant="h4" gutterBottom>Reports</Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography>Reports will appear here soon 📊</Typography>
        </Paper>
    </Container>
);

export default Reports;
