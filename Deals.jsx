import React from "react";
import { Container, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const deals = [
    { id: 1, client: "Company A", amount: "$5000" },
    { id: 2, client: "Company B", amount: "$8000" },
];

const Deals = () => (
    <Container>
        <Typography variant="h4" gutterBottom>Deals</Typography>
        <Paper elevation={3}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Client</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {deals.map(deal => (
                        <TableRow key={deal.id}>
                            <TableCell>{deal.client}</TableCell>
                            <TableCell>{deal.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    </Container>
);

export default Deals;
