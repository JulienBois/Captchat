DROP DATABASE IF EXISTS captchadb;
DROP TABLE Utilisateur IF EXISTS;
DROP TABLE Theme IF EXISTS;
DROP TABLE Image IF EXISTS;
DROP TABLE Question IF EXISTS;
DROP TABLE Jeu IF EXISTS;

CREATE DATABASE captchadb;
USE captchadb;

CREATE TABLE Utilisateur(
  idU INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nomU VARCHAR(30),
  prenomU VARCHAR(30),
  role VARCHAR(30),
  username VARCHAR(30),
  pwd VARCHAR(250)
);

CREATE TABLE Theme(
  idTheme INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nomTheme VARCHAR(30)
);

CREATE TABLE Jeu(
  idJeu INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nomJeu VARCHAR(30),
  idU INTEGER NOT NULL,
  idTheme INTEGER NOT NULL,
  urlJeu VARCHAR(100),
  FOREIGN KEY (idU) REFERENCES Utilisateur(idU),
  FOREIGN KEY (idTheme) REFERENCES Theme(idTheme)
);

CREATE TABLE Image(
  idImage INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT,
  idJeu INTEGER NOT NULL,
  nomImage VARCHAR(30),
  typeImage VARCHAR(20),
  urlImage VARCHAR(100),
  FOREIGN KEY (idJeu) REFERENCES Jeu(idJeu)
);

CREATE TABLE Question(
  idQuestion INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  idImageSinguliere INTEGER,
  indice VARCHAR(100),
  FOREIGN KEY (idImageSinguliere) REFERENCES Image(idImage)
);

INSERT INTO Utilisateur(idU, nomU, prenomU, role, username, pwd) VALUES (1, 'Admin', 'Admin', 'role_admin', 'admin', 'password');
INSERT INTO Utilisateur(idU, nomU, prenomU, role, username, pwd) VALUES (2, 'User1', 'User1', 'role_user', 'user1', 'password');

INSERT INTO Theme(idTheme, nomTheme) VALUES (1, 'Animaux');
INSERT INTO Theme(idTheme, nomTheme) VALUES (2, 'BD');
INSERT INTO Theme(idTheme, nomTheme) VALUES (3, 'Graphisme');
INSERT INTO Theme(idTheme, nomTheme) VALUES (4, 'Fruits');


INSERT INTO Jeu(idJeu, nomJeu, idU, idTheme, urlJeu) VALUES (1, 'Captchat', 1, 1, 'url');

INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (1, 1, 'chat_neutre_1.jpg', 'neutre', '/images/neutres/chat_neutre_1.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (2, 1, 'chat_neutre_2.jpg', 'neutre', '/images/neutres/chat_neutre_2.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (3, 1, 'chat_neutre_3.jpg', 'neutre', '/images/neutres/chat_neutre_3.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (4, 1, 'chat_neutre_4.jpg', 'neutre', '/images/neutres/chat_neutre_4.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (5, 1, 'chat_neutre_5.jpg', 'neutre', '/images/neutres/chat_neutre_5.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (6, 1, 'chat_neutre_6.jpg', 'neutre', '/images/neutres/chat_neutre_6.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (7, 1, 'chat_neutre_7.jpg', 'neutre', '/images/neutres/chat_neutre_7.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (8, 1, 'chat_neutre_8.jpg', 'neutre', '/images/neutres/chat_neutre_8.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (9, 1, 'chat_neutre_9.jpg', 'neutre', '/images/neutres/chat_neutre_9.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (10, 1, 'chat_neutre_10.jpg', 'neutre', '/images/neutres/chat_neutre_10.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (11, 1, 'chat_neutre_11.jpg', 'neutre', '/images/neutres/chat_neutre_11.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (12, 1, 'chat_neutre_11.jpg', 'neutre', '/images/neutres/chat_neutre_12.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (13, 1, 'chat_neutre_13.jpg', 'neutre', '/images/neutres/chat_neutre_13.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (14, 1, 'chat_amoureux.jpg', 'singuliere', '/images/singuliers/chat_amoureux.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (15, 1, 'chat_bien_coiffe.jpg', 'singuliere', '/images/singuliers/chat_bien_coiffe.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (16, 1, 'chat_borgne.jpg', 'singuliere', '/images/singuliers/chat_borgne.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (17, 1, 'chat_chapeaute.jpg', 'singuliere', '/images/singuliers/chat_chapeaute.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (18, 1, 'chat_cosmonaute.jpg', 'singuliere', '/images/singuliers/chat_cosmonaute.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (19, 1, 'chat_cyclope.jpg', 'singuliere', '/images/singuliers/chat_cyclope.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (20, 1, 'chat_licorne.jpg', 'singuliere', '/images/singuliers/chat_licorne.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (21, 1, 'chat_malade.jpg', 'singuliere', '/images/singuliers/chat_malade.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (22, 1, 'chat_moustachu.jpg', 'singuliere', '/images/singuliers/chat_moustachu.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (23, 1, 'chat_myope.jpg', 'singuliere', '/images/singuliers/chat_myope.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (24, 1, 'chat_pirate.jpg', 'singuliere', '/images/singuliers/chat_pirate.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (25, 1, 'chat_plongeur.jpg', 'singuliere', '/images/singuliers/chat_plongeur.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (26, 1, 'chat_princesse.jpg', 'singuliere', '/images/singuliers/chat_princesse.jpg');
INSERT INTO Image(idImage, idJeu, nomImage, typeImage, urlImage) VALUES (27, 1, 'chat_titi_parisien.jpg', 'singuliere', '/images/singuliers/chat_titi_parisien.jpg');

INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (1, 14, 'Saurez vous reconnaître un chat amoureux ?');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (2, 15, 'Mon chat est une fausse blonde');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (3, 16, 'Ce chat là a fait une croix sur son oeil');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (4, 17, "C'est encore le chat qui porte le chapeau");
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (5, 18, 'Saurez-vous reconnaître le chat de Thomas Pesquet ?');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (6, 19, 'Chat du grand bleu');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (7, 20, 'Ne confondons pas une salicorne et un chat-licorne !');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (8, 21, 'Ce chat là a oublié de se faire vacciner contre la grippe');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (9, 22, 'Quel type de chat se cache derrière ses moustaches ?');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (10, 23, 'Chaussez vos lunettes et montrez-moi le chat myope ?');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (11, 24, 'Après la fiancée du pirate, voici le chat du corsaire');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (12, 25, 'Ce chat sait nager');
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (13, 26, "C'est la reine d'Angleterre qui a perdu son chat");
INSERT INTO Question(idQuestion, idImageSinguliere, indice) VALUES (14, 27, 'Après les gilets jaunes, voici les foulards rouges');


