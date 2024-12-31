const mongoose = require('mongoose');
require('dotenv').config({path:'app/.env'}); // Load .env at the top

console.log('✅ Environment Variable Loaded:', process.env.MONGO_URI); // Debug

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('❌ MONGO_URI is not defined in .env file');
        }

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;