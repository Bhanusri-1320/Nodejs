import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter
import { client } from "../util/dbconnection.js";

const Movies = new Entity(
  {
    model: {
      entity: "Movies",
      version: "1",
      service: "MovieService",
    },
    attributes: {
      movieId: {
        type: "string",
      },
      name: {
        type: "string",
        required: true,
      },
      poster: {
        type: "string",
      },
      trailer: {
        type: "string",
      },
      rating: {
        type: "number",
      },
      summary: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["movieId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "Movie" }
);

export { Movies };
