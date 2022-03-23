import React from "react";
import "./ListRaces.css";
import { Race, races } from "../classes/Races";

export class ListRaces extends React.Component<{races: Race[]}> {
	render() {
		return (
			<div className="list-group races">
				{races.map(function (race: Race) {
					return (
						<div className="list-item race">
							<div className="race-country-div">
								<img
									className="race-country"
									src={require(`../img/flags/${race.country}.svg`)}
									alt={`${race.country} flag`}
								/>
							</div>
							<div className="race-name">{race.shortName}</div>
							<img
								className="race-circuit-small"
								src={require(`../img/circuits/small/${race.shortName}.png`)}
								alt={`${race.shortName} circuit`}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}
