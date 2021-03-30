import React, { Component } from 'react';
import './TodoItems.css';

class TodoItems extends Component {
    render() {
        const items = this.props.items;
        return (
            <ul className="todoItems">
                {items.map(item => <li className="item" onClick={() => this.props.deleteTodo(item.key)} key={item.key}>{item.value}</li>)}
            </ul>
        )
    }
}

export default TodoItems;