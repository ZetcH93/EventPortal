/**
 * Permissions route
 */
"use strict";

const router = require("express").Router();
const { validateToken } = require("../../middlewares/middleware");

const {
    getUserPermissions,
    /* createPermission,
    updateUserPermission,
    deletePermission, */
} = require("./permissions.service");

// List all permissions for a user in an org
router.get("/", validateToken, getUserPermissions);

// _____WIP_____  also how does put  work
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT

// TODO:
// Create a new permission
/* router.post("", createPermission); */

// TODO:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
// Update permission
/* router.patch("", updateUserPermission);
 */
// TODO:
// mark permission deleted
/* router.delete("", deletePermission); */

module.exports = router;
