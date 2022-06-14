import React, { Component, PropTypes } from 'react';

class TodoDetail extends Component {

    constructor(props) {
        super(props);
        this.onHandleClick = this.onHandleClick.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchDetail(this.props.params.todoId);
    }

    componentWillReceiveProps() {

    }

    onHandleClick() {
        this.context.router.push('/todos');
    }

    render() {
        if (!this.props.todoItem) {
            return <div>Loading...</div>;
        }

        return (
            <div className="content todos">
                <h2>{this.props.todoItem.name}</h2>
                <p>{this.props.todoItem.description}</p>
                <p><button onClick={ this.onHandleClick } className="btn btn-primary">Go back</button></p>
            </div>
        )
    }
}

export default TodoDetail;
