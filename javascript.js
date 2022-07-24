let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

let createListItem = () => {
	let li = document.createElement("li");
	let div = document.createElement("div");
	let delButton = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);

	div.append(li, delButton);

	div.classList.add("wrapper");
	li.classList.add("taskClass");
	delButton.classList.add("delClass");

	delButton.innerHTML = "DEL";

	input.value = "";
}

let addClick = () => {
	if(input.value.length > 0) {
		createListItem();
	}
}

let addKeyPress = () => {
	if(input.value.length > 0 && event.which === 13) {
		createListItem();
	}
}

button.addEventListener("click", addClick);

input.addEventListener("keypress", addKeyPress);

let doneTask = (task) => {
	if(task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
}

let deleteListItem = (element) => {
	if(element.target.className === "delClass") {
		element.target.parentElement.remove();
	}
}

let handleUlClick = (element) => {
	doneTask(element);
	deleteListItem(element);
}

ul.addEventListener("click", handleUlClick);



