import React from "react";
import "./list.css";
import "../img/icons/drag.png";

export class List extends React.Component {
	render() {
		return (
			<div className="list-container">
				<div className="list">{this.props.children}</div>
			</div>
		);
	}
}

export class ListItem extends React.Component<{i:number, obj:{country:string}}> {
	render() {
		return (
			<li className="list-item" onClick={this.handleClick} key={`list${this.props.i}`}>
				<Position position={this.props.i}/>
				<DragIcon />
				<Flag country={this.props.obj.country} />
			</li>
		);
	}

	handleClick() {}
}

export class DragIcon extends React.Component {
	render() {
		return (
			<div className="draggy">
				<img src={require("../img/icons/drag.png")} alt="drag" />
			</div>
		)
	}
}

export class Flag extends React.Component<{country:string}> {
	render() {
		return (
			<div className="flag-container">
				<img className="flag" src={require(`../img/flags/${this.props.country}.svg`)} alt={`${this.props.country} flag`} />
			</div>
		);
	}
}

export class Position extends React.Component<{position:number}> {
	positions: string[] = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th"];
	render() {
		return (
			<div className="position">
				{this.positions[this.props.position]}
			</div>
		);
	}
}

export class DriverNumber extends React.Component<{ obj: { name: string, number: number } }> {
	render() {
		return (
			<div className="number">
				<img className="driverNumber" src={require(`../img/numbers/${this.props.obj.name}.png`)} alt={this.props.obj.number.toString()} />
			</div>
		);
	}
}

export class Name extends React.Component<{ largeName: string, smallName: string, smallFirst: Boolean}> {
	render() {
		return (
			<div className="2names">
				{this.props.smallFirst ? <div className="smallName">{this.props.smallName}</div> : <div className="largeName">{this.props.largeName}</div>}
				{this.props.smallFirst ? <div className="largeName">{this.props.largeName}</div> : <div className="smallName">{this.props.smallName}</div>}
			</div>
		);
	}
}
