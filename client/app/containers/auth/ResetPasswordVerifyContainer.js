import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { ResetPasswordVerify } from '../../components/auth';

function mapStateToProps(state) {
    return { resetPasswordProgress: state.auth.resetPassword, errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(ResetPasswordVerify);
