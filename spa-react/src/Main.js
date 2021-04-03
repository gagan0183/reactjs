import React, { Component } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import Stuff from './Stuff';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple App</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contacts" component={Contacts} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;