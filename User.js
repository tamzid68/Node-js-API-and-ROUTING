const express = require('express');
const router = express.Router();

router.get('/users/:id', (req, res)=>{
    const userId = req.params.id;
    const filter = req.query.filter;

    res.send(`User ID: ${userId}, Filter: ${filter}`);
});

module.exports = router;
