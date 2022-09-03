import './Nav.css';
import React from 'react';

const Nav = props => (
    <nav>
        <h1>Dominic Fisher</h1>
        <div>
            <button>About Me</button>
            <button>Portfolio</button>
            <button>Contact</button>
            <button>Resume</button>
        </div>
    </nav>
);

export default Nav;