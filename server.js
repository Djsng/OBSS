const express=require('express');
const app=express();
require('dotenv').config()
const dbConfig = require("./config/dbConfig");
//const port=process.env.PORT || 3000;
app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingRoute");

app.use(express.json({ limit: '10mb' }));  // You can adjust the size as needed

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);
// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, () => console.log(Node server listening on port ${port}!));
