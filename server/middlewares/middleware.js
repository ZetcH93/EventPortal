/**
 * Middlewares
 */
"use strict";
const { verify } = require("jsonwebtoken");

module.exports = {
    /**
     * Validates JWT token
     * @param {Object} req Request object.
     * @param {Object} res Response object.
     * @param {Function} next Callback argument to the middleware function
     */
    validateToken: (req, res, next) => {
        let token = req.get("authorization");

        if (token) {
            // remove bearer text
            token = token.slice(7);
            verify(token, process.env.JWT_SECRET, (error) => {
                if (error) {
                    return res.json({
                        success: 0,
                        message: "Invalid token.",
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.json({
                success: 0,
                message: "Access Denied, unauthorized user.",
            });
        }
    },
};
