import React, { Component } from 'react';
import { Link } from 'react-router';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.postId}>
                    <span className="pull-right">
                        {post.cateName}
                    </span>

                    <Link to={`/posts/${post.postId}`}>
                        <strong>{post.postTitle}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        if (!this.props.posts) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="pull-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        <i className="fa fa-plus"></i> Add Post
					</Link>
                </div>
                <h3>Posts</h3>
                <ul className="m-t-20 list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

export default PostList;
