var express = require('express');
var router = express.Router();

const Company = require("../faker_api/Company");

router.get('/', function(req, res, next) {
    res.send(new Company());
});

module.exports = router;