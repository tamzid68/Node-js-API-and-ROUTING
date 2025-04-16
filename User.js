const express = require('express');
const router = express.Router();

router.get('/users/:id', (req, res)=>{
    const userId = req.params.id;
    const filter = req.query.filter;

    res.send(`User ID: ${userId}, Filter: ${filter}`);
});

router.post('/users',(req,res)=>{
    const {name, age} = req.body;

    if(!name || !age)
        return res.status(400).send("Name or age are required");
    
    res.status(201).json(`User ${name} with age ${age} created`);
})

module.exports = router;
