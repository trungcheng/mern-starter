import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Signout extends Component {

  	componentWillMount() {
    	this.props.signoutUser();
		browserHistory.push('/auth/signin');
  	}

  	render() {
    	return <div className="content">We hope to see you again soon...</div>
  	}
}

export default Signout;
