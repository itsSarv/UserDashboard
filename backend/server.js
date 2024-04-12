require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const DB_URL = process.env.URL

const userRouter = require("./routes/userRoute");

app.use(express.json());

//database connection
connected = mongoose.connect(DB_URL).then(()=>{
    console.log("Database Connected...")
})


//port
app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`)
})

app.use(userRouter);