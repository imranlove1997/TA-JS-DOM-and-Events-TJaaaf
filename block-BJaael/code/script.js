let boxs = document.querySelector('.boxs');

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

for(let i = 0; i < 500; i++){
    let div = document.createElement('div');
    div.classList.add("box");
    let h2 = document.createElement("h2");
    let randomNum = getRandomNumber(500);
    h2.innerText = randomNum;
    div.append(h2);
    boxs.append(div);
}

function colorGen() {
    let hashChar = [
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
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let random = getRandomNumber(16);
      color = color + hashChar[random];
    }
    return color;
  }
let allBoxes = document.querySelectorAll(".box");

function handler() {
  allBoxes.forEach((box) => {
    box.style.backgroundColor = colorGen();
    box.querySelector("h2").innerText = getRandomNumber(500);
  });
}

boxs.addEventListener("mousemove", handler);