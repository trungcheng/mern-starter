import React, { Component } from 'react';
import { Header } from './common';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}
