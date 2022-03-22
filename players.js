let players = [];

class Player {
	constructor(name) {
		players.push(this);
		this.name = name;
		this.points = 0;
	}
}

function showPlayers(id) {
	var el = document.getElementById(id);
	let html = `<div class="list-group players">`;
	for (var i = 0; i < players.length; i++) {
		html += `<div class="list-group-item player">
        <img class="player-icon" src="img/players/${players[i].name}.png"/>
        <span class="player-name">${players[i].name}</span>
        <span class="player-points">${players[i].points}</span>
        </div>`;
	}
	html += `</div>`;
	el.innerHTML = html;
}

let bear = new Player("Bear");
let zoe = new Player("Zoe");
let rebecca = new Player("Rebecca");

let bot2020 = new Player("Bot2020");
let bot2021 = new Player("Bot2021");
let maximum = new Player("Maximum");
let minimum = new Player("Minimum");
let prevRace = new Player("Previous Race Bot");
let random = new Player("Random");
