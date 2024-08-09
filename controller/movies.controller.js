import {
  getAllMovies,
  getMovieById,
  deleteMovie,
  createNewMovie,
  updateMovieById,
} from "../services/movies.service.js";
import { v4 as uuidv4 } from "uuid";

async function getAllMoviesCtr(request, response) {
  // response.send(movies);
  const allMovies = await getAllMovies();
  response.send(allMovies.data);
}

async function getMovieByIdCtr(request, response) {
  const { id } = request.params;
  const movie = await getMovieById(id);
  movie.data
    ? response.send(movie.data)
    : response.status(404).send({ msg: "Movie Not  Found" });
}

async function deleteMovieCtr(request, response) {
  const { id } = request.params;
  const movie = await deleteMovie(id);
  if (movie.data) {
    response.send({ msg: "Movie deleted 🎉", deletedMovie: movie.data });
  } else {
    response.status(404).send("No such Movie 🥲");
  }
}

async function createNewMovieCtr(req, res) {
  const data = req.body;
  const addMovie = {
    ...data,
    movieId: uuidv4(),
  };
  await createNewMovie(addMovie);
  console.log(addMovie);
  res.send(addMovie);
}

async function updateMovieByIdCtr(request, response) {
  const { id } = request.params;
  const existingData = await getMovieById(id);
  const updatedData = request.body;
  if (existingData.data) {
    const mergedData = await updateMovieById(existingData, updatedData);
    // console.log(mergedData.data);
    response.send(mergedData.data);
  } else {
    response.status(404).send("No such Movie 🥲");
  }
}

export {
  getAllMoviesCtr,
  getMovieByIdCtr,
  deleteMovieCtr,
  createNewMovieCtr,
  updateMovieByIdCtr,
};
