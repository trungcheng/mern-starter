import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, fetchCate } from '../../actions/post-actions';
import { PostNew } from '../../components/posts';

const mapStateToProps = (state) => {
    return {
        categories: state.post.categories,
        initialValues: state.post.initialValues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: bindActionCreators(addPost, dispatch),
        fetchCate: bindActionCreators(fetchCate, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
