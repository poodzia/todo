"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const Pool = require("pg").Pool;
exports.pool = new Pool({
    user: "kel",
    password: "Password1",
    host: "localhost",
    port: 5432,
    database: "perntodo",
});
//# sourceMappingURL=db.js.map