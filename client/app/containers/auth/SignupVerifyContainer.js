import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { SignupVerify } from '../../components/auth';

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error, signup: state.auth.signup };
}

export default connect(mapStateToProps, actions)(SignupVerify);
