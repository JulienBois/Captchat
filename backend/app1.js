const hash = require("./hashage/hash");
const path = require('path');
const fs = require('fs');

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

// app.get('/', function (req, res) {
//   res.setHeader("Content-Type", "text/html; charset=utf-8");
//   res.sendFile(__dirname + "/pages/" + "accueil.html");
// });

// app.get('/artiste', function (req, res) {
//   res.setHeader("Content-Type", "text/html; charset=utf-8");
//   res.sendFile(__dirname + "/forms/" + "artisteInscription.html");
// });

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

// app.post('/generateToken',function(req,res){ 
//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "captchadb",
//     port: "8891"
//   });
//   obj = JSON.parse(JSON.stringify(req.body, null, "  "));
//   var mdp = hash.hashSha256(new String(obj.pwd));
//   console.log(mdp);
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "captchadb",
//     port: "8891"
//   });

//   con.connect(function (err) {
//     if (err) throw err;
//     var sql = mysql.format("SELECT * from Utilisateur where nomU = ? AND username = ? AND pwd = ?;", [obj.nomU, obj.username, mdp]);
//     con.query(sql, function (err,rows,fields) {
//       if (err) throw err;
//       console.log(process.env.ACCESS_TOKEN_SECRET);
//       res.json(jwt.sign(rows, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}));
//     });
//   });
// });

// app.get('/listartiste', function (req, res) {
//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "captchadb",
//     port: "8891"
//   });
//   con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM utilisateur", function (err, rows, fields) {
//       if (err) throw err;
//       res.json(rows);
//     });
//   });
// });
// app.post('/newArtiste', function (req, res) {
//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   obj = JSON.parse(JSON.stringify(req.body, null, "  "));
//   var mdp = hash.hashSha256(new String(obj.password));
//   console.log(mdp);
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "captchadb",
//     port: "8891"
//   });

//   con.connect(function (err) {
//     if (err) throw err;
//     var sql = mysql.format("INSERT INTO Utilisateur(nomU, username,pwd) VALUES (?,?,?);", [obj.nomU, obj.username, mdp]);
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });
//   res.status(200).end('Contact créé');
// });

// app.use(express.static('forms'));
app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

var timer = 30;

app.get('/captcha', (req, res) => {
  // Random a question/indice
  const rndInt = Math.floor(Math.random() * 14) + 1
  console.log("rand", rndInt)

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "captchadb",
    port: "8889"
  });

  // Select the random question/indice, then generate a set of random neutre images
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT Q.idQuestion, Q.idImageSinguliere, Q.indice, I.nomImage, I.urlImage FROM Question as Q, Image as I WHERE Q.idImageSinguliere = I.idImage AND Q.idQuestion = " + rndInt, function (err, rowImageSingulieres, fields) {
      if (err) throw err;
      // console.log(rowImageSingulieres)
      var selected = null
      if (rowImageSingulieres.length > 0) selected = rowImageSingulieres[0];
      console.log('idImageSinguliere', selected.idImageSinguliere)

      con.query("SELECT * from Image WHERE typeImage = 'neutre'", function (err, rowImageNeutres, fields) {
        console.log('neutre length', rowImageNeutres.length)

        // Shuffle array
        const shuffled = rowImageNeutres.sort(() => 0.5 - Math.random());
        // Get sub-array of first 8 elements after shuffled
        let subarray = shuffled.slice(0, 8);
        // console.log(subarray)

        var captcha = subarray.map(({idImage, urlImage}) => ({ idImage, urlImage }))
        captcha.push({ idImage: selected.idImageSinguliere, urlImage: selected.urlImage })

        // Shuffle array
        captcha = captcha.sort(() => 0.5 - Math.random());
        // console.log('captcha', captcha)
        // res.render('index', {
        //   idQuestion: selected.idQuestion,
        //   question: selected.indice, 
        //   captcha: captcha,
        // });

        var yentest = {
          idQuestion: selected.idQuestion,
          question: selected.indice, 
          captcha: captcha,
        }
        return res.json(yentest);
      });
    });
  });
});

app.post('/captcha', function(req, res) {
  console.log(req.query, req.body)
  if(req.query && req.query.idQuestion) {
    // Get captcha response
    const idcaptcha = parseInt(req.body["captcha-response"]);

    // Check captcha response with the database answer
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "captchadb",
      port: "8889"
    });

    con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT Q.idQuestion, Q.idImageSinguliere FROM Question as Q WHERE Q.idQuestion = "+req.query.idQuestion, function (err, rowQuestion, fields) {
        if (rowQuestion.length > 0) {
          console.log(rowQuestion[0])
          if (rowQuestion[0].idImageSinguliere == idcaptcha) {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.status(200).send('OK captcha: ' + idcaptcha);
          } else {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.status(200).send('captcha invalide: ' + idcaptcha);
          }
        } else {
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.status(404).send('Question inconnue :' + req.query.idQuestion);
        }
      });
    });
  } else {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(404).send('Query inconnu :' + req.query);
  }
});


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(404).send('Lieu inconnu :' + req.originalUrl);
});

app.listen(8080, () => {
  console.log(`App listening on port ${8080}`)
});