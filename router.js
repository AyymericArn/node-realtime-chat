const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Registration = mongoose.model('Registration');

router.get('/', (req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', {
                registrations
            })
        })
})

router.post('/', (req, res) => {
    const newMessage = req.body;
    const registration = new Registration(newMessage);
    registration.save()
    .then(() => {
        Registration.find()
        .then((registrations) => {
            res.render('index', {
                registrations
            })
        })
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
    
})

module.exports = router;