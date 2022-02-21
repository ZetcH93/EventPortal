/**
 * Register service
 */
"use strict";

const mysql = require("promise-mysql");

let db;

/**
 * Main function.
 * @async
 * @returns void
 */
(async function () {
    db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        multipleStatements: true,
    });

    process.on("exit", () => {
        db.end();
    });
})();

module.exports = {
    /**
     * Gets a user by email.
     * @param {String} email
     */
    getUserByEmail: async (email) => {
        try {
            let sql = `CALL get_user_by_email(?)`;
            let res = await db.query(sql, [email]);

            return res[0][0];
        } catch (error) {
            throw new Error(error);
        }
    },
    /**
     * Adds a new user
     */
    createAccount: async (user) => {
        try {
            let sql = `CALL create_account(?, ?, ?, ?);`;

            await db.query(sql, [
                user.firstName,
                user.lastName,
                user.email,
                user.password,
            ]);
        } catch (error) {
            throw new Error(error);
        }
    },
};
