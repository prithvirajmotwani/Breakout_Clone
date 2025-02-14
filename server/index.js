import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { User } from "./Module/userModule.js";
import { Order } from "./Module/orderModule.js";    
import cors from 'cors';
import bcrypt from "bcrypt"; 

mongoose.connect("mongodb+srv://prithviraj:ntJbMroaPf7Mn5tI@calandar.csu8rjh.mongodb.net/breakout?retryWrites=true&w=majority&appName=calandar")
    .then((c) => {
        console.log(`Connected to ${c.connections[0].name} database`);
    }).catch((err) => {
        console.log(`Error connecting to database: ${err}`);
    });

const app = express();
const port = 3001;

app.use(bodyParser.json()); 
app.use(cors())

// Registration endpoint
app.post("/api/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }); 
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = new User({ firstName, lastName, email, password:hashedPassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
    }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ error: "Failed to log in" });
    }
});

// Order endpoint
app.post("/api/order", async (req, res) => {
    const { orderID, orderDate, orderTime, orderTotal, orderItems, orderAddress, orderUser } = req.body;
    
    try {
        const newOrder = new Order({
            orderID,
            orderDate,
            orderTime,
            orderTotal,
            orderItems,
            orderAddress,
            orderUser,
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully" });
    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ error: "Failed to place order" });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
