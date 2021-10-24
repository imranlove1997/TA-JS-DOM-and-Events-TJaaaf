let inside = document.querySelector('.text-inside');
let value = 0;
inside.innerText = value;
let main = document.querySelector('.main');
main.addEventListener("click", (event) => {
    if(event.target.classList.value === "number" || event.target.classList.value === "btn"){
        if(inside.innerText == value){
            inside.innerText = event.target.innerText; 
        } else {
            inside.innerText += event.target.innerText;
        }
    } else if(event.target.classList.contains("equal")){
        let total = eval(inside.innerText);
        inside.innerText = total;
    } else if(event.target.classList.contains("clear")){
        inside.innerText = "";
        inside.innerText = 0;
    }
})