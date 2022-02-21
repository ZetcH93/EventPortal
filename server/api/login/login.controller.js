/**
 * Login controller
 */
"use strict";
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { getUserByEmail } = require("./login.service");

module.exports = {
    /**
     * Login
     * @param {Object} req Request object.
     * @param {Object} res Response object.
     */
    login: async (req, res) => {
        const user = req.body;
        const results = await getUserByEmail(user.email);

        // check if the password in the database matches with the provided password.
        const validPassword = compareSync(user.password, results.password);

        if (validPassword) {
            const token = sign({ result: results }, process.env.JWT_SECRET);

            results.password = undefined;
            console.log(token);
            return res.status(200).json({
                success: 1,
                data: results,
                token: token,
            });
        } else {
            return res.status(204).json({
                success: 0,
                message: "Invalid email or password",
            });
        }
    },
};
