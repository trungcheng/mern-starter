import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetail } from '../../actions/post-actions';
import { UserProfile } from '../../components/user';

const mapStateToProps = (state) => {
    return {
        post: state.post.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetail: bindActionCreators(fetchDetail, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
