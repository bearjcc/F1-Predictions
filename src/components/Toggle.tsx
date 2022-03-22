import React from "react";

export class Toggle extends React.Component<{}> {
    state:{isToggleOn:Boolean}
    constructor(props:any) {
      super(props);
      this.state = { isToggleOn: true };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState((prevState:{isToggleOn:Boolean}) => ({
        isToggleOn: !prevState.isToggleOn,
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      );
    }
  }