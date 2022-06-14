import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetail } from '../../actions/todo-actions';
import TodoDetail from '../../components/todos/TodoDetail';

const mapStateToProps = (state) => {
    return {
        todoItem: state.todo.todoItem
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetail: bindActionCreators(fetchDetail, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);
