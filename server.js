require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.Port || 5000

const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.get("/api", (req, res) =>{

   
    res.send("Villen webbsivu");

});

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");

   
  })
  .catch((error) => {
    console.log(error);
  });