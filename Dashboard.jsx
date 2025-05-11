import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Dashboard = () => {
  // Example chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 100, 150, 200, 250], // Replace with actual sales data
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Contacts</Typography>
              <Typography variant="h4">128</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#388e3c", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Open Deals</Typography>
              <Typography variant="h4">42</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#fbc02d", color: "#000" }}>
            <CardContent>
              <Typography variant="h6">Tasks Due</Typography>
              <Typography variant="h4">7</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#d32f2f", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">$52k</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Welcome Message */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
        <Typography>Welcome to your CRM Dashboard!</Typography>
      </Paper>

      {/* Sales Chart */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Sales Overview
        </Typography>
        <Bar data={chartData} />
      </Paper>

      {/* Recent Activity */}
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="📝 Added note to contact John Doe" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📞 Scheduled a call with Alice Smith" />
          </ListItem>
          <ListItem>
            <ListItemText primary="💼 Created a deal for ABC Corp" />
          </ListItem>
        </List>
      </Paper>

      {/* Divider between sections */}
      <Divider sx={{ margin: "20px 0" }} />

      {/* Upcoming Tasks */}
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Upcoming Tasks
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="📅 Call with Sarah Johnson - May 15" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔔 Follow up with ABC Corp on deal - May 16" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Dashboard;
