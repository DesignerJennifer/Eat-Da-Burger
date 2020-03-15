var express = require("express");
var express = require("../models/burger.js")

var router = express.Router();

// show (read) the burgers in the database
router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("indext", burgerObject);
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

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");