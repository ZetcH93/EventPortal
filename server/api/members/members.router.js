/**
 * Members route
 */
"use strict";

const router = require("express").Router();
const {
    getAllMemmbersByOrgId,
    getMemberById,
    addMember,
} = require("./members.controller");
const { validateToken } = require("../../middlewares/middleware");

// Get all members by organization id
router.get("/:orgId", validateToken, getAllMemmbersByOrgId);

// FIXME: get one member procedure
// Get member by member id
router.get("/member/:memberId", validateToken, getMemberById);

// TODO: implement add member procedure
// Adds a member to an organization.
router.post("/", validateToken, addMember);

module.exports = router;
