const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// const jobRoutes = require('./routes/jobRoutes');
const {getAllJobs} = require('./controllers/job.controller')
require('dotenv').config();
const { swaggerUi, swaggerSpec } = require('./config/swagger');

const jobRoutes = require('./routes/job.route');
const authRoutes = require('./routes/auth.route');
const compRoutes = require('./routes/company.route');
const reqRoutes = require('./routes/request.route');


const app = express();
app.use(cors({
    origin: 'http://localhost:4200', // Allow Angular frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
connectDB();

app.use('/job', jobRoutes);
app.use('/auth',authRoutes)
app.use('/company',compRoutes)
app.use('/request',reqRoutes)
// Routes
// app.use('/api/jobs', jobRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
