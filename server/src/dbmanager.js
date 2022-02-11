"use strict";

const mysql = require('promise-mysql');
const config = require('../config/db/databas.json');

let db;

/**
 * Main function.
 * @async
 * @returns void
 */
 (async function () {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

async function createAccount(email, fname, lname, password) {
    let sql = `CALL create_account(?, ?, ?, ?);`;

    await db.query(sql, [email, fname, lname, password]);

    let sql2 = `SELECT * FROM users WHERE email = ?;`

    let res = await db.query(sql2, [email]);
    console.log(res[0]);

    return res[0];
}
