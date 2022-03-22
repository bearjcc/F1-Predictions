function listToHTML(list, id, draggable) {
	var el = document.getElementById(id);
	el.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = list[i];
		el.appendChild(li);
	}

	if (draggable) {
		var sortable = Sortable.create(el);
	}
}

showRaces("races");
showDrivers("drivers", drivers, "sorted");
showTeams("teams");
