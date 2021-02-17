import express from "express";
import cors from "cors";

const app = express();

const Todo = require("./routes/Todo");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", Todo);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
