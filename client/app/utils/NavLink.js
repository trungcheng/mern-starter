import React, { Component } from 'react';
import { Link } from 'react-router'

class NavLink extends Component {

    toggleActive(e) {
        let els = document.querySelectorAll('.nav-link');
        els.forEach(function(el) {
            el.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
    }

    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "nav-link active" : "nav-link";

        return (
            <li onClick={(e) => {this.toggleActive(e)}} className={className}>
                <Link {...this.props}/>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};

export default NavLink;
