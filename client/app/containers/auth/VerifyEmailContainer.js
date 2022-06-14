import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { VerifyEmail } from '../../components/auth';

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(VerifyEmail);
