import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { Signin } from '../../components/auth';

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.error,
        successMessage: state.auth.success
    }
}

export default connect(mapStateToProps, actions)(Signin);
