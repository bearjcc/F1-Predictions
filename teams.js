let teams = [];

class Team {
	constructor(name, country) {
		this.name = name;
		teams.push(this);
		this.drivers = [];
		this.points = 0;
		this.country = country;
	}
}

function showTeams(id) {
	var el = document.getElementById(id);
	let html = `<h2 class="list-header">Teams</h2>
    <div class="list-group teams">`;
	for (var i = 0; i < teams.length; i++) {
		html += `<div class="list-group-item team">
        <span class="team-country-span">
        <img class="team-country" src="/img/flags/${teams[i].country}.svg"/>
        </span>
        <img class="team-icon" src="/img/teams/${teams[i].name}.png"/>
        <span class="team-name">${teams[i].name}</span>
        <span class="team-points">${teams[i].points}</span>
		<span class="team-stripes ${teams[i].name}"><b></b><i></i></span>
        </div>`;
	}
	html += `</div>`;
	el.innerHTML = html;
}

let ferrari = new Team("Ferrari", "Italy");
let mercedes = new Team("Mercedes", "Germany");
let haas = new Team("Haas", "USA");
let alfaRomeo = new Team("Alfa Romeo", "Italy");
let alpine = new Team("Alpine", "France");
let alphaTauri = new Team("AlphaTauri", "Italy");
let astonMartin = new Team("Aston Martin", "Great Britain");
let williams = new Team("Williams", "Great Britain");
let mclaren = new Team("McLaren", "Great Britain");
let redBull = new Team("Red Bull", "Austria");
