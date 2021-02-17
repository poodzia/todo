import express from "express";
import { pool } from "../database/db";

const router = express.Router();

// Create todo
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// Get all todo
router.get("/", async (_req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (error) {
    console.log(error);
  }
});

// Get a todo
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// Edit a todo
router.put("/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;

    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);

    res.json(`Todo with id of ${id} was updated`);
  } catch (error) {
    console.log(error);
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

    res.json(`Todo with id of ${id} was deleted`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
