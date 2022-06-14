import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../utils/RenderField';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.handleFormInfo = this.handleFormInfo.bind(this);
        this.handleFormChangePass = this.handleFormChangePass.bind(this);
    }

    componentWillMount() {
        // this.props.fetchCate();
    }

    handleFormInfo(formProps) {
        // this.props.addPost(formProps);
    }

    handleFormChangePass(formProps) {
        // this.props.addPost(formProps);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="container bootstrap snippet">

                <div className="row">

                    <div className="col-sm-3">
                        <div className="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload" />
                        </div><br />
                        {/* <div className="panel panel-default">
                            <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
                            <div className="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
                        </div> */}
                        {/* <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x" /></li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                        </ul> */}
                    </div>

                    <div className="col-sm-9">
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#info">Information</a></li>
                            <li><a data-toggle="tab" href="#changePass">Change Password</a></li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="info">
                                <hr />
                                <form onSubmit={handleSubmit(this.handleFormInfo)}>

                                    <Field label="Username" name="username" component={renderField} input={{ disabled: true }} type="text" placeholder="Username..." />

                                    <Field label="Email" name="email" component={renderField} input={{ disabled: true }} type="email" placeholder="Email.." />

                                    <Field label="Phone" name="phone" component={renderField} type="text" placeholder="Phone..." />

                                    <Field label="Address" name="address" component={renderField} type="text" placeholder="Address..." />

                                    <br />
                                    <button className="btn btn-success" disabled={pristine || submitting} type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                                    <button className="btn btn-default m-l-5" onClick={reset} type="button"><i className="glyphicon glyphicon-repeat" /> Reset</button>

                                </form>
                                <hr />
                            </div>

                            <div className="tab-pane" id="changePass">
                                <h2 />
                                <hr />
                                <form onSubmit={handleSubmit(this.handleFormChangePass)}>

                                    <Field label="Old password" name="old_pass" component={renderField} type="password" placeholder="Old password..." />

                                    <Field label="New password" name="new_pass" component={renderField} type="password" placeholder="New password..." />

                                    <Field label="Confirm new password" name="confirm_new_pass" component={renderField} type="password" placeholder="Confirm new password..." />

                                    <br />
                                    <button className="btn btn-success" disabled={pristine || submitting} type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                                    <button className="btn btn-default m-l-5" onClick={reset} type="button"><i className="glyphicon glyphicon-repeat" /> Reset</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validate = (props) => {
    const errors = {};
    const fields = {
        username: 'Username',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
    }

    for (let key in fields) {
        if (!props.hasOwnProperty(key)) {
            errors[key] = `${fields[key]} is required`;
        }
    }

    return errors;
}

UserProfile = reduxForm({
    form: 'userprofile',
    enableReinitialize: true,
    validate
})(UserProfile);

export default UserProfile;
