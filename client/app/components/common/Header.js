import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavLink from "../../utils/NavLink";

class Header extends Component {

    componentWillMount() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    componentWillUpdate() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    render() {
        let ulList;

        if (this.props.authenticated) {
            ulList = (
                <span>
                    <ul className="nav navbar-nav pull-left">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/todos">Todos</NavLink>
                    </ul>
                    <ul className="nav navbar-nav pull-right">
                        <NavLink to="/user/profile">Hello { this.user.username }</NavLink>
                        <NavLink to="/auth/signout">Signout</NavLink>
                    </ul>
                </span>
            )
        } else {
            ulList = (
                <ul className="nav navbar-nav pull-right">
                    <NavLink to="/auth/signin">Sign in</NavLink>
                    <NavLink to="/auth/signup">Sign up</NavLink>
                </ul>
            )
        }

        return (
            <header>
                <nav className="navbar navbar-default navbar-static-top navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">MERN</Link>
                        </div>
                        { ulList }
                    </div>
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, null)(Header);
