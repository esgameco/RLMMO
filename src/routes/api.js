var express = require('express');
var router = express.Router();

// GET number of cats
router.get('/cats', (req, res) => {
    res.json({
        'cats': 15
    });
});

// POST plus 2
router.post('/plustwo', (req, res) => {
    res.json({
        'num': parseInt(req.body.num, 10) + 2
    });
});

module.exports = router;
