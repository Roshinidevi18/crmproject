import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DealsChart = () => {
    // Sample data
    const data = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "Deals",
                data: [10, 20, 30, 40],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,  // ✅ Ensures proper rendering
    };

    // Styling for container
    const chartContainerStyle = {
        width: "100%",
        height: "300px",  // ✅ Ensures chart visibility
    };

    return (
        <div style={chartContainerStyle}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default DealsChart;
