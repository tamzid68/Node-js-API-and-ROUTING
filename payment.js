const express = require('express');
const router = express.Router();

router.get('/users/:id/payment', (req, res) => {
    const paymentId = req.params.id;
    const filter = req.query.filter;

    console.log("Payment Done...");
    res.send(`Payment ID: ${paymentId}, Filter: ${filter}`);
});

module.exports = router;