var express = require('express');
var router = express.Router();

const User = require("../faker_api/User");

router.get('/', function(req, res, next) {
    res.send(new User());
});

module.exports = router;