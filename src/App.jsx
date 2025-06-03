import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Onesamplettest from './onesamplettest';
import Home from './home';

function App() {
    return (
        <Router>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
                    <img
                        src="/correct.png"
                        alt="Logo"
                        style={{ width: '48px', height: '48px', marginRight: '16px' }}
                    />
                    <h1 style={{ color: '#331879', margin: 0 }}>Gaff About Your Grade</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li className="dropdown">
                            <span className="dropbtn">Hypothesis Tests</span>
                            <div className="dropdown-content">
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