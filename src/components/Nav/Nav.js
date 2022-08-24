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

const project = props => (
    <div>
        <h1>About Me</h1>
            <p>
            Hi! My name is Dominic Fisher, and I'm a 20 year old living right outside of Atlanta, GA.
              I'm still relatively new to the coding space so I don't have much to show for myself at the moment, but as I continue learning I will be updating this as I go along.
            </p>
    </div>
);

export default Nav;