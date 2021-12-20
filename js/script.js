
//L’utente indica un livello di difficoltà (3 pulsanti) 
//in base al quale viene generata una griglia di gioco quadrata, 
//in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurra

function createNewBox(container, i) {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.innerText = i;
    container.append(newBox);
    
    newBox.addEventListener('click', function() {
        this.classList.toggle('blu');
    })
}

const boxingHtml = document.querySelector('.boxing');

const buttonOne = document.querySelector('.button.box1');

buttonOne.addEventListener('click', function() {
    boxingHtml.classList.add('facile');
    boxingHtml.innerHTML = ''
    for (let i = 1; i <= 100; i++) {
        createNewBox(boxingHtml, i);
    }
})

const buttonTwo = document.querySelector('.button.box2');

buttonTwo.addEventListener('click', function() {
    boxingHtml.classList.add('medio');
    boxingHtml.innerHTML = ''
    for (let i = 1; i <= 81; i++) {
        createNewBox(boxingHtml, i);
    }
})

const buttonThree = document.querySelector('.button.box3');

buttonThree.addEventListener('click', function() {
    boxingHtml.classList.add('difficile');
    boxingHtml.innerHTML = ''
    for (let i = 1; i <= 49; i++) {
        createNewBox(boxingHtml, i);
    }
})



