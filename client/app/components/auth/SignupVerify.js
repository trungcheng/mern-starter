import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignupVerify extends Component {

    constructor(props) {
        super(props);
        this.state = { resend: false };
    }

    componentWillMount() {
        this.email = this.props.location.query.email;
        if (!this.props.signup || !this.email) {
            browserHistory.push('/auth/signup');
        }
    }

    resendEmail(props) {
        this.setState({ resend: true });
        this.props.resendVerification(props);
    }

    render() {
        return (
            <div className="content">
                <h1>Activate account</h1>
                <h3>Please confirm the verification code we've just emailed you at <u>{ this.email && this.email }</u></h3>
                {
                    !this.state.resend ?
                    <p className="resend" onClick={this.resendEmail.bind(this, { email: this.email })}>Resend email verification code</p> :
                    <p className="resended">Email verification code has been resended</p>
                }
                {
                    this.props.errorMessage && this.props.errorMessage.signupResend &&
                    <div className="error-container">{ this.props.errorMessage.signupResend }</div>
                }
            </div>
        )
    }
}

export default SignupVerify;
