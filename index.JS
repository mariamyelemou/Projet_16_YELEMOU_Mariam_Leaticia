alert("Le fichier fonctionne");
//ceci est un commentaire

/*ceci 
est 
un
Commentaire
*/

console.log("Hello");


let maVariableSuperCool = "KamelCase";

console.log(maVariableSuperCool);

var unTexte = "Voici un texte";

console.log("unTexte");

unTexte = "Nouveau texte...";

console.log(unTexte);

const prenom = "Justine";

console.log("prenom");

let unChiffre = "24";

unChiffre = " 12";

console.log("unChiffre");

let chaine = "Je suis l'autre chaine de caractere";

let nouvelleChaine = `Chaine précédente : ${chaine}`;

console.log(nouvelleChaine);

let chiffre = "24";

let nouvelleChiffre = ` Le chiffre attendu est : ${chiffre}  degrés `;

console.log(nouvelleChiffre);

let string = "Je suis une chaine ";
let number = "24";
let booleen = true;
let array = ["Je", "suis", 24, false];

let object = {
  prenom: "audrey",
  age: 34,
  ville: "Bordeaux",
};

console.log(typeof array);
console.log(typeof number);

let arbre;

console.log(arbre);

console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);
console.log(4 ** 5);
let total = 0;
total = total + 1;
console.log(total);

total++;
--total;
total += 5;

console.log(total);

let = 2;
let x = 5;
console.log(total);

let z = 8;
let y = 4;

if ('z < y') {
  console.log('z est inferieur à y');

} 
    else ('z > y')
 {
  console.log('z est superieur a y');

}

let m = 5;
let n = 5; 
if (m) {
  console.log('m existe');

}

let k = 6;
let l = 6;
if ( k == l){
  console.log('True !');  

} else {
  console.log('False !');

}

let i = 6;
let j = 6;
if ( i !== j){
  console.log('True !');  

} else {
  console.log('False !');
}

let v = 6;
let u = '6';
if ( k == l){
  console.log('True !');  

} else {
  console.log('False !');
}

let o = 6;
let p = '6';
if ( o === p) {
  console.log('True !');

} else if(o == p) {
  console.log('o et p égaux en valeur');
} else {
  console.log('o et p ne sont pas du tout égaux');

}

let a = 5;
let b = '6';
if ( a === b) {
  console.log('True !');

} else if(a == b) {
  console.log('a et b égaux en valeur');
} else {
  console.log('a et b ne sont pas du tout égaux');

}

let q = 6;
let r = 5;
if ( q === r) {
  console.log('True !');

} else if(q == r) {
  console.log('q et r égaux en valeur');
} else {
  console.log( q  + "et " + r + ' ne sont pas du tout égaux');
  console.log(' ${q} et ${r} ne sont pas du tout égaux');
}

let s = 5;
let t = 5;

if ( s == t) console.log('True !')

c = 5;
d ='5';

c == d ? console.log('True !') : console.log('false');


e = 6;
f ='5';

e === f ? console.log('True !') : console.log('false');

function faireQuelqueChose() {
  console.log('Je fais un truc !');
  console.log('Trop cool');
}
faireQuelqueChose();

const faireUneTache = (tache) => {
  console.log('Je fais ;' + tache);
};
faireUneTache('les courses');
faireUneTache('le menage');

function calc(g, h) {
  return g + h;
}

(function maFunction() {
  console.log('Je me joue toute seule')
})(); 

(() => {
  console.log('Je me joue aussi toute seule')
})();


function add2 () {
  let t = 4;
  console.log(t);
  return t + 2;
}
add2();

let h = 9;
let g= 2;
 function addition(g, h) {
  return g + h;
 }
 let somme = 10;

 function addition(g, h){
  total = g + h;
  return somme;
}
  let moy = 0;   
  function addition(i){ 
    moy += i;
    return moy;
  
 }

 function soustraction(i) {
  total-= i;
  return total;  
 }


 function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
   total /= x;
  return total;

  }
 }


 function multiplication(x) {
  if (total === 0) {
    return (total = x);

  }  else {
    total *= x;
    return total;

  }
 }


 function reset() {
   total = 0;
 }






