const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes'); // Path to your movie routes

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

// Use movie routes with the '/api/movies' base URL
app.use('/api/movies', movieRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/moviesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
