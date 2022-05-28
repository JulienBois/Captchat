var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Defining the Express app
var app = express();
var mysql = require('mysql');

// Adding Helmet to enhance your Rest API's security
app.use(helmet());

// Using bodyParser to pqrse JSON bodies into JS objects
app.use(bodyParser.json());

// Enabling CORS for all requests
app.use(cors());

// Adding morgqn to log HTTP requests
app.use(morgan('combined'));

/**
 * qcqnsqkhfkqsjhf
 */
app.all('*', function(req, res, next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

// defining an enpoint to return captcha information
app.get('/captcha', function (req, res) {
  const rndInt = Math.floor(Math.random() * 14) + 1
  console.log("rand", rndInt)
  // res.header("Access-Control-Allow-Origin", "*");

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

        var captchaRs = {
          idQuestion: selected.idQuestion,
          question: selected.indice, 
          images: captcha,
        }
        return res.json(captchaRs);
      });
    });
  });
})

/**
 * POST submit a selected image from users
 */
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

app.listen(8080, () => {
  console.log(`App is listening on port ${8080}`)
});