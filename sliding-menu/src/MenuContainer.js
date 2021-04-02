import React, { Component } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';

class MenuContainer extends Component {
    state = {
        visible: false
    }

    toggleMenu = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseClick = (e) => {
        this.toggleMenu();
        e.stopPropagation();
    }

    render() {
        console.log('MenuContains')
        return (
            <>
                <MenuButton handleMouseClick={this.handleMouseClick} />
                <Menu handleMouseClick={this.handleMouseClick} visibility={this.state.visible}/>
            </>
        )
    }
}

export default MenuContainer;