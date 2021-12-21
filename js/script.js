//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.

//costanti e variabili per generare 5 numeri random
const containerHtml = document.querySelector('.container');
const outputNumbers = document.querySelector('.numbers');
const ouputWinner = document.querySelector('.winner');

const simonNumbersArray = [];
let i;

//funzione per generare numeri random
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

//ciclo per stampare in pagina numeri random univoci da 1 a 100
while (simonNumbersArray.length < 5) {
    const randomNumber = getRandom (1, 100);

    if (!simonNumbersArray.includes(randomNumber)) {
        simonNumbersArray.push(randomNumber);
    };
};
outputNumbers.innerHTML = (simonNumbersArray);
console.log(simonNumbersArray);

//dopo 30sec far sparire i numeri utilizzando una timing function
setTimeout(function (){
    containerHtml.remove(outputNumbers);
    
    //far appararire un prompt per ogni numero in cui viene chiesto all'untente di inserire i numeri memorizzati 
    const number1 = parseInt(prompt('Inserisci il PRIMO numero della sequenza: '));
    const number2 = parseInt(prompt('Inserisci il SECONDO numero della sequenza: '));
    const number3 = parseInt(prompt('Inserisci il TERZO numero della sequenza: '));
    const number4 = parseInt(prompt('Inserisci il QUARTA numero della sequenza: '));
    const number5 = parseInt(prompt('Iinserisci il QUINTO numero della sequenza: '));
    
    // verifica dei numeri inseriti dall'utente
    const userNumbersArray = [number1,number2,number3, number4, number5];
    console.log(userNumbersArray);

    if (userNumbersArray[i] === simonNumbersArray[i]) {
        console.log('L\'utente ha inserito la giusta sequenza.')
        ouputWinner.innerHTML += 'Complimenti, hai inserito la corretta sequenza di numeri!'
        
    } else {
        console.log('L\'utente ha inserito un\'errata sequenza.')
        ouputWinner.innerHTML += 'Riprova, non hai inserito la corretta sequenza di numeri.';
    };

},30000);








