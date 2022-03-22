import React from "react";
import "./list.css";

export class List extends React.Component {
	render() {
		return (
			<div className="list-container">
				<div className="list">{this.props.children}</div>
			</div>
		);
	}
}

export class ListItem extends React.Component {
	render() {
		return (
			<li className="list-item" onClick={this.handleClick}>
				{this.props.children}
			</li>
		);
	}

	handleClick() {}
}
