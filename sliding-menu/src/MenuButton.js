import React, { Component, PureComponent } from 'react';
import './MenuButton.css';

class MenuButton extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.handleMouseClick === this.props.handleMouseClick) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render() {
        console.log('Menubuttons')
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseClick} />
        )
    }
}

export default MenuButton;