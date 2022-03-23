import React from "react";
import "./ListDrivers.css";
import { Driver, drivers } from "../classes/Drivers";

export class ListDrivers extends React.Component<{
	id: string;
	drivers: Driver[];
	type: "sorted" | "championship" | "sort" | "drag";
}> {
	constructor(props: {
		id: string;
		drivers: Driver[];
		type: "sorted" | "championship" | "sort" | "drag";
	}) {
		super(props);
		if (this.props.type === "sorted" || this.props.type === "championship") {
			this.props.drivers.sort(function (a, b) {
				return b.points - a.points;
			});
		}
	}

	render() {
		return (
			<div className="list-group drivers" id={this.props.id}>
				{drivers.map(function (driver: Driver) {
					return (
						<div className="list-item driver">
							<div className="driver-country-div">
								<img
									className="driver-country"
									src={require(`../img/flags/${driver.country}.svg`)}
									alt={`${driver.country} flag`}
								/>
							</div>
							<img
								className="driver-number"
								src={require(`../img/numbers/${driver.name}.png`)}
								alt={driver.number.toString()}
							/>
							<div className="driver-name">{driver.name}</div>
							<div className="driver-givenName">{driver.givenName}</div>
							<img
								className="driver-profile"
								src={require(`../img/profile/${driver.name}.png`)}
								alt={`${driver.name} profile`}
							/>
							<img
								className="driver-team"
								src={require(`../img/teams/${driver.team.name}.png`)}
								alt={`${driver.team.name}`}
							/>
							<div className="driver-points">{driver.points}</div>
						</div>
					);
				})}
			</div>
		);
	}
}
