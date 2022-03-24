import { Race, Team } from "../Interfaces";

export let drivers: Driver[] = [];
export class Driver {
	public points: number = 0;
	public finishes: { race: Race; pos: number }[] = [];
	public sprints: { race: Race; pos: number }[] = [];
	public fastest: Race[] = [];

	constructor(
		public name: string,
		public givenName: string,
		public team: Team,
		public number: number,
		public country: string,
		public tla: string
	) {
		drivers.push(this);
		this.setTeam(team);
	}

	setTeam(team: Team) {
		this.team = team;
		team.drivers.push(this);
	}

	addPoints(points: number) {
		this.points += points;
		this.team.points += points;
	}
}
