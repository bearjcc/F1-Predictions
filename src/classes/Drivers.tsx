import {Race} from "./Races";
import {Team} from "./Teams"

export let drivers:Driver[] = [];
export class Driver {
	public points:number = 0;
	public finishes:{race:Race, pos:number}[] = [];
	public sprints:{race:Race, pos:number}[] = [];
	public fastest:Race[] = [];

	constructor(
		public name:string,
		public givenName:string, 
		public team:Team, 
		public number:number,
		public country:string
		) {
			drivers.push(this);
			this.setTeam(team);
	}

	setTeam(team:Team) {
		this.team = team;
		team.drivers.push(this);
	}

	addPoints(points:number) {
		this.points += points;
		this.team.points += points;
	}
}


// export class showDrivers extends React.Component {
// 	private id:string;
// 	private drivers:Driver[];
// 	private type:"sorted" | "championship" | "sort" | "drag";
	
// 	constructor(props:{
// 		id:string,
// 		drivers:Driver[],
// 		type:"sorted" | "championship" | "sort" | "drag"
// 	}) {
// 		super(props);
// 		if (this.type === "sorted" || this.type === "championship") {
// 			this.drivers.sort(function (a, b) {
// 				return b.points - a.points;
// 			});
// 		}
// 	}

// 	render() {
// 		return (
// 		<div className="list-group drivers" id={this.id}>

// 		{drivers.map(function(driver:Driver) {
// 			return <div className="list-group-item driver">
// 			<span className="driver-country-span">
// 			<img className="driver-country" src={require(`img/flags/${driver.country}.svg`)} alt={`${driver.country} flag`}/>
// 			</span>
// 			<img className="driver-number" src={require(`img/numbers/${driver.name}.png`)} alt={driver.number.toString()}/>
// 			<span className="driver-name">{driver.name}</span>
// 			<span className="driver-givenName">{driver.givenName}</span>
// 			<span className="driver-points">{driver.points}</span>
// 			<img className="driver-team" src={require(`img/teams/${driver.team.name}.png`)} alt={`${driver.team.name}`}/>
// 			<img className="driver-profile" src={require(`img/profile/${driver.name}.png`)} alt={`${driver.name} profile`}/>
// 			</div>
// 		})}
// 		</div>
// 		);
// 	}
// }
