// Server Character Router
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Character = require('../models/characters');

router.get('/', function(req, res) {
  Character.find({}, function(err, characters) {
    if(err) {return handleError(err);}
    res.send(characters);
  });
});

router.post('/', function(req, res) {
  var currentTime = Date.now();

  req.body.lastEdited = currentTime;
  req.body.dateCreated = currentTime;

  var character = new Character();

  Character.create(req.body, function(err, data) {
    if (err) {return handleError(err);}
    res.send(data);
  });
});

router.put('/', function(req, res, next) {

});

router.delete('/', function(req, res, next) {

});

module.exports = router;
