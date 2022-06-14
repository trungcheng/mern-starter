import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ResetPasswordVerify extends Component {

    constructor(props) {
        super(props);
        this.state = { resend: false };
    }

    componentWillMount() {
        this.email = this.props.location.query.email;
        if (!this.props.resetPasswordProgress || !this.email) {
            browserHistory.push('/auth/signup');
        }
    }

    resendEmail(props) {
        this.setState({ resend: true });
        this.props.resetPassword(props);
    }

    render() {
        return (
            <div className="content">
                <h1>Reset Password</h1>
                <h3>We've just emailed you password reset instructions at <u>{ this.email && this.email }</u></h3>
                {
                    !this.state.resend ?
                    <p className="resend" onClick={this.resendEmail.bind(this, { email: this.email })}>Resend instructions</p> :
                    <p className="resended">Reset password instructions has been resended</p>
                }
                {
                    this.props.errorMessage && this.props.errorMessage.resetPassword &&
                    <div className="error-container">{ this.props.errorMessage.resetPassword }</div>
                }
            </div>
        )
    }
}

export default ResetPasswordVerify;
