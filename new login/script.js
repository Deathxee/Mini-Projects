const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signupBtn = document.getElementById("signupbtn");
const signinBtn = document.getElementById("signinbtn");
const toggleField = document.querySelector(".toggle");
const userName = document.querySelector(".userName");
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");


const setLocalStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageValue = (key) => {
  return JSON.parse(localStorage.getItem(key));
};



toggleField.onclick = function () {
  if (signinBtn.classList.contains("disable")) {
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    toggleField.innerHTML = "Sign Up";
    title.innerHTML = "Sign In";
    nameField.style.maxHeight = "0";
    nameField.style.border = "none"
  } else if (signupBtn.classList.contains("disable")) {
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    toggleField.innerHTML = "Sign In";
    title.innerHTML = "Sign Up";
    nameField.style.maxHeight = "65px";
    nameField.style.border = "2px solid #1449CA";
  }
};

let userInfo = [];



if (localStorage.getItem("userInfo")) {
  userInfo = getLocalStorageValue("userInfo");
}

signupBtn.onclick = () => {
  let user = {
    name: userName.value,
    pass: userPassword.value,
    email: userEmail.value,
  };

  userInfo.push(user);
  setLocalStorageValue(userInfo, userInfo);
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
    } else {
      console.log("Email incorrect");
    }
  });

  userInfo.forEach((element) => {
    let Pass = element.pass;
    let name = element.name;
    if (userPassword.value == Pass) {
      console.log("Password correct");
      checkPassword = true;
    } else {
      console.log("Password incorrect");
    }

    if (checkPassword && userPassword) {
      console.log("User Loged In");
    } else {
      console.log("User not found");
    }
  });
});

function displayLoggedInUser() {
  if (getLocalStorageValue("loggedInUser")) {
    const loggedInUser = getLocalStorageValue("loggedInUser");
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
    setLocalStorageValue("loggedInUser", element);
    displayLoggedInUser();
  }
});
window.onload = function () {
  displayLoggedInUser();
};
function displayLoggedInUser() {
  if (localStorage.getItem("loggedInUser")) {
    const loggedInUser = getLocalStorageValue("loggedInUser");
    const loggedInUserName = loggedInUser.name;
    document.getElementById("loggedInUserName").textContent = loggedInUserName;
  }
}
