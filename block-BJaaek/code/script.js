let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

function getRandomColor() {
    let hexChar = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];

    let hash = "#";
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * 16);
        hash = hash + hexChar[randomNum];
    }
    return hash;
}

function click() {
    let randomColor = getRandomColor();
    firstBox.style.backgroundColor = randomColor;
}

function move() {
    let randomColor = getRandomColor();
    secondBox.style.backgroundColor = randomColor;
}

firstBox.addEventListener("click", click);
secondBox.addEventListener("mousemove", move);