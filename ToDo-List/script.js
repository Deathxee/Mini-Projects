const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById('btn');
console.log(document.querySelector("#input-box"));
function addTask() {
    if(inputBox.value === "") {
        alert('You must enter a task')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

