import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../utils/RenderField';
import { Link } from 'react-router';

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(props) {
        this.props.resetPassword(props);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <legend>Reset Password</legend>

                    {/* Email */}
                    <Field name="email" component={renderField} type="email" placeholder="Type your email" />

                    {/* Server error message */}
                    <div>
                        {
                            this.props.errorMessage && this.props.errorMessage.resetPassword &&
                            <div className="alert alert-danger error-container">{ this.props.errorMessage.resetPassword }</div>
                        }
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary">Submit</button>

                    <div className="form-bottom">
                        <Link to="/auth/signin">Click here to sign in</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Email is required'
    }

    return errors;
}

ResetPassword = reduxForm({ form: 'resetpassword', validate })(ResetPassword);

export default ResetPassword;
