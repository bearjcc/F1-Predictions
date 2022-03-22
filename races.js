let races = [];

let racePoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
let sprintPoints = [8, 7, 6, 5, 4, 3, 2, 1];

class Race {
	results = [];
	fastest;
	completed = false;

	constructor(shortName, country, dates) {
		races.push(this);
		this.shortName = shortName;
		this.country = country;
		this.drivers = [...drivers];
		this.dates = dates;
		this.startDate = new Date(Date.parse(dates.substr(0, 6) + ", 2022"));
		this.endDate = new Date();
		this.endDate.setDate(this.startDate.getDate() + 2);
	}

	removeDriver(driver) {
		let index = this.drivers.indexOf(driver);
		if (index > -1) {
			this.drivers.splice(index, 1);
		}
	}

	raceEnded(results, fastest) {
		this.results = results;
		this.fastest = fastest;
		this.completed = true;

		fastest.addPoints(1);

		for (var i = 0; i < 10; i++) {
			this.results[i].addPoints(racePoints[i]);
			this.results[i].finishes.push({ race: this, result: i });
		}
	}
}

class Sprint extends Race {
	constructor(race, date) {
		super(race.shortName, race.country);
		this.shortName += " Sprint";
		this.dates = date;
	}

	raceEnded(results) {
		this.results = results;
		this.fastest = fastest;
		this.completed = true;

		for (var i = 0; i < 8; i++) {
			this.drivers[i].points += sprintPoints[i];
			this.drivers[i].sprints.push({ race: this, result: i });
		}
	}
}

function showRaces(id) {
	var el = document.getElementById(id);
	let html = `<h2 class="list-header">Races</h2>
    <div class="list-group races">`;
	for (var i = 0; i < races.length; i++) {
		html += `<div class="list-group-item race" onclick="toggleClick(this)">
		<span class="race-country-flag-span">
        <img class="race-country-flag" src="img/flags/${races[i].country}.svg"/>
		</span>
        <span class="race-round">${i + 1}</span>
        <span class="race-shortName">${races[i].shortName}</span>
        <span class="race-dates">${races[i].dates}</span>
        <img class="race-circuit-small" src="img/circuits/small/${
			races[i].shortName
		}.png"/>
		<img class="race-circuit-full" src="img/circuits/full/${
			races[i].shortName
		}.png"/>
        </div>`;
	}
	html += `</div>`;
	el.innerHTML = html;
}

let bahrain = new Race("Bahrain", "Bahrain", "Mar 18-20");
bahrain.removeDriver(vettel);
bahrain.raceEnded(
	[
		leclerc,
		sainz,
		hamilton,
		russell,
		magnussen,
		bottas,
		ocon,
		tsunoda,
		alonso,
		zhou,
		schumacher,
		stroll,
		albon,
		ricciardo,
		norris,
		latifi,
		hulkenberg,
		perez,
		verstappen,
		gasly,
	],
	leclerc
);

let jeddah = new Race("Jeddah", "Saudi Arabia", "Mar 25-27");
let australia = new Race("Australia", "Australia", "Apr 08-10");
let imola = new Race("Imola", "Italy", "Apr 22-24");
// let imolaSprint = new Sprint(imola);
let miami = new Race("Miami", "USA", "May 06-08");
let spain = new Race("Spain", "Spain", "May 20-22");
let monaco = new Race("Monaco", "Monaco", "May 27-29");
let baku = new Race("Baku", "Azerbaijan", "Jun 20-12");
let canada = new Race("Canada", "Canada", "Jun 17-19");
let silverstone = new Race("Silverstone", "Great Britain", "Jul 01-03");
let austria = new Race("Austria", "Austria", "Jul 08-10");
// let austrianSprint = new Sprint(austria);
let france = new Race("France", "France", "Jul 22-24");
let hungary = new Race("Hungary", "Hungary", "Jul 29-31");
let spa = new Race("Spa", "Belgium", "Aug 26-28");
let dutch = new Race("Dutch", "Netherlands", "Sep 02-04");
let monza = new Race("Monza", "Italy", "Sep 09-11");
let singapore = new Race("Singapore", "Singapore", "Sep 30-02");
let japan = new Race("Japan", "Japan", "Oct 07-09");
let austin = new Race("COTA", "USA", "Oct 21-23");
let mexico = new Race("Mexico", "Mexico", "Oct 28-30");
let brazil = new Race("Brazil", "Brazil", "Nov 11-13");
// let brazilSprint = new Sprint(brazil);
let abudhabi = new Race("Abu Dhabi", "UAE", "Nov 18-20");
