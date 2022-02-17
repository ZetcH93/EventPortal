const express = require("express");
const router = express.Router();

const DBManager = require("../../src/dbmanager.js");


// ------------------------------ORGANIZATION ENDPOINT----------------------------------------------

// Get all organisations
router.get('/organization', async (req, res) => {
    let data = {
        organizations: await DBManager.getAllOrganizations()
    };

    res.send(200).json({data: data.organizations});
});

// Get an organisation by id
router.get('/organization/:id', async (req, res) => {
    let data = {
        organization: await DBManager.getOneOrganization(req.params.id)
    };

    res.send(200).json({data: data.organization});
});

// Add an organisation to db.
router.post('/organization', async (req, res) => {
    await DBManager.createOrganization(req.params.org_nr,
        req.params.name,
        req.params.description,
        req.params.logo,
        req.params.banner,
        req.params.colours,
        req.params.membership_fee,
        req.params.admin_fee);

    res.send(200).json;
});
// -------------------------------------------------------------------------------------------------


// -----------------------------------EVENT ENDPOINT------------------------------------------------
// List all events
router.get('/event', async (req, res) => {
    let data = {
        events: await DBManager.getAllEvents()
    };

    res.send(200).json({data: data.events});
});

// List one event based on id
router.get('/event/:id', async (req, res) => {
    let data = {
        event: await DBManager.getEvent(req.params.id)
    };

    res.send(200).json({data: data.event});
});


// Creates one event
router.post('/event', async (req, res) => {
    let args = req.params;

    await DBManager.createEvent(args.orgId,
        args.name,
        args.price,
        args.description,
        args.picture,
        args.startDate,
        args.endDate,
        args.location,
        args.published,
        args.visibility);
    // If created status = ok
    // else status = error
    // {data: data.status}

    res.send(201).json();
});
// -------------------------------------------------------------------------------------------------

// -----------------------------------LOGIN ENDPOINT------------------------------------------------
router.post('/login', async (req, res) => {
    let args = req.params;

    let data = {
        user: await DBManager.login(args.email, args.password)
    };

    if (data.user.email) { // email and password was correct
        res.send(200).json({data: data.user});
    } else { // email and password was not correct
        res.send(500).json;
    }
});

router.post('/register', async (req, res) => {
    let args = req.params;
    let checkUser = DBManager.checkUser(args.email);

    if (!checkUser.email) { // if email doesn't exist
        let data = {
            user: await DBManager.createAccount(args.first_name,
                args.last_name,
                args.email,
                args.password,
                args.adress)
        };

        if (data.user.email) { //success
            res.send(201).json({data: data.user});
        } else { // couldn't create account
            res.send(500).json;
        }
    } else {
        res.send(500).json; // account email already exists
    }
});


// ---------------------------------Permission ENDPOINT----------------------------------------
// List all permissions for a user in an org
router.get('/permission', async (req, res) => {
    let data = {
        // req.params probably doesn't have these variable as we dont have /permission:user_id...
        // So where do we get them from?
        permissions: await DBManager.getUserPermissions(req.params.user_id, req.params.org_id)
    };

    res.send(200).json({data: data.permissions});
});


// _____WIP_____  also how does put  work
router.put('/permissions', async (req, res) => {
    let data = {
        permissions: await DBManager.xxxxx(req.params.id)
    };

    res.send(200).json({data: data.permissions});
});


// Creates a new permission _____WIP_____
router.post('/permissions', async (req, res) => {
    let args = req.params;

    await DBManager.xxxxx();
    // If created status = ok
    // else status = error
    // {data: data.status}

    res.send(201).json();
});
// -------------------------------------------------------------------------------------------------
// ---------------------------------MEMBERS ENDPOINT------------------------------------------------
// List all members for a user in an org 
router.get('/member', async (req, res) => {
    let data = {
        members: await DBManager.getOrgMembers(req.params.org_id)
    };

    res.send(200).json({data: data.members});
});


// put? D:
router.put('/permissions', async (req, res) => {
    let data = {
        event: await DBManager.getEvent(req.params.id)
    };

    res.send(200).json({data: data.event});
});


// Creates a new permission
router.post('/permissions', async (req, res) => {
    let args = req.params;

    await DBManager.createEvent(args.orgId,
        args.name,
        args.price,
        args.description,
        args.picture,
        args.startDate,
        args.endDate,
        args.location,
        args.published,
        args.visibility);
    // If created status = ok
    // else status = error
    // {data: data.status}

    res.send(201).json();
});
// -------------------------------------------------------------------------------------------------
module.exports = router;
