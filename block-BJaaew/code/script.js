let container = document.querySelector(".container");
let input = document.querySelector(".input");
let houseName = document.querySelector(".peopleName");

let people = got.houses.reduce((a, b) => {
  b.people.map((elem) => a.push(elem));
  return a;
}, []);

function createUi(element) {
  return `<article class="article flex-31">
    <div class="flex align-center">
      <img src=${element.image} alt="">
      <h3>${element.name}</h3>
    </div>
    <p class="text">${element.description}</p>
    <div class="width-100">
      <a href="#" class="btn width-100">Learn More!</a>
    </div>
  </article>`;
}

let cards = got.houses
  .map((element) => element.people.map((elem) => createUi(elem)).join(""))
  .join("");

container.innerHTML = cards;

function search(event) {
  let inputValue = event.target.value.toLowerCase();
  let filterValue = people.filter((element) =>
    element.name.toLowerCase().includes(inputValue)
  );
  let filterCard = filterValue.map((elem) => createUi(elem)).join("");
  container.innerHTML = filterCard;
}

input.addEventListener("keyup", search);

function searchHouse(event) {
  let house = event.target.innerText.toLowerCase();
  let filterHouse = got.houses.filter(
    (element) => element.name.toLowerCase() === house
  );
  let filterHouseShow = filterHouse[0].people
    .map((element) => createUi(element))
    .join("");
  container.innerHTML = filterHouseShow;
}

houseName.addEventListener("click", searchHouse);