const express = require('express');
const router = express.Router();

//OOP
class User {
    constructor({ name, age, address }) {
        this.name = name;
        this.age = age;
        this.location = address;
    }
}



router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const filter = req.query.filter;

    res.send(`User ID: ${userId}, Filter: ${filter}`);
});

router.post('/users', (req, res) => {
    const user = new User(req.body);
    //console.log(req);

    // if(!name || !age)
    //     return res.status(400).send("Name or age are required");

    res.status(201).json({
        message: "User created successfully",
        user: user
    });
})

module.exports = router;
