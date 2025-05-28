import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Onesamplettest from './onesamplettest';
import Home from './home';

function App() {
    return (
        <Router>
            <div>
            <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'rgb(89, 0, 255)' }}>Gaff About Your Grade</h1>
                <nav>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li className = "dropdown">
                            <span className = "dropbtn">Hypothesis Tests</span>
                            <div className = "dropdown-content">
                            <li><Link to="one-sample-t-test">One Sample Mean t Test</Link></li>
                            </div>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="one-sample-t-test" element={<Onesamplettest />} />
                    <Route path="home" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;