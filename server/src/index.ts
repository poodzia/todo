import express from "express";
import cors from "cors";

const app = express();

const Todo = require("./routes/Todo");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", Todo);

app.listen(4000, () => {
  console.log("server started on port 4000");
});
