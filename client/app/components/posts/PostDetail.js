import React from 'react';
import { browserHistory } from 'react-router';

class PostDetail extends React.Component {

    constructor(props) {
        super(props);
        this.onHandleClick = this.onHandleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchDetail(this.props.params.postId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.postId !== nextProps.params.postId) {
            this.props.fetchDetail(nextProps.params.postId);
        }
    }

    onHandleClick() {
        browserHistory.push('/posts');
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        return (
            <div className="content posts">
                <h2>{this.props.post.postTitle}</h2>
                <p>{this.props.post.postIntro}</p>
                <p>{this.props.post.postContent}</p>
                <p><button onClick={ this.onHandleClick } className="btn btn-primary">Go back</button></p>
            </div>
        )
    }
}

export default PostDetail;
