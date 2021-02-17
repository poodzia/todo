"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../database/db");
const router = express_1.default.Router();
router.post("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        const newTodo = yield db_1.pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/todos", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield db_1.pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield db_1.pool.query("SELECT * FROM todo WHERE todo_id = $1", [
            id,
        ]);
        res.json(todo.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
}));
router.put("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        const { id } = req.params;
        yield db_1.pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
            description,
            id,
        ]);
        res.json(`Todo with id of ${id} was updated`);
    }
    catch (error) {
        console.log(error);
    }
}));
router.delete("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json(`Todo with id of ${id} was deleted`);
    }
    catch (error) {
        console.log(error);
    }
}));
module.exports = router;
//# sourceMappingURL=todo.js.map