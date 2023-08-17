

let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let signupBtn = document.getElementById("signupbtn");
let signinBtn = document.getElementById("signinbtn");
let toggleField = document.querySelector(".toggle");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");

toggleField.onclick = function () {
  if (signinBtn.classList.contains("disable")) {
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    toggleField.innerHTML = "Sign Up";
    title.innerHTML = "Sign In";
    nameField.style.maxHeight = "0";
  } else if (signupBtn.classList.contains("disable")) {
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    toggleField.innerHTML = "Sign In";
    title.innerHTML = "Sign Up";
    nameField.style.maxHeight = "65px";
  }
};

let userInfo = []; 


if (localStorage.getItem("userInfo")) {
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
}

signupBtn.onclick = () => {
  let user = {
    name: userName.value,
    pass: userPassword.value,
    email: userEmail.value,
  };

  userInfo.push(user);
  localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Save the updated user info
  console.log(userInfo);
};

userInfo.forEach((element) => {
  console.log(element.email);
});

let checkEmail = false;


let checkPassword = false;

signinBtn.addEventListener("click", function name(params) {
  userInfo.forEach((element) => {
    let Email = element.email;

    if (userEmail.value == Email) {
      console.log("Email correct");
      checkEmail = true;
    }
    else{
      console.log("Email incorrect");
    }
  })
  

  userInfo.forEach(element => {
    let Pass = element.pass
    let name = element.name
  if (userPassword.value == Pass){
    console.log('Password correct');
    checkPassword = true
    
  }
  else{
    console.log("Password incorrect");
  }

  if (checkPassword && userPassword ){
    console.log("User Loged In");
    
  }
  else{
    console.log("User not found");
  }
});
});


function displayLoggedInUser() {
  if (localStorage.getItem("loggedInUser")) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loggedInUserName = loggedInUser.name;
    document.getElementById("loggedInUserName").textContent = loggedInUserName;
  }
}

signinBtn.addEventListener("click", function () {
  let checkEmail = false;
  let checkPassword = false;

  userInfo.forEach((element) => {
    let Email = element.email;

    if (userEmail.value === Email) {
      console.log("Email correct");
      checkEmail = true;

      if (userPassword.value === element.pass) {
        console.log("Password correct");
        checkPassword = true;

        if (checkEmail && checkPassword) {
          console.log("User Logged In");
          localStorage.setItem("loggedInUser", JSON.stringify(element));
          displayLoggedInUser(); 
        }
      } else {
        console.log("Password incorrect");
      }
    }
  });

  if (!checkEmail) {
    console.log("Email not found");
  }
});

signinBtn.addEventListener("click", function () {

  if (checkEmail && checkPassword) {
    console.log("User Logged In");
    localStorage.setItem("loggedInUser", JSON.stringify(element));
    displayLoggedInUser();
  }
});
window.onload = function () {
  displayLoggedInUser();
};
function displayLoggedInUser() {
  if (localStorage.getItem("loggedInUser")) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loggedInUserName = loggedInUser.name;
    document.getElementById("loggedInUserName").textContent = loggedInUserName;
  }
}
