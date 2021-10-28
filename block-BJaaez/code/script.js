    let inputText = document.querySelector("#todo");
    let root = document.querySelector("ul");
    

    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let clear = document.querySelector(".clear");

    let defaultSelected = "all";

    let allTodos = JSON.parse(localStorage.getItem('todos')) || [];
  
    function handleInput(event) {
      let value = event.target.value;
      if (event.keyCode === 13 && value !== "") {
        let todo = {
          name: value,
          isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI();
      }
      localStorage.setItem("todos", JSON.stringify(allTodos));
    }
    // span
    function handleDelete(event) {
      let id = event.target.dataset.id;
      allTodos.splice(id, 1);
      localStorage.setItem("todos", JSON.stringify(allTodos));
      createUI();
    }
    // handleToggle
    function handleToggle(event) {
      let id = event.target.dataset.id;
      allTodos[id].isDone = !allTodos[id].isDone;
      localStorage.setItem("todos", JSON.stringify(allTodos));
      createUI();
    }
  
    function createUI(data = allTodos) {
      root.innerHTML = "";
      data.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("input", handleToggle);
        input.setAttribute("data-id", index);
        input.checked = todo.isDone;
        let p = document.createElement("p");
        p.innerText = todo.name;
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id", index);
        span.addEventListener("click", handleDelete);
        li.append(input, p, span);
        root.append(li);
      });
    }
    createUI();
  
    all.classList.add("selected");  

    clear.addEventListener("click", () => {
        allTodos = allTodos.filter((todo) => !todo.isDone);
        createUI();
    });
    all.addEventListener("click", () => {
        createUI();
        defaultSelected = "all";
        updateActiveButton();
    });
    active.addEventListener("click", () => {
        let nocompleted = allTodos.filter((todo) => !todo.isDone);
        createUI(nocompleted);
        defaultSelected = "active";
        updateActiveButton();
    });
    completed.addEventListener("click", () => {
        let completedTodo = allTodos.filter((todo) => todo.isDone);
        createUI(completedTodo);
        defaultSelected = "completed";
        updateActiveButton();
    });
    function updateActiveButton(btn = defaultSelected){
        all.classList.remove("selected");
        active.classList.remove("selected");
        completed.classList.remove("selected");
        if(btn === "all"){
            all.classList.add("selected");
        }
        if(btn === "active"){
            active.classList.add("selected");
        }
        if(btn === "completed"){
            completed.classList.add("selected");
        }
    }
    updateActiveButton();
    inputText.addEventListener("keyup", handleInput);