const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML with Canvas Visual</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #eef2f3;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #34495e;
        }
        canvas {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

    <h1>Pie Chart Example</h1>
    <canvas id="pieChart" width="400" height="400"></canvas>

    <script>
        // Pie chart data
        const data = [
            { label: "Apples", value: 30, color: "#e74c3c" },
            { label: "Bananas", value: 20, color: "#f1c40f" },
            { label: "Cherries", value: 25, color: "#9b59b6" },
            { label: "Dates", value: 25, color: "#2ecc71" }
        ];

        const canvas = document.getElementById("pieChart");
        const ctx = canvas.getContext("2d");

        // Calculate total value
        const total = data.reduce((sum, item) => sum + item.value, 0);

        // Draw pie chart
        let startAngle = 0;
        data.forEach(item => {
            const sliceAngle = (item.value / total) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(200, 200); // center
            ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = item.color;
            ctx.fill();
            startAngle += sliceAngle;
        });

        // Draw labels
        ctx.font = "14px Arial";
        ctx.fillStyle = "#333";
        let legendY = 20;
        data.forEach(item => {
            ctx.fillStyle = item.color;
            ctx.fillRect(370, legendY, 15, 15);
            ctx.fillStyle = "#333";
            ctx.fillText(item.label + " (" + item.value + ")", 390, legendY + 12);
            legendY += 20;
        });
    </script>

</body>
</html>
`)
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})