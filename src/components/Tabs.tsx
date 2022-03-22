import React from "react";
import "./tabs.css";

export class Tabs extends React.Component {
    tabNames:string[] = [];
    children:any[] = [];
    
    render() {
        React.Children.forEach(this.props.children, (child: any) => {
            if (child.type === "div") {
                this.tabNames.push(child.props.id);
                this.children.push(child);
            }
        });

        return <div className="tab-container">
            <div className="tabs">
                {this.tabNames.map((tabName: string) => <TabButton tabName={tabName} />)}
            </div>
            {this.children.map((child: any) => <TabContent tabName={child.props.id}>{child}</TabContent>)}
        </div>
    }
}

class TabButton extends React.Component<{tabName:string}> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <button className="tab" id={this.props.tabName + "Button"}>{this.props.tabName}</button>
    }

    handleClick() {
        console.log(document.getElementById(this.props.tabName).classList.toggle("active"));
    }

}

class TabContent extends React.Component<{tabName:string}> {
    render() {
        return <div className="tabcontent" id={this.props.tabName}>{this.props.children}</div>
    }
}