function addTask() {

    let input = document.getElementById("task");

    if (input.value == "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = input.value + " ";

    let button = document.createElement("button");

    button.textContent = "Remove";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(button);

    document.getElementById("list").appendChild(li);

    input.value = "";
}