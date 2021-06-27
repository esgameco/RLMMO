var express = require('express');
var router = express.Router();

// Get number of cats
router.get('/cats', function(req, res, next) {
    res.json({
        'cats': 15
    });
});

module.exports = router;
