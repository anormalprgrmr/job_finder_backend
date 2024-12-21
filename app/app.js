const express = require('express');
const connectDB = require('./config/db');
// const jobRoutes = require('./routes/jobRoutes');
const {getAllJobs} = require('./controllers/job.controller')
require('dotenv').config();

const jobRoutes = require('./routes/job.route');

const app = express();
app.use(express.json());

// Database Connection
connectDB();

app.use('/job', jobRoutes);
// Routes
// app.use('/api/jobs', jobRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
