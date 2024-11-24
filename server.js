const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");

// Middleware
app.use(express.json({ limit: '10mb' }));

// Routes
const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);

// Export the app for Vercel
module.exports = app;
