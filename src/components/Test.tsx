import React from "react";

class Test extends React.Component<{
    cake:string
}> {

    render() {
        return (
            <h2>
            <i>{this.props.cake}</i>
            </h2>
        );
    }
}

export default Test;