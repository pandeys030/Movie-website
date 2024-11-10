// routes/myListRoutes.js
import express from "express";
import MyList from "../models/myList.js";

const router = express.Router();

// POST route to add a movie to My List
app.post('/', async (req, res) => {
  const { movieId, title } = req.body;

  // Check if the movie already exists in the user's list
  const existingMovie = await MovieList.findOne({ where: { movieId } });
  
  if (existingMovie) {
    return res.status(400).json({ message: 'Movie is already in your list.' });
  }

  // If not, add the movie to the list
  try {
    const newMovie = await MovieList.create({ movieId, title });
    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding movie to the list.' });
  }
});
// GET route to fetch all movies in My List
router.get("/", async (req, res) => {
  try {
    const moviesInList = await MyList.find(); // No populate here
    res.status(200).json(moviesInList);
  } catch (error) {
    console.error("Error fetching My List:", error);
    res.status(500).json({ message: "Failed to fetch My List" });
  }
});

// DELETE route to remove a movie from My List
router.delete('/:movieId', async (req, res) => {
  const { movieId } = req.params;
  try {
    const deletedMovie = await MyList.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found in your list" });
    }
    res.status(200).json({ message: "Movie removed from the list" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie" });
  }
});


export default router;
