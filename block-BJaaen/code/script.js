
let usersChoice = document.querySelector(".users-choice");
let compChoice = document.querySelector(".computers-choice");
let userIcons = document.querySelector(".user-icons");
let computerIcons = document.querySelector(".computers-icons");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let score = document.querySelector(".score");
userIcons.addEventListener("click", (event) => compareChoices(event));
let userScore = 0;
let computerScore = 0;
function compareChoices(event){
    let userChoice = event.target.dataset.text;
    let compuChoice = computerChoice();
    usersChoice.innerText = [`${userChoice}`];
    userIcons.querySelector(`.rock`).classList.remove("active");
    userIcons.querySelector(`.paper`).classList.remove("active");
    userIcons.querySelector(`.scissor`).classList.remove("active");
    userIcons.querySelector(`.${userChoice}`).classList.add("active");
    computerIcons.querySelector(`.rock`).classList.remove("active");
    computerIcons.querySelector(`.paper`).classList.remove("active");
    computerIcons.querySelector(`.scissor`).classList.remove("active");
    computerIcons.querySelector(`.${compuChoice}`).classList.add("active");
    if(userChoice === compuChoice){
        winner.innerText = "Draw";
    } else if (userChoice === "rock" && compuChoice === "paper"){
        winner.innerText = "Computer Wins";
        computerScore++;
    } else if(userChoice === "rock" && compuChoice === "scissor"){
        winner.innerText = "You Win";
        userScore++;
    } else if (userChoice === "paper" && compuChoice === "scissor"){
        winner.innerText = "Computer Wins";
        computerScore++;
    } else if(userChoice === "paper" && compuChoice === "rock"){
        winner.innerText = "You Win";
        userScore++;
    } else if(userChoice === "scissor" && compuChoice === "paper") {
        winner.innerText = "You Win";
        userScore++;
    } else if(userChoice === "scissor" && compuChoice === "rock"){
        winner.innerText = "Computer Wins";
        computerScore++;
    }
    score.innerText = `User: ${userScore} Computer: ${computerScore}`;
}
function computerChoice() {
    let arr = ["rock", "paper", "scissor"];
    let choice = "";
    for(let i = 0; i < arr.length; i++){
        let randomNum = Math.floor(Math.random() * 3);
        choice = arr[randomNum];
    }
    compChoice.innerText = [`${choice}`];
    return choice;
}
reset.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    score.innerText = `User: ${userScore} Computer: ${computerScore}`;
});