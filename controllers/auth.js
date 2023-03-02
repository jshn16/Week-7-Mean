const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/user')

router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register' });
});

router.post('/register', (req, res) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password,(err,user)=>{

        if(err){
            res.redirect('/auth/register');
        }
        else{
            res.redirect('/employers');
        }

    })
})

router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login' });
});

module.exports = router;