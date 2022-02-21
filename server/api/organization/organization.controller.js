/**
 * Organization Controller
 */
"use strict";
const {
    getAllOrganizations,
    getOneOrganizationById,
    createOrganization,
} = require("./organization.service");

module.exports = {
    /**
     * Get all organizations
     * @async
     * @param {Object} req request object
     * @param {Object} res response object
     */
    getAllOrganizations: async (req, res) => {
        let results = await getAllOrganizations();

        if (results) {
            return res.json({ success: 1, data: results });
        } else {
            return res.json({
                success: 0,
                message: "Database error.",
            });
        }
    },
    /**
     * Get One Organization ById.
     * @async
     * @param {Object} req request object
     * @param {Object} res response object
     */
    getOrganizationById: async (req, res) => {
        let results = await getOneOrganizationById(req.params.id);

        if (results) {
            return res.json({ success: 1, data: results });
        } else {
            return res.json({
                success: 0,
                message: "No records found.",
            });
        }
    },
    /**
     * Create an organization.
     * @async
     * @param {Object} req request object
     * @param {Object} res response object
     */
    createOrganization: async (req, res) => {
        const organization = req.body;

        await createOrganization(organization);

        return res.json({
            success: 1,
            message: "Added a new organization to the database",
        });
    },
};
