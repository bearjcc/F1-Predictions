export interface Team {
	name: string;
	country: string;
	points: number;
	drivers: object[];
	color: string;
}

export interface Driver {
	name: string;
	givenName: string;
	number: number;
	country: string;
	points: number;
	team: Team;
}

export interface Race {
	results: Driver[];
	fastest: Driver;
	completed: boolean;
	drivers: Driver[];
	startDate: Date;
	endDate: Date;
}

export interface Player {}

export interface User {
	username: string;
	icon: string;
	data: Object;
}
