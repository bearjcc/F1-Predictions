import React from "react";
import "./tabs.css";

export class Tabs extends React.Component {
	tabNames: string[] = [];
	children: any[] = [];

	render() {
		React.Children.forEach(this.props.children, (child: any) => {
			if (child.type === "div") {
				this.tabNames.push(child.props.id);
				this.children.push(child);
			}
		});

		return (
			<div className="tab-container">
				<div className="tabs">
					{this.tabNames.map((tabName: string, i: number) => (
						<TabButton tabName={tabName} first={i === 0} />
					))}
				</div>
				{this.children.map((child: any, i: number) => (
					<TabContent tabName={child.props.id} first={i === 0}>
						{child}
					</TabContent>
				))}
			</div>
		);
	}
}

class TabButton extends React.Component<{ tabName: string; first: Boolean }> {
	constructor(props: any) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<button
				className={this.props.first ? "tab active" : "tab"}
				id={this.props.tabName + "Button"}
				onClick={this.handleClick}
			>
				{this.props.tabName}
			</button>
		);
	}

	handleClick() {
		document.querySelector(".active.tab").classList.remove("active");
		document
			.querySelector(".active.tab-content")
			.classList.remove("active");
		document
			.querySelector(`#${this.props.tabName}Button`)
			.classList.add("active");
		document
			.querySelector("#" + this.props.tabName)
			.classList.add("active");
	}
}

class TabContent extends React.Component<{ tabName: string; first: Boolean }> {
	render() {
		return (
			<div
				className={
					this.props.first ? "tab-content active" : "tab-content"
				}
				id={this.props.tabName}
			>
				{this.props.children}
			</div>
		);
	}
}
