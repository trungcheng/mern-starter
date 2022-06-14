import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../utils/RenderField';
import { Link } from 'react-router';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <legend>Sign up</legend>

                    {/* Username */}
                    <Field name="username" component={renderField} type="text" placeholder="Username..." />

                    {/* Email */}
                    <Field name="email" component={renderField} type="email" placeholder="Email..." />

                    {/* Password */}
                    <Field name="password" component={renderField} type="password" placeholder="Password..." />

                    {/* Email */}
                    <Field name="repassword" component={renderField} type="password" placeholder="Repeat Password..." />

                    {/* Server error message */}
                    <div>
                        {
                            this.props.errorMessage && this.props.errorMessage.signup &&
                            <div className="alert alert-danger error-container">Oops! {this.props.errorMessage.signup}</div>
                        }
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary">Sign up</button>

                    {/* Sign in button */}
                    <div className="form-bottom">
                        <Link to="/auth/signin">Click here to sign in</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = (props) => {
    const errors = {};
    const fields = {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        repassword: 'Repeat password'
    }

    for (let key in fields) {
        if (!props.hasOwnProperty(key)) {
            errors[key] = `${fields[key]} is required`;
        }
    }

    if (props.username && props.username.length > 20) {
        errors.username = "Maximum of 20 characters";
    }

    if (props.username && props.username.length < 3) {
        errors.username = "Minimum of 4 characters";
    }

    if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = "Please provide valid email";
    }

    if (props.password && props.password.length < 6) {
        errors.password = "Minimum 6 characters";
    }

    if (props.password !== props.repassword) {
        errors.repassword = "Passwords doesn't match";
    }

    return errors;
};

Signup = reduxForm({ form: 'signup', validate })(Signup);

export default Signup;
