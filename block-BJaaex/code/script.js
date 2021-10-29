let memory = [
    {
      name: "sql",
      img:
        "https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png",
    },
    {
      name: "python",
      img:
        "https://e7.pngegg.com/pngimages/824/143/png-clipart-python-programming-language-computer-programming-others-miscellaneous-text-thumbnail.png",
    },
    {
      name: "javascript",
      img:
        "https://e7.pngegg.com/pngimages/199/348/png-clipart-javascript-programmer-programming-language-computer-programming-node-js-angle-text-thumbnail.png",
    },
    {
      name: "c",
      img:
        "https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle-thumbnail.png",
    },
  ];
  let date;
  let selected = 0;
  let count = 0;
  let firstGuess = "";
  let secondGuess = "";
  let previousSelected = null;
  
  let scoreCard = document.querySelector(".score-card");
  let noOfCount = document.querySelector(".count");
  let timeTakenToCompleteTheGame = document.querySelector(".time-taken");
  
  const game = document.getElementById("game");
  
  const grid = document.createElement("section");
  
  grid.setAttribute("class", "grid");
  
  game.appendChild(grid);
  
  memory = memory.concat(memory).sort(() => 0.5 - Math.random());
  
  memory.forEach((item) => {
    const card = document.createElement("div");
    let imgEle = document.createElement("img");
    card.classList.add("card");
    card.dataset.name = item.name;
    imgEle.src = item.img;
  
    imgEle.classList.add("hidden");
    card.append(imgEle);
    grid.appendChild(card);
  });
  
  grid.addEventListener("click", (e) => {
    console.log(previousSelected);
    if (e.target.nodeName !== "DIV") {
      return;
    }
    date = date ? date : new Date();
    e.target.firstElementChild.classList.remove("hidden");
    e.target.firstElementChild.classList.add("show");
    if (e.target === previousSelected) {
      console.log(previousSelected, "Ps");
      return;
    }
  
    if (selected < 2) {
      selected++;
      e.target.classList.add("selected");
  
      if (selected === 1) {
        previousSelected = e.target;
        firstGuess = e.target.dataset.name;
      }
      if (selected === 2) {
        count++;
        secondGuess = e.target.dataset.name;
  
        setTimeout(() => {
          e.target.firstElementChild.classList.remove("show");
          e.target.firstElementChild.classList.add("hidden");
          previousSelected.firstElementChild.classList.remove("show");
          previousSelected.firstElementChild.classList.add("hidden");
          if (firstGuess === secondGuess) {
            document
              .querySelectorAll(".selected")
              .forEach((selected) => selected.classList.add("match"));
            checkGameOver();
          }
          reset();
        }, 1000);
        console.log(previousSelected, "Outside");
      }
    }
  });