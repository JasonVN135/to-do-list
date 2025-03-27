const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

	if (inputBox.value === '') {
		alert("No Task was listed");
	}

	else {
		let li = document.createElement("li");
		li.innerText = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}

	inputBox.value = "";
	saveData()
}

function saveData() {
	// Saves data in local storage under the tag "data"
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	// Loads the local storage "data" in the listContainer
	listContainer.innerHTML = localStorage.getItem("data");
}

// Listen to all click events
listContainer.addEventListener("click", function(e) {

	// If the event's target was a List Item, check it
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData()
	}

	// If the event's target was a Span Item (The delete button), delete it
	if (e.target.tagName === "SPAN") {
		// Remove the entire list item, not just the span
		e.target.parentElement.remove();
		saveData()
	}
}, false);

showTask();