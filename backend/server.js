<<<<<<< HEAD
// server.js (or app.js)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true });

// Movie model
const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: String,
    description: String,
    releaseDate: Date,
    rating: Number,
    director: String,
    poster: String,
}));

// API endpoint to get movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
=======
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
>>>>>>> origin/master
});
