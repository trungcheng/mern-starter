import React, { Component } from 'react';
import { Link } from 'react-router';

class TodoList extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }

    renderTodos(todos) {
        return todos.map((todo, i) => {
            return (
                <li className="list-group-item" key={todo.id}>
                    <Link to={`/todo/${todo.id}`}>
                        <strong>{ todo.name }</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        if (!this.props.todos) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Todos</h3>
                <ul className="list-group" style={{margin: '20px 0 0 0'}}>
                    { this.renderTodos(this.props.todos) }
                </ul>
            </div>
        )
    }
}

export default TodoList;
