const express = require('express');
const bcrypt = require('bcrypt');
const userAuth = require('../Modules/auth.module');
const authRoute = express.Router();

// Register route
authRoute.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);
        
        const newUser = new userAuth({
            name,
            email,
            password: hashPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Failed to register' });
    }
});

// Login route
authRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userAuth.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
});

module.exports = authRoute;
