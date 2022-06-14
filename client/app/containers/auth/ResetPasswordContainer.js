import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { ResetPassword } from '../../components/auth';

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(ResetPassword);
