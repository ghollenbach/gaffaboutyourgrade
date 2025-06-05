import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Onesamplettest from './onesamplettest';
import Home from './home';
import Footer from './footer';
import Onesampleztest from './onesampleztest';

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
                                <Link to="one-sample-t-test">1-Sample Mean T-Test</Link>
                                <Link to="one-sample-z-test">1-Sample Proportion Z-Test</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="one-sample-t-test" element={<Onesamplettest />} />
                    <Route path="one-sample-z-test" element={<Onesampleztest />} />
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;