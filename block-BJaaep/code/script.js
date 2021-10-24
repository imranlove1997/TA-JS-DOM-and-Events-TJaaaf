function randomNum(maximum) {
    return Math.floor(Math.random() * maximum);
}

let boxes = document.querySelectorAll('.boxes');
boxes.forEach((elem, index) => {
    elem.addEventListener("click", (event) => {
        event.target.innerText = randomNum(12);
        setTimeout(() => {
            event.target.innerText = ""; 
        }, 5000);
    });
});