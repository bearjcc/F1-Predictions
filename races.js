let races = []

let racePoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
let sprintPoints = [8,7,6,5,4,3,2,1]

class Race {
    results = [];
    fastest;
    completed = false;
    
    constructor(shortName, country) {
        races.push(this)
        this.shortName = shortName
        this.country = country
        this.drivers = [...drivers]
    }

    removeDriver(driver) {
        let index = this.drivers.indexOf(driver)
        if (index > -1) {
            this.drivers.splice(index, 1)
        }
    }

    raceEnded(results, fastest) {
        this.results = results
        this.fastest = fastest
        this.completed = true

        for (var i = 0; i < 10; i++) {
            this.drivers[i].addPoints(racePoints[i])
            this.drivers[i].finishes.push({race: this, result: i})

            if(this.drivers[i] === fastest) {
                this.drivers[i].addPoints(1)
                this.drivers[i].fastest.push(this)
            }
        }
    }
}

class Sprint extends Race {
    constructor(race) {
        super(race.shortName, race.country)
        this.shortName += " Sprint"
    }

    raceEnded(results) {
        this.results = results
        this.fastest = fastest
        this.completed = true

        for (var i = 0; i < 8; i++) {
            this.drivers[i].points += sprintPoints[i]
            this.drivers[i].sprints.push({race: this, result: i})
        }
    }
}

function showRaces(id) {
    var el = document.getElementById(id);
    let html = `<h2 class="list-header">Races</h2>
    <div class="list-group races">`
    for (var i = 0; i < races.length; i++) {
        html += `<div class="list-group-item race">
        <img class="race-country-flag" src="/img/flags/${races[i].country}.svg"/>
        <span class="race-shortName">${races[i].shortName}</span>
        </div>`
    }
    html += `</div>`
    el.innerHTML = html
}


let bahrain = new Race("Bahrain", "Bahrain")
bahrain.removeDriver(vettel)
bahrain.raceEnded([leclerc, sainz, hamilton, russell, magnussen, bottas, ocon, tsunoda, alonso, zhou, schumacher, stroll, albon, ricciardo, norris, latifi, hulkenberg, perez, verstappen, gasly], leclerc)

let saudi = new Race("Saudi Arabia", "Saudi Arabia")
let australia = new Race("Australia", "Australia")
let imola = new Race("Imola", "Italy")
let imolaSprint = new Sprint(imola)
let miami = new Race("Miami", "USA")
let spain = new Race("Spain", "Spain")
let monaco = new Race("Monaco", "Monaco")
let azerbaijan = new Race("Azerbaijan", "Azerbaijan")
let canada = new Race("Canada", "Canada")
let britain = new Race("Britain", "Great Britain")
let austria = new Race("Austria", "Austria")
let austrianSprint = new Sprint(austria)
let france = new Race("France", "France")
let hungary = new Race("Hungary", "Hungary")
let belgium = new Race("Belgium", "Belgium")
let dutch = new Race("Dutch", "Netherlands")
let monza = new Race("Monza", "Italy")
let singapore = new Race("Singapore", "Singapore")
let japan = new Race("Japan", "Japan")
let austin = new Race("Austin", "USA")
let mexico = new Race("Mexico", "Mexico")
let brazil = new Race("Brazil", "Brazil")
let brazilSprint = new Sprint(brazil)
let abudhabi = new Race ("Abu Dhabi", "UAE")