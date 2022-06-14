import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { ResetPasswordNew } from '../../components/auth';

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        successMessage: state.auth.success
    };
}

export default connect(mapStateToProps, actions)(ResetPasswordNew);
