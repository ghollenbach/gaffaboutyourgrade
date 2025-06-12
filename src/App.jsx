import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import Onesamplettest from './onesamplettest';
import Onesampleztest from './onesampleztest';
import Chigof from './chigof';
import Chihomo from './chihomo';
import Chiindepedence from './chiindepedence';
import Twosamplettest from './twosamplettest';
import Twoproportionztest from './twoproportionztest';
import Pairedt from './pairedt';
import Linregttest from './linregttest';

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
                                <Link to="chigof">Chi-Squared Goodness of Fit Test</Link>
                                <Link to="chihomo">Chi-Squared Homogeneity Test</Link>
                                <Link to="chiindepedence">Chi-Squared Independence Test</Link>
                                <Link to="twosamplettest">2-Sample Mean T-Test</Link>
                                <Link to="twoproportionztest">2-Sample Proportion Z-Test</Link>
                                <Link to="pairedt">Paired T-Test</Link>
                                <Link to="linregttest">Linear Regression T-Test</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="one-sample-t-test" element={<Onesamplettest />} />
                    <Route path="one-sample-z-test" element={<Onesampleztest />} />
                    <Route path="chigof" element={<Chigof />} />
                    <Route path="chihomo" element={<Chihomo />} />
                    <Route path="chiindepedence" element={<Chiindepedence />} />
                    <Route path="twosamplettest" element={<Twosamplettest />} />
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="twoproportionztest" element={<Twoproportionztest />} />
                    <Route path="pairedt" element={<Pairedt />} />
                    <Route path="linregttest" element={<Linregttest />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;