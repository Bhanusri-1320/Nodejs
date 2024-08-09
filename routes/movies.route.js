import express from "express";
import {
  getAllMoviesCtr,
  getMovieByIdCtr,
  deleteMovieCtr,
  createNewMovieCtr,
  updateMovieByIdCtr,
} from "../controller/movies.controller.js";

const router = express.Router();

router.route("/").get(getAllMoviesCtr).post(createNewMovieCtr);

router
  .route("/:id")
  .get(getMovieByIdCtr)
  .delete(deleteMovieCtr)
  .put(updateMovieByIdCtr);

export default router;
