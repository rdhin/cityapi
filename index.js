const express = require('express');
const app = express();
const port = 4000;

// Controller 1: Weather
app.get('/api/v1/weather', (req, res) => {
    res.json({ status: "success", temp: "72F", condition: "Partly Cloudy", city: "Old Bridge" });
});

// Controller 2: Traffic
app.get('/api/v1/traffic', (req, res) => {
    res.json({ status: "success", congestion_level: "Medium", incidents: 0, delay_minutes: 5 });
});

app.listen(port, () => console.log(`API App listening at http://localhost:${port}`));
