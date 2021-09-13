const express = require('express');

const route = express.Router();

route.get('/',(req,res,next) => {
    try{
        console.log('/ 호출!');
        res.render('index.html');

    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = route;