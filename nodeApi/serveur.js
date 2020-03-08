var http = require('http');
var mysql = require('mysql');
var express = require('express');

var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "user1234",
  database: "devWeb_Project_Bdd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from point", function(err, results, fields){
    if (err) throw err;
    console.log(results);
  });
});

var html = function(results){
  var tableau = "<table>";
  tableau += "<tr>";
  for (var a in results[0]) {
    tableau += "<td>" + a + "</td>";
  }
  tableau += "</tr>";
  for (var obj of results){
    tableau += "<tr>";
    for (var a in obj) {
      tableau += "<td>" + obj[a] + "</td>";
    }
    tableau += "</tr>";
  }
  tableau += "</tableau";
  return tableau;
};

app.get('/api/points', function(req, res){
  con.query("select * from point", function(err, results){
    if (err){
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send("<h1>Wrong url Parameters</h1>")
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(results));
  });
});

app.get('/api/caracteristiques', function(req, res){
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  con.query("select * from caracteristique", function(err, results){
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

app.get('/api/photos', function(req, res){
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  con.query("select fichierPhotos from Photos", function(err, results){
    if (err) throw err;
    res.send(results);
  });
});

app.listen(8080);
