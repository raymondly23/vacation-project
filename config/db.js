'use strict'

var mysql = require('mysql')
var sql = require('sql')

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lebron23',
  database: 'vacation'
});

db.connect(function(err) {
  if(err) {
    console.log('Error', err);
  } else {
    console.log('Connection Success!')
  }
});

module.exports = db;