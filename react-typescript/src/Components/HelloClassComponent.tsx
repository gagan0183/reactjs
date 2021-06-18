import React from "react";

class HelloClassComponent extends React.Component<{name: string}, {}> {
    render() {
        return <div>Hello from {this.props.name}</div>
    }
}

export default HelloClassComponent;