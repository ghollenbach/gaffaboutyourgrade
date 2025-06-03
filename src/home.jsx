import './home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome!</h1>
            <p>
                Gaff About Your Grade is a site made by students, for students. Practice hypothesis testing, review key concepts, and boost your stats confidence. Get an A on that FOK!
            </p>
            <button className="quiz-btn" onClick={() => window.location.href = '/onesamplettest'}>
                Start Practicing
            </button>
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
        </div>
    )
}

export default Home;