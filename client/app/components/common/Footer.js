import React from 'react';
import { Link } from 'react-router';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/trungcheng/mern-tutorial" target="_blank">
                <img src="/public/img/github.png" alt="github" />
                Fork me on github
            </a>
        </footer>
    )
};

export default Footer;