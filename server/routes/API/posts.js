const express = require("express");
const dbmanager = require("../../src/dbmanager.js");
const router = express.Router();

const DBManager = require("../../src/dbmanager.js")


// ------------------------------ORGANIZATION ENDPOINT------------------------------------------------

// Get all organisations
router.get('/organization', (req, res) => {
    let data = {
        organizations = await DBManager.getAllOrganizations()
    };

    res.send(200).json({data: data.organizations});
});

// Get an organisation by id
router.get('/organization/:id', (req, res) => {
    let data = {
        organization = await DBManager.getOneOrganization(req.params.id)
    };
    
    res.send(200).json({data: data.organization});
});

// Add an organisation to db.
router.post('/organization', (req, res) => {
    
    await dbmanager.createOrganization(req.params.org_nr, req.params.name, req.params.description, req.params.logo, req.params.banner, req.params.colours, req.params.membership_fee, req.params.admin_fee);

    res.send(200).json;
});
// -------------------------------------------------------------------------------------------------


// -----------------------------------EVENT ENDPOINT------------------------------------------------
// List all events
router.get('/event', (req, res) => {
    let data = {
        events = await DBManager.getAllEvents()
    };

    res.send(200).json({data: data.events});
});

// List one event based on id
router.get('/event/:id', (req, res) => {
    let data = {
        event = await DBManager.getEvent(req.params.id)
    };

    res.send(200).json({data: data.event});
});


// Creates one event
router.post('/event', (req, res) => {
    let args = req.params;
    
    await DBManager.createEvent(args.orgId, args.name, args.price, args.description, args.picture, args.startDate, args.endDate, args.location, args.published, args.visibility)
    // If created status = ok
    // else status = error
    // {data: data.status}

    res.send(201).json();
});
// -------------------------------------------------------------------------------------------------

// -----------------------------------LOGIN ENDPOINT------------------------------------------------
router.post('/login', (req, res) => {
    let args = req.params;

    let data = {
        user = DBManager.login(args.email, args.password)
    }

    if(data.user.email){ // email and password was correct
        res.send(200).json({data: data.user});
    }
    else{ // email and password was not correct
        res.send(500).json;
    }

})

router.post('/register', (req, res) => {
    let args = req.params;
    let checkUser = DBManager.checkUser(args.email);

    if (!checkUser.email){ // if email doesn't exist
        let data = {
            user = DBManager.createAccount(args.first_name, args.last_name, args.email, args.password, args.adress)
        }

        if(data.user.email){ //success
            res.send(201).json({data: data.user});
        }
        else{ // couldn't create account
            res.send(500).json;
        }
    }
    else {
        res.send(500).json; // account email already exists
    }
})


// -----------------------------------Permission ENDPOINT------------------------------------------------
// List all permissions for a user in an org 
router.get('/permission', (req, res) => {
    let data = {
        // req.params probably doesn't have these variable as we dont have /permission:user_id...
        // So where do we get them from?
        permissions = await DBManager.getUserPermissions(req.params.user_id, req.params.org_id)
    };

    res.send(200).json({data: data.permissions});
});

// put? D:
router.put('/permissions', (req, res) => {
    let data = {
        event = await DBManager.getEvent(req.params.id)
    };

    res.send(200).json({data: data.event});
});


// Creates a new permission
router.post('/permissions', (req, res) => {
    let args = req.params;
    
    await DBManager.createEvent(args.orgId, args.name, args.price, args.description, args.picture, args.startDate, args.endDate, args.location, args.published, args.visibility)
    // If created status = ok
    // else status = error
    // {data: data.status}

    res.send(201).json();
});
// -------------------------------------------------------------------------------------------------

module.exports = router;