import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Salutations!</h1>
            <h2>We're Grace H, Anuva, Sarah, and Grace D</h2>
            <p>  
                from the Blair Magnet Class of 2026. Freshly escaped from the statistical clutches of Ms. Gaffney's Applied Statistics class, we've joined up together to create your ultimate hypothesis testing haven. We know firsthand the chaos that ensues when z-scores and p-values start flying, so we hope this site helps you survive—nay, thrive—as you conquer your FOKs with confidence and minimal tears!

            </p>
            <h2>Also, make sure to turn up the volume!</h2>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <button
                    className="quiz-btn"
                    onClick={() => navigate('/one-sample-t-test')}
                >
                    Begin Your Statistical Quest <span className="rocket">🚀</span>
                </button>
            </div>
            <h2>What is hypothesis testing?</h2>
            <p>
                If you've ever stared at a problem and thought, "What is does this even mean?" (like Grace D.)—don't worry. We got you. We'll break down all the tests (z, t, chi-squared, lin reg—you name it) so even your AP season brain can follow along.
            </p>
            <p>Our site offers</p>
            <ul>
                <li>🔥 Multiple choice & free response questions to test you</li>
                <li>🎉 A Gaffney animation to keep you locked in</li>
                <li>⚡ Instant feedback and full explanations to help you get every last point</li>
            </ul>

            <h2>A little more about us</h2>
            <div className="bio-columns">
                <div className="bio">
                    <h3>Anuva and Grace H.</h3>
                    <img src="/bios2.png" alt="Anuva and Grace H." className="bio-img" />
                    <p>We really run the show. This is domination—with 95% confidence.</p>
                </div>
                <div className="bio">
                    <h3>Sarah and Grace D.</h3>
                    <img src="/bio1.png" alt="Sarah and Grace D." className="bio-img" />
                    <p>They call us… the jesters. Why, you may ask? Because we ignite the flame within the pack 😈🔥.</p>
                </div>
            </div>

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