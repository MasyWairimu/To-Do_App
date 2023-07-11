const inputBox = document.getElementById("taskBox");
const listContainer = document.getElementById("tasks");

function addTask(){
    if(inputBox.value === ""){
        alert("OOPS!! YOU MUST WRITE SOMETHING");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

listContainer.addEventListener("click", e => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("content");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
})

function saveTasks(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
