const hash = require("./hashage/hash");
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
app.use(bodyParser.json()); // pour supporter json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); //  pour supporter  encoded url

app.get('/', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "accueil.html");
});

app.get('/artiste', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/forms/" + "artisteInscription.html");
});

/*app.post('/newArtiste', function (req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "captchadb",
        port: "8891"
      });
      con.connect(function (err) {
        if (err) throw err;
        con.query("INSERT INTO Utilisateur", function (err, rows, fields) {
          if (err) throw err;
          res.json(rows);
        });
      });
  });*/

app.post('/generateToken',function(req,res){ 
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "captchadb",
    port: "8891"
  });
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  var mdp = hash.hashSha256(new String(obj.pwd));
  console.log(mdp);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "captchadb",
    port: "8891"
  });

  con.connect(function (err) {
    if (err) throw err;
    var sql = mysql.format("SELECT * from Utilisateur where nomU = ? AND username = ? AND pwd = ?;", [obj.nomU, obj.username, mdp]);
    con.query(sql, function (err,rows,fields) {
      if (err) throw err;
      console.log(process.env.ACCESS_TOKEN_SECRET);
      res.json(jwt.sign(rows, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}));
    });
  });
});

app.get('/listartiste', function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "captchadb",
    port: "8891"
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateur", function (err, rows, fields) {
      if (err) throw err;
      res.json(rows);
    });
  });
});
app.post('/newArtiste', function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  var mdp = hash.hashSha256(new String(obj.password));
  console.log(mdp);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "captchadb",
    port: "8891"
  });

  con.connect(function (err) {
    if (err) throw err;
    var sql = mysql.format("INSERT INTO Utilisateur(nomU, username,pwd) VALUES (?,?,?);", [obj.nomU, obj.username, mdp]);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  res.status(200).end('Contact créé');
});

app.use(express.static('forms'));
app.use('/static', express.static('public'));


app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(404).send('Lieu inconnu :' + req.originalUrl);
});

app.listen(8080);