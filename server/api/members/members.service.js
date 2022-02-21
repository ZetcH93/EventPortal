/**
 * Members service
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
     * Gets all members by organization id.
     * @param {Number} orgId organization id.
     */
    getAllMemmbersByOrgId: async (orgId) => {
        let sql = `CALL get_org_members(?);`;

        let res = await db.query(sql, [orgId]);

        return res[0];
    },
    /**
     * // FIXME: get_one_member procedure
     * Gets one member by member id.
     * @param {Number} id member id.
     */
    getMemberById: async (id) => {
        try {
            let sql = `CALL get_one_member(?);`;

            let res = await db.query(sql, [id]);

            return res[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    /**
     * // TODO: add member procedure
     * Adds a new member.
     */
    addMember: async () => {},
};
