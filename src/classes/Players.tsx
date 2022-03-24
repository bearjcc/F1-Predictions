export let players: Player[] = [];

export class Player {
	public points: number = 0;

	constructor(public name: string) {
		players.push(this);
	}
}
