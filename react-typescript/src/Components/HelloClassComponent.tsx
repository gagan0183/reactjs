import React from "react";

class HelloClassComponent extends React.Component<{name: string}, {message: string}> {
    state = {
        message: "enthusiasm"
    };
    render() {
        return <div>Hello from {this.props.name} with {this.state.message}</div>
    }
}

export default HelloClassComponent;