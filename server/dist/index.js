"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const Todo = require("./routes/Todo");
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/todos", Todo);
app.listen(4000, () => {
    console.log("server started on port 4000");
});
//# sourceMappingURL=index.js.map