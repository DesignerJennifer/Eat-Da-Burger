var express = require("express");
var burgers = require("../models/burger.js")

//create router and export at end of file
var router = express.Router();

// show (read) the burgers in the database
router.get("/", function(req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add burger to the database (create the burger database)
router.post("/api/burgers", function (req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        //show data in handelbars
        res.json({ id: result.insertID });
    });
});

// devour is set to true (update)
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id =" + req.params.id;
    console.log("condition", condition);

    burgers.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;