const mongoose = require("mongoose");

const callSchema = new mongoose.Schema({
  email: { type: String, required: true },
  number: { type: Number, required: true },
  message: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Call = mongoose.model("Call", callSchema);

module.exports = Call;
