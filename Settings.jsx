import React from "react";
import { Container, Typography, Paper, TextField, Button, Stack } from "@mui/material";

const Settings = () => (
    <Container>
        <Typography variant="h4" gutterBottom>Settings</Typography>
        <Paper elevation={3} sx={{ padding: 3 }}>
            <Stack spacing={2}>
                <TextField label="Username" defaultValue="johndoe" fullWidth />
                <TextField label="Email" defaultValue="john@example.com" fullWidth />
                <Button variant="contained" color="primary">Save Settings</Button>
            </Stack>
        </Paper>
    </Container>
);

export default Settings;
