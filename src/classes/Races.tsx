import { Driver, drivers } from "./Drivers";

export let races: Race[] = [];

let racePoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
let sprintPoints = [8, 7, 6, 5, 4, 3, 2, 1];

export class Race {
	results: Driver[] = [];
	fastest: Driver;
	completed: boolean = false;
	drivers: Driver[];
	startDate: Date = new Date();
	endDate: Date = new Date();

	constructor(public shortName: string, public country: string, public dates: string) {
		races.push(this);
		this.drivers = [...drivers];
		this.startDate.setDate(Date.parse(dates.substring(0, 5) + ", 2022"));
		this.endDate = new Date();
		this.endDate.setDate(this.startDate.getDate() + 2);
	}

	removeDriver(driver: Driver) {
		let index = this.drivers.indexOf(driver);
		if (index > -1) {
			this.drivers.splice(index, 1);
		}
	}

	raceEnded(results: Driver[], fastest: Driver) {
		this.results = results;
		this.fastest = fastest;
		this.completed = true;

		fastest.addPoints(1);

		for (var i = 0; i < 10; i++) {
			this.results[i].addPoints(racePoints[i]);
			this.results[i].finishes.push({ race: this, pos: i });
		}
	}
}

export class Sprint extends Race {
	constructor(race: Race, date: string) {
		super(race.shortName, race.country, date);
		this.shortName += " Sprint";
	}

	raceEnded(results: Driver[]) {
		this.results = results;
		this.completed = true;

		for (var i = 0; i < 10; i++) {
			this.results[i].addPoints(sprintPoints[i]);
			this.results[i].finishes.push({ race: this, pos: i });
		}
	}
}
