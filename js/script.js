
//L’utente indica un livello di difficoltà (3 pulsanti) 
//in base al quale viene generata una griglia di gioco quadrata, 
//in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurra



const boxingHtml = document.querySelector('.boxing');
const buttonOne = document.querySelector('.button.box1');

buttonOne.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        createNewBox(boxingHtml);
    }
})

const buttonTwo = document.querySelector('.button.box2');

buttonTwo.addEventListener('click', function() {
    for (let i = 1; i <= 81; i++) {
        createNewBox(boxingHtml);
    }
})

const buttonThree = document.querySelector('.button.box3');

buttonThree.addEventListener('click', function() {
    for (let i = 1; i <= 49; i++) {
        createNewBox(boxingHtml);
    }
})


function createNewBox(container) {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    container.append(newBox);
    
    newBox.addEventListener('click', function() {
        this.classList.toggle('blu');
    })
}