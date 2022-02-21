/**
 * Permissions service
 *
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
     * Gets a users permissionss
     * @param {Number} userId
     * @param {Number} orgId
     * @returns {Object} results.
     */
    getUserPermissions: async (userId, orgId) => {
        try {
            let sql = `CALL get_user_permissions(?, ?);`;

            let res = await db.query(sql, [userId, orgId]);

            return res[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    /**
     * TODO: implment
     * Updates a users permissions
     * @param {Number} userId users id
     * @param {Number} orgId organization id
     */
    updateUserPermission: async (userId, orgId) => {},
    /**
     * TODO: implment
     * Creates a new user permissions
     * @param {Number} userId users id
     * @param {Number} orgId organization id
     */
    createPermission: async (userId, orgId) => {},
    /**
     * TODO: implment
     * Marks permission deleted.
     * @param {Number} userId users id
     * @param {Number} orgId organization id
     */
    deletePermission: async (userId, orgId) => {},
};
