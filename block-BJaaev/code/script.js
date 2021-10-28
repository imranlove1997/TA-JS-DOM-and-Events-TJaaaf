
    let inputText = document.querySelector("#todo");
    let root = document.querySelector("ul");
  
    let allTodos = [];
  
    function handleInput(event) {
      let value = event.target.value;
      if (event.keyCode === 13 && value !== "") {
        let todo = {
          name: value,
          isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI(allTodos, root);
      }
    }
    // span
    function handleDelete(event) {
      let id = event.target.dataset.id;
      allTodos.splice("id, 1");
      createUI(allTodos, root);
    }
    // handleToggle
    function handleToggle(event) {
      let id = event.target.dataset.id;
      allTodos[id].isDone = !allTodos[id].isDone;
      createUI(allTodos, root);
    }
  
    function createUI(data, rootElement) {
      rootElement.innerHTML = "";
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
        rootElement.append(li);
      });
    }
    createUI(allTodos, root);
  
    inputText.addEventListener("keyup", handleInput);
 