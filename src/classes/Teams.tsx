import {Driver} from "./Drivers";

export let teams:Team[] = [];
export class Team {
	drivers:Driver[] = [];
	points:number = 0;

	constructor(
		public name:string,
		public country:string) 
	{
		teams.push(this);
	}
}

// export class showTeams extends React.Component {

// 	render() {
// 		return(
// 		<div className="list-group teams" >
// 			{teams.map(function(team:Team) {
// 				return <div className="list-group-item team">
// 					<span className="team-country-span">
// 					<img className="team-country" src={require(`img/flags/${team.country}.svg`)} alt={`${team.country} flag`}/>
// 					</span>
// 					<img className="team-icon" src={require(`img/teams/${team.name}.png`)} alt={team.name}/>
// 					<span className="team-name">${team.name}</span>
// 					<span className="team-points">${team.points}</span>
// 					<img className="team-car" src={require(`img/cars/${team.name}.png`)} alt={`${team.name} car`}/>
// 					<span className={`team-stripes ${team.name}`}><b></b><i></i></span>
// 				</div>
// 			})}
// 		</div>
// 		)
// 	}
// }

// function toggleClick(el:HTMLElement) {
// 	el.classList.toggle("clicked");
// }
