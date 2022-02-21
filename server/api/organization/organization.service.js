/**
 * Organization service
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
     * Gets all organizations.
     * @returns {Object} data object
     */
    getAllOrganizations: async () => {
        try {
            let sql = `CALL get_all_organizations();`;
            let res = await db.query(sql);

            return res[0];
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Gets an organization by organization id.
     * @param {Number} orgId organization id.
     * @returns {Object} data object.
     */
    getOneOrganizationById: async (orgId) => {
        try {
            let sql = `CALL get_one_organization(?);`;
            let res = await db.query(sql, [orgId]);

            return res[0];
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Adds a new ogranization to the database.
     * @param {Object} organization object
     */
    createOrganization: async (organization) => {
        try {
            let sql = `CALL create_organization(?, ?, ?, ?, ?, ?, ?, ?);`;

            await db.query(sql, [
                organization.orgNr,
                organization.name,
                organization.description,
                organization.logo,
                organization.banner,
                organization.colours,
                organization.membershipFee,
                organization.adminFee,
            ]);
        } catch (error) {
            console.log(error);
        }
    },
};
