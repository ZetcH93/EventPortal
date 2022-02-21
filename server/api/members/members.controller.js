/**
 * Members Controller
 *
 */
"use strict";

const { getAllMemmbersByOrgId, getMemberById } = require("./members.service");

module.exports = {
    /**
     * Get all members of an organization.
     * @async
     * @param {*} req
     * @param {*} res
     * @returns
     */
    getAllMemmbersByOrgId: async (req, res) => {
        let results = await getAllMemmbersByOrgId(req.params.orgId);

        return res.status(200).json({ success: 1, data: results });
    },
    /**
     * // FIXME: get one member procedure
     * Gets one member by id.
     * @async
     * @param {Object} req Request object.
     * @param {Object} res Response object.
     */
    getMemberById: async (req, res) => {
        console.log(req.params);
        let results = await getMemberById(req.params.orgId);

        return res.status(200).json({ success: 1, data: results });
    },
    /**
     * // TODO: implement add member procedure
     * Add member
     * @async
     * @param {*} req
     * @param {*} res
     */
    addMember: async (req, res) => {
        console.log(req.body);
    },
};
