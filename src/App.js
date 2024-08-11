import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function App() {
    return (
        <div className="app-container">
            <nav className="sidebar">
                <ul>
                    <li><a href="#home" className="nav-square">Home</a></li>
                    <li><a href="#about" className="nav-square">About</a></li>
                    <li><a href="#portfolio" className="nav-square">Portfolio</a></li>
                    <li><a href="#resume" className="nav-square">Resume</a></li>
                    <li><a href="#contact" className="nav-square">Contact</a></li>
                </ul>
            </nav>
            <div className="main-content">
                <Home />
                <About />
                <Portfolio />
                <Resume />
                <Contact />
            </div>
        </div>
    );
}

export default App;



