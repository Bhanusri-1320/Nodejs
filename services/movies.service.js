import { Movies } from "../entities/movies.entity.js";

async function updateMovieById(existingData, updatedData) {
  return Movies.put({
    ...existingData.data,
    ...updatedData,
  }).go();
}

async function deleteMovie(id) {
  return Movies.delete({
    movieId: id,
  }).go();
}

async function createNewMovie(addMovie) {
  return Movies.create(addMovie).go();
}

async function getMovieById(id) {
  return await Movies.get({
    movieId: id,
  }).go();
}

async function getAllMovies() {
  return Movies.scan.go();
}

export {
  updateMovieById,
  deleteMovie,
  createNewMovie,
  getMovieById,
  getAllMovies,
};
