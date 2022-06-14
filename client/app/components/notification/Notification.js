import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notifications from '../../actions/notification-actions';

class MyNotification extends React.Component {
    render () {
        const { notification } = this.props;
        console.log(notification);

        return (
            <MuiThemeProvider>
                <Snackbar
                    open={notification.isOpen}
                    message={notification.message}
                    autoHideDuration={3000}
                />
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(notifications, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNotification);