import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos } from '../../actions/todo-actions';
import TodoList from '../../components/todos/TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todo.list
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: bindActionCreators(fetchTodos, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
