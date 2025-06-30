var ul = document.getElementById("list-container");
var input = document.getElementById("input");
window.onload = function() {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) {
        saved.forEach(task => addTaskToUI(task));
    }
};
function add() {
    const task = input.value.trim();
    if (task === "") return;
    addTaskToUI(task);
    saveTask(task);
    input.value = "";
}
function addTaskToUI(task) {
    var listitem = document.createElement("li");
    listitem.innerHTML = task + " " +
        "<button onclick='deleteItem(event)'>Delete</button>";
    ul.append(listitem);
}
function saveTask(task) {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(task);
    localStorage.setItem("tasks", JSON.stringify(saved));
}
function deleteItem(event) {
    const item = event.target.parentElement;
    const taskText = item.firstChild.textContent.trim();
    // Remove from localStorage
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved = saved.filter(t => t !== taskText);
    localStorage.setItem("tasks", JSON.stringify(saved));
    // Remove from UI
    item.remove();
}
