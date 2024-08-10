import express from "express";
import cors from "cors";
const app = express();
import moviesRouter from "./routes/movies.route.js";

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

console.log("hi");

app.get("/", function (request, response) {
  response.send("Hello 🙋, 🌏 🎊✨🤩");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
