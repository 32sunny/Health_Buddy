const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}
 
module.exports = connectDB
 