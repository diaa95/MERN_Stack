var express = require('express');
var router = express.Router();

const User = require("../faker_api/User");
const Company = require("../faker_api/Company");

router.get('/', function(req, res, next) {
    res.json([new User(), new Company()]);
});

module.exports = router;