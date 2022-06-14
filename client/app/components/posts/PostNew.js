import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField, renderTextArea, renderSelect } from '../../utils/RenderField';
import { Link } from 'react-router';

class PostNew extends React.Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.fetchCate();
    }

    handleFormSubmit(formProps) {
        this.props.addPost(formProps);
    }

    handleChange(e) {
        // console.log(e.target.value);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>

                <h3>Add Post</h3>

                <Field label="Title" name="title" component={renderField} type="text" placeholder="Title..." />

                <Field label="Intro" name="intro" component={renderField} type="text" placeholder="Intro..." />

                <Field label="Content" name="content" component={renderTextArea} placeholder="Content..." />

                <Field label="Category" name="cat_id" component={renderSelect} onChange={this.handleChange}>
                    {(this.props.categories) ? this.props.categories.map(cate => <option key={cate.id} value={cate.id}>{cate.name}</option>) : ''}
                </Field>

                <Field name="user_id" component={renderField} type="hidden" />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Save</button>
                <button type="button" onClick={reset} className="m-l-5 btn btn-default">Cancel</button>
                <Link to="/posts" className="m-l-5 btn btn-danger">
                    Back
				</Link>

            </form>
        );
    }

}

const validate = (props) => {
    const errors = {};
    const fields = {
        title: 'Title',
        intro: 'Intro',
        content: 'Content',
        category: 'Category'
    }

    for (let key in fields) {
        if (!props.hasOwnProperty(key)) {
            errors[key] = `${fields[key]} is required`;
        }
    }

    if (props.title && props.title.length < 3) {
        errors.title = "Minimum of 3 characters";
    }

    return errors;
}

PostNew = reduxForm({
    form: 'postnew',
    enableReinitialize: true,
    validate
})(PostNew);

export default PostNew;
