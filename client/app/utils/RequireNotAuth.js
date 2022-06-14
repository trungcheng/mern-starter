import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (Com) {
  	class NotAuthentication extends Component {

	    componentWillMount() {
	      	if (this.props.authenticated) {
	        	browserHistory.push('/dashboard');
	      	}
	    }

	    componentWillUpdate(nextProps) {
	      	if (nextProps.authenticated) {
	        	browserHistory.push('/dashboard');
	      	}
	    }

	    render() {
	      	return <Com {...this.props} />
	    }
  	}

  	NotAuthentication.propTypes = { authenticated: PropTypes.bool };

  	const mapStateToProps = (state) => {
    	return { authenticated: state.auth.authenticated };
  	}

  	return connect(mapStateToProps)(NotAuthentication);
}
