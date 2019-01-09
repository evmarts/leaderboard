const local = {
  client: "pg",
  connection: {
    host: "localhost",
    database: "acc1"
  }
};

const options =
  process.env.NODE_ENV === "production"
    ? {
        client: "pg",
        connection: process.env.DATABASE_URL,
        searchPath: ["public"]
      }
    : local;

const knex = require("knex")(options);

// TODO add front-end
module.exports = knex;
