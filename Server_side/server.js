const express = require('express');
const connectDB = require('../Server_side/config/database')
const cors = require('cors');
require('dotenv').config();
const authRoute = require('./Routes/authRoutes')
const patientRoutes = require('./Routes/patients');
const Callrouter =require('./Routes/Call.Routes')

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json()); 



connectDB();

app.use('/auth' ,authRoute )
app.use('/api', patientRoutes);
app.use('/api', Callrouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  

