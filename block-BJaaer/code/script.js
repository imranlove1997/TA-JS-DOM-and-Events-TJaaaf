let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let userName = document.querySelector(".name");
let userEmail = document.querySelector(".email");
let userLove = document.querySelector(".love");
let userColor = document.querySelector(".color");
let userRating = document.querySelector(".rating");
let userBook = document.querySelector(".book");
let displayTerms = document.querySelector(".display-terms");

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = event.target.text.value;
    userName.innerText = userInfo.name;
    userInfo.email = event.target.text.value;
    userEmail.innerText = userInfo.email;
    userInfo.love = event.target.gender.value;
    userLove.innerText = userInfo.love;
    userInfo.color = event.target.color.value;
    userColor.innerText = userInfo.color;
    userInfo.rating = event.target.range.value;
    userRating.innerText = userInfo.rating;
    userInfo.book = event.target.drone.value;
    userBook.innerText = userInfo.book;
    userInfo.terms = event.target.terms.value;
    if(userInfo.terms === "on"){
        displayTerms.innerText = "You agree to Terms and Conditions";
    } else {
        displayTerms.innerText = "your do not agree to terms and conditons";
    }
    form.style.display = "none";
    modal.style.display = "flex";
}

form.addEventListener("submit", handleSubmit);

close.addEventListener("click", () => {
    modal.style.display = "none";
    form.style.display = "flex";
})