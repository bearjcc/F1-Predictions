import type { Driver } from "../Interfaces";

export let teams: Team[] = [];
export class Team {
	drivers: Driver[] = [];
	points: number = 0;

	constructor(public name: string, public country: string, public color: string) {
		teams.push(this);
	}
}
