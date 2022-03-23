import React from "react";

class Test extends React.Component<{
	cake: string;
}> {
	render() {
		const cake = this.props.cake;
		return (
			<h2>
				<i>{cake}</i>
			</h2>
		);
	}
}

export default Test;
