//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.

//costanti e variabili per generare 5 numeri random
const containerHtml = document.querySelector('.container');
const outputNumbers = document.querySelector('.numbers');
const simonNumbers = [];
const userNumbers = []; 
let i;


//funzione per generare numeri random
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//ciclo per stampare in pagina numeri random univoci da 1 a 100
while (simonNumbers.length < 5) {
    const randomNumber = getRandom (1, 100);

    if (!simonNumbers.includes(randomNumber)) {
        simonNumbers.push(randomNumber);
    };
};
outputNumbers.innerHTML = (simonNumbers);
console.log(simonNumbers);

//dopo 30sec far sparire i numeri utilizzando una timing function
setTimeout(function (){
    containerHtml.remove(outputNumbers);
    
    //far appararire un prompt in cui viene chiesto all'untente di inserire i numeri memorizzati 
    const userNumbers = prompt('Inserisci la sequenza di numeri (lascia uno spazio tra un numero e l\'altro): ');
    const splitUser = userNumbers.split(' ');
    console.log(splitUser)

    //verifica dei numeri inseriti dall'utente
    // const splitSimon = simonNumbers.split(' ');
    // console.log(splitSimon)
    if (splitUser == simonNumbers) {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    };
},3000);


