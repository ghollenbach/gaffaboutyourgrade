import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <p>
                Gaff About Your Grade is a site made by students, for students. Practice hypothesis testing, review key concepts, and boost your stats confidence. Get an A on that FOK!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <button
                    className="quiz-btn"
                    onClick={() => navigate('/one-sample-t-test')}
                >
                    Start Practicing
                </button>
            </div>
            <h2>What is hypothesis testing?</h2>
            <p>
                Hypothesis testing helps us decide whether the patterns we see in data are real or just due to chance.
            </p>
            <p>Our site offers</p>
            <ul>
                <li>Multiple choice and free response questions</li>
                <li>Instant feedback and explanations</li>
                <li>Fun animations to keep you going!</li>
            </ul>
            <h2>Testimonials</h2>
            <div className="testimonial">
                <blockquote>
                    "The animations excite me"
                </blockquote>
                <p className="testimonial-author">— Ethan Hua, Applied Stats Student</p>
                <blockquote>
                    "It is good"
                </blockquote>
                <p className="testimonial-author">— Justin Rosentover, Applied Stats Student</p>
            </div>
            <h2>About us</h2>
            <p>Bios go here</p>

            <h2>Contact Us</h2>
            <p>
                Check out our github!{' '}
                <a
                    href="https://github.com/ghollenbach/gaffaboutyourgrade"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#331879', textDecoration: 'underline' }}
                >
                    View on GitHub
                </a>
            </p>
            <p>
                Any questions or bugs can be directed to{' '}
                <a
                    href="mailto:ghollen7002@gmail.com"
                    style={{ color: '#331879', textDecoration: 'underline' }}
                >
                    ghollen7002@gmail.com
                </a>
            </p>
        </div>
    )
}

export default Home;