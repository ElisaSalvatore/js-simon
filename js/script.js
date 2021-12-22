//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.

//costanti e variabili su HTML
const containerHtml = document.querySelector('.container');
const outputNumbers = document.querySelector('.numbers');
const outputScore = document.querySelector('.score');
const outputWinner = document.querySelector('.winner');
const buttonNewGame = document.querySelector('.button');

const simonNumbersArray = [];

//FUNZIONE per generare numeri random
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

// function newGame(randomNumber){  
// };

//GENERARE 5 NUMERI RANDOM
while (simonNumbersArray.length < 5) {
    const randomNumber = getRandom (1, 100);

    //se il randomNumber generato (!) NON è incluso in simonNumbersArray allora pushalo al suo interno
    if (!simonNumbersArray.includes(randomNumber)) {
        simonNumbersArray.push(randomNumber);
    };
};
//STAMPARE IN PAGINA I 5 NUMERI GENERATI
//aggiungere il contatore per incrementare l'array che contiene i numeri random (generarti dalla funzione getRandom)
for (let i = 0; i < simonNumbersArray.length; i++) {
    outputNumbers.innerHTML += simonNumbersArray[i] + ' ';
}
console.log(simonNumbersArray);

//TIMING FUNCTIONS PER GESTIRE I SECONDI DI RITARDO DI ALCUNE AZIONI
//dopo 30sec far sparire i numeri utilizzando una timing function
setTimeout(function (){
    //.innerHTML VUOTO per cancellare il contenuto della pagina
    outputNumbers.innerHTML = ' ';

    setTimeout(function (){
        //far appararire un prompt per ogni numero in cui viene chiesto all'untente di inserire i numeri memorizzati 
        // oppure creare un contatore che ripeta l'azione del prompt per 5 volte (n random = n da inserire)
        let userInsertNumbers = [];
        let userCorrectNumbers = 0;
        
        for (i = 0; i < 5; i++) {
            const userAnswer = parseInt(prompt('Inserisci un numero della sequenza: '));
            //SE l'userAnswer è presente nella simonSaysArray E SE NON è incluso nella lista userInsertNumber, allora 
            // aggiungi il numero inserito incrementando la lista userCorrectNumbers

            if (simonNumbersArray.includes(userAnswer) && !userInsertNumbers.includes(userAnswer)){
                userCorrectNumbers++;
            };
            //in generale se i numeri inseriti (userAnswer) sono presenti o meno nella sequenza iniziale, 
            // sono comunque da aggiungere alla lista userInsertNumbers: 
            // in modo da verificare QUANTI numeri inseriti dall'utente sono corretti
            userInsertNumbers.push(userAnswer);
            console.log(userAnswer);
        };
        
        //mostrare nuovamente in pagina i numeri della sequenza inziale da memorizzare ed il punteggio (quanti numeri l'utente ha indovinato)
        outputNumbers.innerHTML += simonNumbersArray;
        outputScore.innerHTML = `Hai indovinato ${userCorrectNumbers} numeri! La sequenza da te memorizzata è: ${(userInsertNumbers + ' ')}`;

        // verifica dei numeri inseriti dall'utente, se l'utente ha indovinato 5 numeri
        if (userInsertNumbers[i] === simonNumbersArray[i]) {
            console.log('L\'utente ha inserito la giusta sequenza.')
            outputWinner.innerHTML += 'Complimenti, hai inserito la corretta sequenza di numeri!'
            
        } else {
            console.log('L\'utente ha inserito un\'errata sequenza.')
            outputWinner.innerHTML += 'Riprova, non hai inserito la corretta sequenza di numeri.';
        };      
        
    }, 500);

}, 3000);

// Capire quale funzione inserire per resettare la partita
// buttonNewGame.addEventListener('click', function(){
//     outputNumbers.innerHTML = newGame(randomNumber);
// });
