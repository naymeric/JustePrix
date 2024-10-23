const prompt = require('prompt-sync')()


let test = random(1, 100)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(test) //sert à vérifier le nombre choisi aléatoirement par l'algorythme mais c'est facultatif
let nmbr = prompt("Saisir un nombre entre 1 et 100 ")
let compteur = 0



while (nmbr != test && compteur < 4) {
    while (isNaN(nmbr) || nmbr > 100 || nmbr < 1) {
        nmbr = prompt("Entrer une valeur correcte : un nombre entre 1 et 100")
    }
    if (nmbr < test) {
        console.log("C'est plus")
        compteur++
        console.log(compteur)
        nmbr = prompt("Saisir un nombre entre 0 et 100 ")
    } else if (nmbr > test) {
        console.log("C'est moins")
        compteur++
         console.log(compteur)
        nmbr = Number(prompt("Saisir un nombre entre 0 et 100 "))
    }
}
if(compteur>=4){
    console.log("Perdu, vous n'avez plus d'essai")
}else if(nmbr == test) {
    console.log("Gagné!")
}


