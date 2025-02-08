const express = require("express");
const Callrouter = express.Router();
const Call = require('../Modules/Call.modules')


Callrouter.post('/add', async (req, res) => {
  try {
    const { email, number, message, date, time } = req.body;

    if (!email || !number || !message || !date || !time) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newCall = new Call({
      email,
      number,
      message,
      date,
      time,
    });

    await newCall.save();
    res.status(201).json({ message: "Call request saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = Callrouter;
