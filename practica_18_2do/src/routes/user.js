const express = require("express");

const router = express.Router();

// crear usuario
router.post('/user', (req, res) => {
    res.send("crear usuario");
});


module.exports = router;