/**
 * Organizations route
 */
"use strict";

const {
    getAllOrganizations,
    getOrganizationById,
    createOrganization,
} = require("./organization.controller");

const { validateToken } = require("../../middlewares/middleware");

const router = require("express").Router();

// Get all organizations.
router.get("/", validateToken, getAllOrganizations);

// Get an organization by organization id.
router.get("/:id", validateToken, getOrganizationById);

// Create an organization.
router.post("/", validateToken, createOrganization);

module.exports = router;
