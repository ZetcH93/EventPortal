"use strict";

module.exports = {
    getTenEvents: getTenEvents,
    getAllEvents: getAllEvents,
    getOneEvent: getOneEvent,
    createEvent: createEvent,
    getAllOrganizations: getAllOrganizations,
    getOneOrganization: getOneOrganization,
    createOrganization: createOrganization,
    login: login,
    checkUser: checkUser,
    createAccount: createAccount,
    getUserPermissions: getUserPermissions,
    getOrgMembers: getOrgMembers
};

const mysql = require('promise-mysql');
const config = require('../config/db/databas.json');

let db;

/**
 * Main function.
 * @async
 * @returns void
 */
(async function () {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();


// -------------------------------------------------------------------------------------------------
// ----------------------------------------EVENT ENDPOINT-------------------------------------------
/*
* Gets ten events from current date and one month forward.
*/
async function getTenEvents() {
    let sql = `CALL get_ten_events();`;

    let res = await db.query(sql);

    return res[0];
}

/*
* Gets all events
*/
async function getAllEvents() {
    let sql = `CALL get_all_events();`;

    let res = await db.query(sql);

    return res[0];
}

/*
* Gets one organization based on id
*/
async function getOneEvent(id) {
    let sql = `CALL get_one_event(?);`;

    let res = await db.query(sql, [id]);

    return res[0];
}

/*
* Creates a new Event
*/
async function createEvent(
    orgId,
    name,
    price,
    description,
    picture,
    startDate,
    endDate,
    location,
    published,
    visibility) {
    let sql = `CALL create_event(?,?,?,?,?,?,?,?,?,?);`;

    await db.query(sql, [orgId,
        name,
        price,
        description,
        picture,
        startDate,
        endDate,
        location,
        published,
        visibility]);
}
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------
// ----------------------------------------ORGANIZATION ENDPOINT------------------------------------
/*
* Gets all organizations in the database
*/
async function getAllOrganizations() {
    let sql = `CALL get_all_organizations();`;

    let res = await db.query(sql);

    return res[0];
}

/*
* Gets one organization based on id
*/
async function getOneOrganization(organization) {
    let sql = `CALL get_one_organization(?);`;

    let res = await db.query(sql, [organization]);

    return res[0];
}

/*
* Creates a new organization
*/
async function createOrganization(orgNr,
    name,
    description,
    logo,
    banner,
    colours,
    membershipFee,
    adminFee) {
    let sql = `CALL create_organization(?, ?, ?, ?, ?, ?, ?, ?);`;

    await db.query(sql, [orgNr, name, description, logo, banner, colours, membershipFee, adminFee]);
}
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
// -------------------------------------------USER ENDPOINT-----------------------------------------
/*
* Checks if email and password checks out
*/
async function login(email, password) {
    let sql = `CALL login(?, ?);`;
    let res = await db.query(sql, [email, password]);

    return res[0];
}

/*
* Checks if the user exists in DB, only SELECTS email
*/
async function checkUser(email) {
    let sql = `SELECT email FROM users WHERE email = ?;`;
    let res = await db.query(sql, [email]);

    return res[0];
}

//
// Kan använda denna senare
//
async function createAccount(fname, lname, email, password, phoneNr, adress, accessToken) {
    let sql = `CALL create_account(?, ?, ?, ?, ?, ?, ?);`;

    await db.query(sql, [fname, lname, email, password, phoneNr, adress, accessToken]);

    let sql2 = `SELECT * FROM users WHERE email = ?;`;

    let res = await db.query(sql2, [email]);
    // console.log(res[0]);

    return res[0];
}

// -------------------------------------------------------------------------------------------------
// ----------------------------------------PERMISSION ENDPOINT--------------------------------------
/*
* Gets all the permissions from a user in an organization
*/
async function getUserPermissions(userId, orgId) {
    let sql = `CALL get_user_permissions(?, ?);`;

    let res = await db.query(sql, [userId, orgId]);

    return res[0];
}


// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------
// ----------------------------------------MEMBER ENDPOINT------------------------------------------

async function getOrgMembers(orgId) {
    let sql = `CALL get_org_members(?);`;

    let res = await db.query(sql, [orgId]);

    return res[0];
}



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------