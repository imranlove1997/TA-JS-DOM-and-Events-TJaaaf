let form = document.querySelector("form");
let errMessage = "";


function checkNum(value) {
    let num = value.split(" ").some((e) => Number(e));
    return num;
}

function handleSubmit(event){
    event.preventDefault();
    let userName = event.target.elements.username;
    let name = event.target.elements.name;
    let email = event.target.elements.email;
    let number = event.target.elements.number;
    let password = event.target.elements.password;
    let confirmPass = event.target.elements.cpassword;
    if(userName.value.length < 4) {
        errMessage = `${userName.value} can't be less than 4 characters`;
        userName.nextElementSibling.innerText = errMessage;
      } else {
        errMessage = "";
        userName.nextElementSibling.innerText = errMessage;
      }
    if(checkNum(name.value)){
        errMessage = "Name can't be numbers";
        name.nextElementSibling.innerText = errMessage;
    } else {
        errMessage = "";
        name.nextElementSibling.innerText = errMessage;
    }
    if(email.value.length < 6) {
        errMessage = `Not a valid email`;
        email.nextElementSibling.innerText = errMessage;
      } else {
        errMessage = "";
        email.nextElementSibling.innerText = errMessage;
      }
      if(number.value.length < 7) {
          errMessage = "Phone number can't be less than 7";
          number.nextElementSibling.innerText = errMessage;
      } else {
          errMessage = "";
          number.nextElementSibling.innerText = errMessage;
      }
    if(password.value !== confirmPass.value){
        errMessage = "Password and confirm password must be same.";
        password.nextElementSibling.innerText = errMessage;
        confirmPass.nextElementSibling.innerText = errMessage;
    } else {
        errMessage = "";
        password.nextElementSibling.innerText = errMessage;
        confirmPass.nextElementSibling.innerText = errMessage;
    }
    alert(`User Added Successfully!`);
}


form.addEventListener("submit", handleSubmit);