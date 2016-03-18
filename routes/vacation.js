'use strict'

var express = require('express');
var router = express.Router();

var db = require('../config/db');

router.get('/', function(req, res, next) {

  db.query('select * from vacation', function(err, vacations) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(vacations);
  });
});


router.get("/:id", function(req, res, next) {
  db.query('select * from vacation where id = ?', req.params.id, function(err, vacation) {
    res.send(vacation);
  })
});


router.post('/vacations', function(req, res) {

  db.query('insert into vacation set ?', req.body, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  var updatedObj = req.body;
  db.query('update vacation set ? where id = ?', [req.body, id], function(err, result) {
    if(err) {
      res.status(400).send(err);
      return
    }
    res.send(result)
  });
})

router.delete('/:id', function(req, res) {
  console.log('back end');
  db.query('delete from vacation where id = ?', [req.params.id], function(err, results) {
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(results);
  })
})

module.exports = router;