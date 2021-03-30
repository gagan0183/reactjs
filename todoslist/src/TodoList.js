import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    state = {
        items: []
    };

    addTodo = (e) => {
        const items = this.state.items;
        if (this._input.value) {
            items.unshift({
                key: Date.now(),
                value: this._input.value
            });    
        }
        this.setState({
            items
        });

        this._input.value = '';
        this._input.focus();
        e.preventDefault();
    }

    deleteTodo = (key) => {
        const items = this.state.items.filter(item => item.key !== key);
        this.setState({
            items
        });
    }

    render() {
        return (
            <div className="todoListItems">
                <form type="submit" className="todoListForm" onSubmit={this.addTodo}>
                    <input type="text" placeholder="enter todo" ref={e => this._input = e}/>
                    <button type="submit">Add</button>
                </form>
                <TodoItems deleteTodo={this.deleteTodo} items={this.state.items} />
            </div>
        )
    }
}

export default TodoList;