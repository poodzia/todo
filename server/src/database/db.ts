const Pool = require("pg").Pool;

export const pool = new Pool({
  user: "kel",
  password: "Password1",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});
