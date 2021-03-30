import React, { Component } from 'react';
import './IPAddress.css'

let xhr;

class IPAddressContainer extends Component {
    state = {
        ipAddress: '...'
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ipinfo.io/json?token=3530d3e279c641', true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            this.setState({
                ipAddress: response.ip
            })
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.ipAddress}</h1>
                <p>This is your ip address probably</p>
            </>
        )
    }
}

export default IPAddressContainer;