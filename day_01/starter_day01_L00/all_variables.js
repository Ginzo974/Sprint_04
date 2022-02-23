// *****Exercices: Data Types --> Level01*****
// let defi = "Pratiquer les algorithmes en JavaScript";
// console.log(defi);
// console.log(defi.length);
// console.log(defi.toUpperCase());
// console.log(defi.toLowerCase());
// console.log(defi.substring(9, 39));

// let jour = " 10 Jours en JavaScript";
// console.log(jour.substring(3));
// console.log(jour.includes("Script"));
// console.log(jour.split());
// console.log(jour.split(" "));

// let marque = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(marque.split(" "));
// console.log(jour.replace("JavaScript", "PHP"));
// console.log(jour.charAt(15));
// console.log(jour.charCodeAt("J"));
// console.log(jour.indexOf("a"));
// console.log(jour.lastIndexOf("a"));

// let j = "10 Jours en ";
// let js = "JavaScript";
// let jjs = j.concat(js);

// let phrase = " 10 Jours en JavaScript";
// console.log(phrase.indexOf("parceque"));
// console.log(phrase.lastIndexOf("parceque"));
// console.log(phrase.search("parceque"));
// console.log(phrase.trim());
// console.log(jour.startsWith(" 10 Jours en JavaScript"));
// console.log(jour.endsWith(" 10 Jours en JavaScript"));
// console.log(jour.match("a"));
// console.log(jour.concat());
// console.log(jjs);
// console.log(jour.repeat(2));

// // LEVEL 02 //

// let quote =
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
// console.log(quote);

// let love =
//   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
// console.log(love);

// console.log(typeof "10" == 10);
// console.log(parseFloat("9.8") == 10);

// let p = "python";
// console.log(p.match("on"));

// let hope = "I hope this course is not full of jargon";
// console.log(hope.indexOf("jargon"));

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomIntInclusive(0, 100));
// console.log(getRandomIntInclusive(50, 100));
// console.log(getRandomIntInclusive(0, 255));

// let you =
//   "You cannot end a sentence with because because because is a conjunction";

// // BOOLEAN & DATES LVL01 //

// let firstName = "Perian";
// let lastName = "Julie";
// let country = "Reunion";
// let city = "Saint-Denis";
// let age = "20ans";
// let isMarried = "no";
// let year = " 10";

// let vrai = new Boolean(true);
// let vrae = new Boolean(true);
// let vraa = new Boolean(true);
// console.log(vrai);

// console.log(4 === "4");
// let v = "jargon";

// console.log(p.length);
// console.log(v.length);
// console.log(p > v);

// // EXO ALEATOIRES LVL02 //

// let myAge = 250;
// let yourAge = 25;
// let ourAge = 225;
// console.log("J'ai " + ourAge + " ans de plus que toi.");

// let entrez = prompt("Entrez votre annee de naissance:");
// let age = 2022 - entrez;

// console.log(age);

// if (age >= 18) {
//   alert("Vous êtes autorisé a conduire");
// } else if (age < 18) {
//   alert("T'es trop petit gros");
// }

// let annee = prompt("Entrez le nombre d'annees:");
// let seconde = 31536000 * annee;

// alert("Vous avez vécu " + seconde + " secs.");

// EXO LVL 03 //
// var time = dateheure();
// function dateheure() {
//   const now = new Date();
//   var annee = now.getFullYear();
//   var mois = now.getMonth();
//   var jour = now.getDate();
//   var heure = now.getHours();
//   var min = now.getMinutes();
//   var sec = now.getSeconds();

//   var time =
//     ("0" + jour).slice(-2) +
//     "/" +
//     ("0" + (mois + 1)).slice(-2) +
//     "/" +
//     annee +
//     ", " +
//     ("0" + heure).slice(-2) +
//     ":" +
//     ("0" + min).slice(-2) +
//     ":" +
//     ("0" + sec).slice(-2);

//   return time;
// }

// console.log(time);

// // LVL 04 //

// let a = 4;
// let b = 3;

// if (a > b) {
//   alert("BRAVO C SUPERIEUR FDP");
// } else if (a < b) {
//   alert("BRAVO C INFERIEUR FDP");
// }

// function getFee(isMember) {
//   return isMember ? "3" : "4";
// }

// console.log(getFee(true));

// console.log(getFee(false));

// console.log(getFee(null));

// let entrez = prompt("Entrez un nombre: ");
// let pair = entrez % 2;
// console.log(pair);

// if (pair == 0) {
//   alert(entrez + " est un nombre pair.");
// } else if (pair == 1) {
//   alert(entrez + " est un nombre impair.");
// }

// CONDITIONS LVL02 //

// let eleve = prompt("C'est quoi ton score? ");

// let a = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
// let b = Math.floor(Math.random() * (89 - 70 + 1)) + 70;
// let c = Math.floor(Math.random() * (69 - 60 + 1)) + 60;
// let d = Math.floor(Math.random() * (59 - 50 + 1)) + 50;
// let f = Math.floor(Math.random() * (49 - 0 + 1)) + 0;

// if (eleve == "a") {
//   console.log(alert("Bravo tu as eu " + a + " tu es le meilleur"));
// } else if (eleve == "b") {
//   console.log(alert("Waou tu as eu " + b + " tu es fort"));
// } else if (eleve == "c") {
//   console.log(alert("Tu as eu " + c + " c'est assez bien"));
// } else if (eleve == "d") {
//   console.log(alert("Tu as eu " + d + " c'est la moyenne"));
// } else if (eleve == "f") {
//   console.log(alert("Tu as eu " + f + " c'est la merde :("));
// }

// ******** 2 //

// let entree = prompt("Quel mois");

// let septembre = "septembre";
// let octobre = "octobre";
// let novembre = "novembre";
// let decembre = "decembre";
// let janvier = "janvier";
// let fevrier = "fevrier";
// let mars = "mars";
// let avril = "avril";
// let mai = "mai";
// let juin = "juin";
// let juillet = "juillet";
// let aout = "aout";

// if (entree == septembre || entree == octobre || entree == novembre) {
//   console.log(alert("Vous etes en automne"));
// } else if (entree == decembre || entree == janvier || entree == fevrier) {
//   console.log(alert("Vous etes en hiver"));
// } else if (entree == mars || entree == avril || entree == mai) {
//   console.log(alert("Vous etes en printemps"));
// } else if (entree == juin || entree == juillet || entree == aout) {
//   console.log(alert("Vous etes en ete"));
// }

// EXO LVL 03 //
let entree = prompt("Quel mois");

let septembre = "septembre";
let octobre = "octobre";
let novembre = "novembre";
let decembre = "decembre";
let janvier = "janvier";
let fevrier = "fevrier";
let mars = "mars";
let avril = "avril";
let mai = "mai";
let juin = "juin";
let juillet = "juillet";
let aout = "aout";

if (
  entree == janvier ||
  entree == mai ||
  entree == juillet ||
  entree == aout ||
  entree == octobre ||
  entree == decembre
) {
  console.log(alert(entree + " a 31 jours"));
} else if (entree == fevrier) {
  console.log(alert(entree + " a 28 jours"));
} else if (entree == septembre || entree == novembre || entree == juin) {
  console.log(alert(entree + " a 30 jours"));
}
