let form = document.querySelector("form");
let list = document.querySelector(".list");

let newName = (event) => {
    event.preventDefault();

    let name = form.elements.name;

    let movie = document.createElement("div");
    movie.classList.add("movie");
    let h2 = document.createElement("h2");
    h2.innerText = name.value;
    let i = document.createElement("i");
    i.classList.add("fas","fa-times-circle", "cross");
    movie.append(h2,i);
    list.append(movie);
    let crossList = document.querySelectorAll(".cross");
    handleCross = (event) => {
        event.target.parentElement.style.display = "none";
        console.log("done");
    };
    crossList.forEach((e) => {
        e.addEventListener("click", handleCross);
    });
    name.value = "";
};

form.addEventListener("submit", newName);