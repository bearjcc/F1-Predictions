export interface Team {
	name: string;
	country: string;
	points: number;
	drivers: object[];
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
	completed: Boolean;
	drivers: Driver[];
	startDate: Date;
	endDate: Date;
}
