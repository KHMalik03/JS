
/*


//Strings
let userOutput;
let reverse;
let char;
let newChar;
let capitalized;



function passwordEncryption() {
    userOutput = prompt("Entrer votre mot de passe"); // ask the user for their password 
    reverse = userOutput.split('').reverse().join(''); //split each char and reverse it
    console.log("Mot de passe crypter", reverse); //display the  encrypted password in console
}

function countCharcters() {
    userOutput = prompt("Entrer une phrase"); // ask the user for a phrase
    console.log("Votre mot a", userOutput.length, "caractères."); // count char using lenght
}

function capitalizeWord() {
    userOutput = prompt("Entrez une phrase"); // ask the user for a phrase
    capitalized = ""; //variable to stock result

    for (let i = 0; i < userOutput.length; i++) {
        char = userOutput[i];
        if (char === ".") {
            newChar = userOutput[i + 1];
            capitalized += newChar.toUpperCase();
            i++;
        }
        else {
            capitalized += char;
        }
        console.log(capitalized);
    }
}

do {

    let choose = prompt("Choose a function / 1-passwordEncryption 2-countCharcters 3-capitalizeWord");

    if (choose === "1") {
        passwordEncryption();
    }

    else if (choose === "2") {
        countCharcters();
    }
    else if (choose === "3") {
        capitalizeWord();
    }
} while (prompt("Voulez-vous reésayer") == "oui"); 


*/





/*


//Arrays
let tab = [4, 8, 4, 9, 3, 1, 76, 5, -2, 0];

function maxMin() {
    alert("Le nombre le plus grand est :\n" + Math.max(...tab));
    alert("Le nombre le plus petit est :\n" + Math.min(...tab));
}

function sumArray() {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i]
    };
    alert("La somme de tous les nombres de l'array est \n" + somme);
};


function filterBy() {
    let newTab = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            newTab.push(tab[i])
        }
    }
    alert("Le tableau filté :\n" + newTab)
}

do {
    let disp = alert ("here is an array \n 4, 8, 4, 9, 3, 1, 76, 5, -2, 0")

    let choose = prompt("Choose a function / 1-maxMin 2-sumArray 3-filterBy");

    if (choose === "1") {
        maxMin();
    }

    else if (choose === "2") {
        sumArray();
    }
    else if (choose === "3") {
        filterBy();
    }
} while (prompt("Voulez-vous reésayer") == "oui");
//sumArray ();
//maxMin();
//filterBy();


*/


