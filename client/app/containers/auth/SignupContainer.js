import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { Signup } from '../../components/auth';

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Signup);
