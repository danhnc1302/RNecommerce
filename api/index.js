const express = require("express")
const mongoose = require("mongoose")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://danhnc1302:danh@cluster0.1dd60po.mongodb.net/")
.then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB",err)
})

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT)   
})