var http = require('http');
var mysql = require('mysql');
var express = require('express');
var ejs = require('ejs');
var cors = require('cors');

var app = express();

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "user1234",
  database: "devWeb_Project_Bdd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

app.get('/api/:table', function(req, res){
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  con.query("select * from " + req.params.table, function(err, results){
    if (err){
      res.send(err);
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/api/:table/id/:id', function(req, res){
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  con.query("select * from " + req.params.table + " where idPoint =  " + req.params.id, function(err, results){
    if (err){
      res.send(err);
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/api/points/categorie/:categorie', function(req, res){
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  con.query("select * from points, categoriesPoints, categories  where idPointCP = idPoint AND idCategorieCP = idCategorie AND nameCategorie =  '" + req.params.categorie + "';", function(err, results){
    if (err){
      res.send(err);
    }
    res.send(JSON.stringify(results));
  });
});

app.listen(8080);
