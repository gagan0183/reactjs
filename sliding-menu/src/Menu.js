import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        let visibility = 'hide';
        if (this.props.visibility) {
            visibility = 'show';
        }

        return (
            <div id='flyoutMenu' onMouseDown={this.props.handleMouseClick} className={visibility}>
                <h2><a href='#'>Home</a></h2>
                <h2><a href='#'>About</a></h2>
                <h2><a href='#'>Contact</a></h2>
                <h2><a href='#'>Search</a></h2>
            </div>
        )
    }
}

export default Menu;