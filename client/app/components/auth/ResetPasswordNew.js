import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';

class ResetPasswordNew extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        const { email, token } = this.props.location.query;
        this.props.verifyResetPassword({ email, token });
    }

    handleFormSubmit(props) {
        const { email, token } = this.props.location.query;
        props.email = email;
        props.token = token;
        this.props.resetPasswordNew(props);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
            {
            /* Landing error message */
            this.props.errorMessage ?
                <div className="content">
                    <h3>{ this.props.errorMessage.verifyResetPassword.message }</h3>
                    {
                        this.props.errorMessage.verifyResetPassword.data.resend &&
                        <Link className="resend" to="/auth/reset-password">Reset Password Again</Link>
                    }
                </div>
            :
            /* New password form */
                <div className="col-md-4 col-md-offset-4">
                    {
                        /* Server success message */
                        this.props.successMessage && this.props.successMessage.verifyResetPassword &&
                        <div className="alert alert-success success-container">{ this.props.successMessage.verifyResetPassword }</div>
                    }
                    <legend>Reset password</legend>
                    <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                        {/* New password */}
                        <Field name="newpassword" component={renderField} type="password" placeholder="New password" />

                        {/* Repeat new password */}
                        <Field name="renewpassword" component={renderField} type="password" placeholder="Repeat New password" />

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            }
            </div>
        )
    }
}

function validate(props) {
    const errors = {};
    const fields = {
        newpassword: 'New password',
        renewpassword: 'Repeat new password'
    }

    for (let key in fields) {
        if (!props.hasOwnProperty(key)) {
            errors[key] = `${fields[key]} is required`;
        }
    }

    if (props.newpassword && props.newpassword.length < 6) {
        errors.newpassword = "Minimum 6 characters";
    }

    if (props.newpassword !== props.renewpassword) {
        errors.renewpassword = "Passwords doesn't match";
    }

    return errors;
}

ResetPasswordNew = reduxForm({ form: 'resetnewpassword', validate })(ResetPasswordNew);

export default ResetPasswordNew;
