/**
 * Register controller
 */
"use strict";

const { getUserByEmail, createAccount } = require("./register.service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
    /**
     * Register account.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    registerAccount: async (req, res) => {
        const user = req.body;
        let checkEmail = await getUserByEmail(req.body.email);

        if (!checkEmail) {
            // generate salt 10 rounds.
            const salt = genSaltSync(10);

            // hash the user password
            user.password = hashSync(user.password, salt);

            await createAccount(user);

            return res.status(200).json({
                success: 1,
                message: "Registered a new user successfully.",
            });
        } else {
            return res.json({
                success: 0,
                message: "A user with that email exists already.",
            });
        }
    },
};
