import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/post-actions';
import { PostList } from '../../components/posts';

const mapStateToProps = (state) => {
    return {
        posts: state.post.list
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: bindActionCreators(fetchPosts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
