const express = require('express');

const router = express.Router();

let data = {};



router.get('/',(req,res,next) => {
    console.log('/user get 와쓰!');
    res.locals.user = data;
    res.json(res.locals.user);

})

router.post('/',(req,res,next) => {
    console.log('/user post 와쓰!');
     data = {
        name: req.body.name,
        age: req.body.age,
        married: req.body.married
    };
    console.log(data);
    res.status(201).json(data);
})

module.exports = router;