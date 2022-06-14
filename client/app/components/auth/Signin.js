import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../utils/RenderField';
import { Link } from 'react-router';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(props) {
        this.props.signinUser(props);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    {
                        /* Server success message */
                        this.props.successMessage && this.props.successMessage.resetPassword &&
                        <div className="alert alert-success success-container">{ this.props.successMessage.resetPassword }</div>
                    }
                    {
                        /* Server success message */
                        this.props.successMessage && this.props.successMessage.verifyEmail &&
                        <div className="alert alert-success success-container">{ this.props.successMessage.verifyEmail }</div>
                    }
                    {
                        /* Server error message */
                        this.props.errorMessage && this.props.errorMessage.verifyEmail &&
                        <div className="alert alert-danger error-container">{ this.props.errorMessage.verifyEmail }</div>
                    }
                    <legend>Sign in</legend>

                    {/* Email */}
                    <Field name="email" component={renderField} type="text" placeholder="Email" />

                    {/* Password */}
                    <Field name="password" component={renderField} type="password" placeholder="Password" />

                    {/* Server error message */}
                    {
                        this.props.errorMessage && this.props.errorMessage.signin &&
                        <div className="alert alert-danger error-container">
                            Oops! { this.props.errorMessage.signin }
                        </div>
                    }

                    {/* Forgot password */}
                    <div className="password-forgot">
                        <Link to="/auth/reset-password">Forgot password</Link>
                    </div>

                    {/* Signin button */}
                    <button type="submit" className="btn btn-primary">Sign in</button>

                    {/* Signup button */}
                    <div className="form-bottom">
                        <Link to="/auth/signup">Click here to sign up</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = (formProps) => {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Email is required'
    }

    if(!formProps.password) {
        errors.password = 'Password is required'
    }

    return errors;
}

Signin = reduxForm({ form: 'signin', validate })(Signin);

export default Signin;
