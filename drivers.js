let drivers = [];

class Driver {
    constructor(name, givenName, team, number, country) {
        drivers.push(this);
        this.name = name;
        this.givenName = givenName;
        this.team = team;
        this.number = number;
        this.country = country;
        
        this.points = 0;
        this.finishes = [];
        this.sprints = [];
        this.fastest = [];
    }

    setTeam(team) {
        this.team = team;
        team.drivers.push(this)
    }

    addPoints(points) {
        this.points += points;
        this.team.points += points;
    }

}

function showDrivers(id, drivers, type) {
    if(type == "sorted" || type == "championship") {
        drivers.sort(function(a, b) {
            return b.points - a.points;
        });
    }
    var el = document.getElementById(id);
    let html = `<h2 class="list-header">Drivers</h2>
    <div class="list-group drivers">`

    for (var i = 0; i < drivers.length; i++) {
        html += `<div class="list-group-item driver">
        <span class="driver-country-span">
        <img class="driver-country" src="/img/flags/${drivers[i].country}.svg"/>
        </span>
        <img class="driver-number" src="/img/numbers/${drivers[i].name}.png"/>
        <span class="driver-name">${drivers[i].name}</span>
        <span class="driver-givenName">${drivers[i].givenName}</span>
        <span class="driver-points">${drivers[i].points}</span>
        <img class="driver-team" src="/img/teams/${drivers[i].team.name}.png" />
        </div>`
    }
    html += `</div>`
    el.innerHTML = html

    if(type == "sort") {
        Sortable.create(el.lastChild, {
            animation: 150,

        });
    }

}

let leclerc = new Driver("Leclerc", "Charles", ferrari, 16, "Monaco");
let sainz = new Driver("Sainz", "Carlos", ferrari, 55, "Spain");
let hamilton = new Driver("Hamilton", "Lewis", mercedes, 44, "Great Britain");
let russell = new Driver("Russell", "George", mercedes, 63, "Great Britain");
let magnussen = new Driver("Magnussen", "Kevin", haas, 20, "Denmark");
let bottas = new Driver("Bottas", "Valtteri", alfaRomeo, 77, "Finland");
let ocon = new Driver("Ocon", "Esteban", alpine, 31, "France");
let tsunoda = new Driver("Tsunoda", "Yuki", alphaTauri, 22, "Japan");
let alonso = new Driver("Alonso", "Fernando", alpine, 14, "Spain");
let zhou = new Driver("Zhou", "Guanyu", alfaRomeo, 24, "China");
let schumacher = new Driver("Schumacher", "Mick", haas, 47, "Germany");
let stroll = new Driver("Stroll", "Lance", astonMartin, 17, "Canada");
let albon = new Driver("Albon", "Alex", williams, 23, "Thailand");
let ricciardo = new Driver("Ricciardo", "Daniel", mclaren, 3, "Australia");
let norris = new Driver("Norris", "Lando", mclaren, 4, "Great Britain");
let latifi = new Driver("Latifi", "Nicholas", williams, 33, "Canada");
let hulkenberg = new Driver("Hulkenberg", "Nico", astonMartin, 27, "Germany");
let perez = new Driver("Perez", "Sergio", redBull, 11, "Mexico");
let verstappen = new Driver("Verstappen", "Max", redBull, 1, "Netherlands");
let gasly = new Driver("Gasly", "Pierre", alphaTauri, 10, "France");
let vettel = new Driver("Vettel", "Sebastian", astonMartin, 5, "Germany");
