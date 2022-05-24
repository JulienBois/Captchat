var express = require('express');
var bodyParser = require('body-parser'); // Module Ã  installer, Gestion JSON
var mysql = require('mysql'); //Module Ã  installer, Gestion SQL
var cors = require('cors') //Module Ã  installer, Gestion du cross Domain

var app = express();
app.use(bodyParser.json()); // pour supporter json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //  pour supporter  encoded url
app.use(cors());

app.get('/', function(req, res) {
    // Juste pour l'accueil, appel depuis un outil externe DONC Cross Domain
    console.log("demande du manifeste");
     res.sendFile( __dirname + "/api/" + "openapi.yaml" );
});

// récupérer tous les éditeurs
app.get('/editeurs', function(req, res) {  
  console.log("all editeurs");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM editeurs", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer un editeur
app.get('/editeurs/:id', function(req, res) {  
  var TheId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM Editeurs WHERE ID = ?';
      con.query(sql, [TheId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer un éditeur
app.post('/editeurs', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO Editeurs (Nom) VALUES (?);", [obj.nom]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour un éditeur
app.put('/editeurs/:id', function(req, res) {  
  var theId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE Editeurs SET Nom=? WHERE ID = ?';
      con.query(sql, [obj.nom,theId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer un éditeur
app.delete('/editeurs/:id', function(req, res) { 
  var TheId=req.params.id; 
  var con = mysql.createConnection({ 
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM editeurs WHERE ID = ?';
    con.query(sql, [TheId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});

// récupérer tous les auteurs
app.get('/auteurs', function(req, res) {  
  console.log("all autors");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM auteurs", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer un auteur
app.get('/auteurs/:id', function(req, res) {  
  var theId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM auteurs WHERE ID = ?';
      con.query(sql, [theId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer un auteur
app.post('/auteurs', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO auteurs (Nom, Prenom) VALUES (?,?);", [obj.nom, obj.prenom]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour un auteur
app.put('/auteurs/:id', function(req, res) {  
  var TheId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE Auteur SET Nom= ?, Prenom=? WHERE ID = ?';
      con.query(sql, [obj.nom, obj.prenom,TheId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer un auteur
app.delete('/auteurs/:id', function(req, res) { 
  var TheId=req.params.id; 
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM Auteurs WHERE ID = ?';
    con.query(sql, [TheId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});

// récupérer tous les illustrateurs
app.get('/illustrateurs', function(req, res) {  
  console.log("all illustrators");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM Illustrateurs", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer un illustrateur
app.get('/illustrateurs/:id', function(req, res) {  
  var theId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM Illustrateurs WHERE ID = ?';
      con.query(sql, [theId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer un illustrateur
app.post('/illustrateurs', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO Illustrateurs (Nom, Prenom) VALUES (?,?);", [obj.nom, obj.prenom]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour un illustrateur
app.put('/illustrateurs/:id', function(req, res) {  
  var theId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE Illustrateurs SET Nom= ?, Prenom=? WHERE ID = ?';
      con.query(sql, [obj.nom, obj.prenom,obj.password,theId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer un illustrateur
app.delete('/illustrateurs/:id', function(req, res) { 
  var theId=req.params.id; 
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM Illustrateurs WHERE ID = ?';
    con.query(sql, [theId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});

// récupérer toutes les collections
app.get('/collections', function(req, res) {  
  console.log("all collections");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM collections", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer une collection
app.get('/collections/:id', function(req, res) {  
  var theId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM collections WHERE ID = ?';
      con.query(sql, [theId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer une collection
app.post('/collections', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO collections (Nom) VALUES (?);", [obj.nom]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour une collection
app.put('/collections/:id', function(req, res) {  
  var theId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE collections SET Nom= ?, WHERE ID = ?';
      con.query(sql, [obj.nom,theId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer une collection
app.delete('/collections/:id', function(req, res) { 
  var theId=req.params.id; 
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM collections WHERE ID = ?';
    con.query(sql, [theId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});

// récupérer toutes les genres
app.get('/genres', function(req, res) {  
  console.log("all genres");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM Genres", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer un genre
app.get('/genres/:id', function(req, res) {  
  var theId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM Genres WHERE ID = ?';
      con.query(sql, [theId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer un genre
app.post('/genres', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO genres (libelle) VALUES (?);", [obj.nom]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour un genre
app.put('/genres/:id', function(req, res) {  
  var theId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE genres SET libelle= ?, WHERE ID = ?';
      con.query(sql, [obj.nom,theId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer un genre
app.delete('/genres/:id', function(req, res) { 
  var theId=req.params.id; 
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM genres WHERE ID = ?';
    con.query(sql, [theId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});

// récupérer tous les genres
app.get('/livres', function(req, res) {  
  console.log("all books");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
      port: "8891",
      host: "localhost",
      user: "root",
      password: "root",
      database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM livres,auteurs,editeurs,illustrateurs,collections,genres WHERE livres.auteur= auteurs.ID AND livres.editeur=editeurs.ID AND livres.illustrateur = illustrateurs.ID AND livres.collection =collections.ID AND livres.genre = genres.ID GROUP BY livres.ID", function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// récupérer un livre
app.get('/livres/:id', function(req, res) {  
  var theId=req.params.id;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
      port: "8891",
      host: "localhost",
      user: "root",
      password: "root",
      database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'SELECT * FROM livres, auteurs, illustrateurs,editeurs, genres,collections  WHERE livres.Auteur = auteurs.ID AND livres.Illustrateur = illustrateurs.ID AND livres.Editeur = editeurs.ID AND livres.Collection = collections.ID AND livres.Genre = genres.ID AND Livres.ID = ? ';
      con.query(sql, [theId],function (err, rows, fields) {
        if (err) throw err;
      res.json(rows);
      });
    });
});

// insérer un livre
app.post('/livres', function(req, res) {  
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  console.log(obj);
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
    });
    
    con.connect(function(err) {
      if (err) throw err;
       var sql = mysql.format("INSERT INTO Livres (titre,auteur,illustrateur,editeur,collection,genre) VALUES (?,?,?,?,?,?);", [obj.titre,obj.titre,obj.illustrateur,obj.editeur,obj.collection,obj.genre]);
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
res.status(200).end("Inserted");
});

// mettre à jour d'un livre
app.put('/livres/:id', function(req, res) {  
  var theId=req.params.id;
  obj = JSON.parse(JSON.stringify(req.body, null, "  "));
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  var con = mysql.createConnection({
      port: "8891",
      host: "localhost",
      user: "root",
      password: "root",
      database: "librairie"
    });
    con.connect(function(err) {
      if (err) throw err;
      var sql = 'UPDATE SET livres SET titre= ?, auteur = ?,editeur=?,illustrateur=?, collection = ?,genre=? WHERE ID = ?';
      con.query(sql, [obj.titre,obj.auteur,obj.editeur,obj.illustrateur,obj.collection,obj.genre,theId],function (err, rows, fields) {
        if (err) throw err;
        res.status(200).end("Updated");
      });
    });
});

// supprimer un genre
app.delete('/livres/:id', function(req, res) { 
  var theId=req.params.id; 
  var con = mysql.createConnection({
    port: "8891",
    host: "localhost",
    user: "root",
    password: "root",
    database: "librairie"
  });
  con.connect(function(err) {
    if (err) throw err;
    var sql = 'DELETE FROM livres WHERE ID = ?';
    con.query(sql, [theId],function (err, rows, fields) {
      if (err) throw err;
      res.status(200).end("Deleted");
    });
  });
});


app.use(function(req, res, next){
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(404).send('Adresse inconnue :'+req.originalUrl);
});

app.listen(8080);