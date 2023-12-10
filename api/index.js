const express = require("express")
const mongoose = require("mongoose")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const app = express()
const PORT = 8000

const cors = require("cors")
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



const User = require("./models/user")
const Order = require("./models/order")



//Function to send Verification Email to the user
const sendVerificationEmail = async (email, verificationToken) => {
    //Create a nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service provider
        auth: {
            user: 'danhnc1302@gmail.com',
            pass: 'voxzwmkhammfilot'
        }
    })

    //Compose the email message
    const mailOptions = {
        from: "amazon.com",
        to: email,
        subject: "Email Verification",
        text: `Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken}`
    }

    //Send mail
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending verification email", error)
    }
}

// app.get("/register", async (req, res) => {

//     console.log(req.body)

//     console.log(res.body)
// })

//endpoint to register in the app
app.post("/register", async (req, res) => {
    try {

        console.log("Request", req.body)
        console.log("Responese", res.body)

      const { name, email, password } = req.body;
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("Email already registered:", email); // Debugging statement
        return res.status(400).json({ message: "Email already registered" });
      }
  
      // Create a new user
      const newUser = new User({ name, email, password });
  
      // Generate and store the verification token
      newUser.verificationToken = crypto.randomBytes(20).toString("hex");
  
      // Save the user to the database
      await newUser.save();
  
      // Debugging statement to verify data
      console.log("New User Registered:", newUser);
  
      // Send verification email to the user
      // Use your preferred email service or library to send the email
      sendVerificationEmail(newUser.email, newUser.verificationToken);
  
      res.status(201).json({
        message:
          "Registration successful. Please check your email for verification.",
      });
    } catch (error) {
      console.log("Error during registration:", error); // Debugging statement
      res.status(500).json({ message: "Registration failed" });
    }
  });

//endpoint to verify the email
//endpoint to verify the email
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        // Find the user with the given verification token
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" });
        }

        // Mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Email verification failed" });
    }
});

