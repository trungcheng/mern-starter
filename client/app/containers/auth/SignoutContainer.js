import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import { Signout } from '../../components/auth';

export default connect(null, actions)(Signout);
