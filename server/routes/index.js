/*
File name: index.js
Author's name: Hae Yeon Kang (Lucy)
web site name: Hae Yeon's Portfolio Website
URL: haeyeonkang.azurewebsites.net
file description: This file will help visiters to navigate within the website.
*/

var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/index', { title: 'HAE YEON KANG' });
});

/* about me */
router.get('/about', function (req, res, next) {
    res.render('pages/about', { title: 'ABOUT ME' });
});

/* portfolio */
router.get('/portfolio', function (req, res, next) {
    res.render('pages/portfolio', { title: 'PORTFOLIO' });
});

/* services */
router.get('/services', function (req, res, next) {
    res.render('pages/services', { title: 'SERVICES' });
});

/* contact me */
router.get('/contact', function (req, res, next) {
    res.render('pages/contact', { title: 'CONTACT ME' });
});

/* send email request */
/* This code is sending email but at the same time, shows error on the page.

router.post('/contact', function (req, res) {
    //setup nodemailer transport
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "nodemailer.tester1@gmail.com",
            pass: "tester1234"
        }
    });

    //Fill mail options
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'nodemailer.tester1@gmail.com',
        subject: 'Email from Portfolio site',
        text: req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, info) {
        //if email is not sent
        if (error) {
            res.render('contact', {
                title: 'Contact',
                page: 'contact',
                type: 'error',
                description: 'Email has not been sent.'
            });
        }
        else {
            res.render('contact', {
                title: 'Contact',
                page: 'contact',
                type: 'success',
                description: 'email successfully sent!'
            });
        }
    });
});
*/
module.exports = router;
