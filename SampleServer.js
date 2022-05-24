const hash = require("./hashage/hash");
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.json()); // pour supporter json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); //  pour supporter  encoded url

app.get('/', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "accueil.html");
});

app.get('/cryptage', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "site cryptage.html");
});

app.get('/captcha', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "captcha.html");
});

app.get('/ampoule', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "AllumerEteindre.html");
});
app.get('/utilisateur', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.sendFile(__dirname + "/pages/" + "accueilUtilisateur.html");
});


app.get('/listusers', function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "utilisateur",
    port: "8891"
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateur", function (err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.write("<table border='1px'><tbody><tr>Nom utlisateur</tr><tr>E-mail</tr><tbody>")
      for (var row in rows) {
        res.write("<tr><td>" + rows[row].username + "</td><td>"+rows[row].email+"</td></tr>");
      }
      res.end('</tbody></table>');
    });
  });
});
app.post('/newcontact', function (req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  var mdp = hash.hashSha256(new String(obj.password));
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "utilisateur",
    port: "8891"
  });

  con.connect(function (err) {
    if (err) throw err;
    var sql = mysql.format("INSERT INTO utilisateur (username, email,password) VALUES (?,?,?);", [obj.username, obj.mail, mdp]);
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