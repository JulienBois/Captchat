var md4 = require("js-md4");
var md5 = require("md5");
var sha1 = require("sha1");
var sha256 = require("sha256");
var sha512 = require("js-sha512").sha512;

function ajoutBitParite(chaineHasher) {
    var taRace = new String(chaineHasher);
    var chaineNombre = taRace.replace(/[^0-9]+/g, "");
    var somme = 0;
    for (var position = 0; position < chaineNombre.length; position++) {
        somme += parseInt(chaineNombre[position]);
    }
    if (somme % 2 == 0) {
        taRace += "1";
    } else {
        taRace += "0";
    }
    return taRace;
}

function hashMd4(chaine) {
    md4.create();
    return ajoutBitParite(md4.update(chaine));
}

function hashMd5(chaine) {
    return ajoutBitParite(md5(chaine));
}

function hashSha1(chaine) {
    return ajoutBitParite(sha1(chaine));
}

function hashSha256(chaine) {
    return ajoutBitParite(sha256(chaine));
}

function hashSha512(chaine) {
    return ajoutBitParite(sha512(chaine));
}

module.exports = {
    hashMd4,
    hashMd5,
    hashSha1,
    hashSha256,
    hashSha512
}