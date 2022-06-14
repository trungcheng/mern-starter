import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (Com) {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.authenticated) {
                browserHistory.push('/auth/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                browserHistory.push('/auth/signin');
            }
        }

        render() {
            return <Com {...this.props} />
        }
    }

    Authentication.propTypes = {
        authenticated: PropTypes.bool
    };

    const mapStateToProps = (state) => {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps, null)(Authentication);
}
