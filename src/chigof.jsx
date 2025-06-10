/* Chi-squared Goodness of Fit test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Chigof() {
    const questions = [
        {
            question: "When do you use Chi-squared GOF test?",
            options: [
                "When we want to determine an association between two populations",
                "When we want to see if an observed distribution fits an expected distribution",
                "When we want to see if a person's jeans have a good fit",
                "When we want to see if two populations have the same distribution of a continuous variable"
            ],
            correctIndex: 1,
            explanation: "The Chi-squared Goodness of Fit (GOF) test is used to compare the observed frequencies of categories to what we would expect under a specific theoretical distribution (like equal distribution or a company’s claim)."
        },
        {
            question: "In a Chi-squared GOF test, as the D.F. increases, what does the distribution approach?",
            options: [
                "Symmetric distribution",
                "Bimodal distribution",
                "Normal Distribution",
                "Skewed distribution"
            ],
            correctIndex: 2,
            explanation: "As the degrees of freedom (D.F.) increase, the Chi-squared distribution becomes more symmetric and starts to resemble a normal distribution due to the Central Limit Theorem."
        },
        {
            question: "In a school, there are grades 1-4. The school suggests that each grade have 1/4 students of the total school. The actual amount is 15 students in grade 1, 18 students in grade 2, 12 students in grade 3, and 40 students in grade 4. Is the sample size large enough?",
            options: [
                "Yes, the sample size is large enough because the expected frequencies are larger than 5.",
                "Yes, the sample size is large enough because the observed frequencies are larger than 5.",
                "No, the sample size is not large enough because the expected frequencies is smaller than 5.",
                "Yes, the sample size is not large enough because the observed frequencies is smaller than 5."
            ],
            correctIndex: 0,
            explanation: "A key assumption of the Chi-squared test is that all expected counts should be at least 5. In this case, with 85 students and 4 categories, each expected count is 85/4 = 21.25, which is more than 5."
        },
        {
            question: "What is the degrees of freedom?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            correctIndex: 1,
            explanation: "Degrees of freedom in a GOF test is calculated as the number of categories minus 1. Here, 4 grades - 1 = 3."
        },
        {
            question: "A student wants to test the sizes of grapes in a bag of grapes. There are small, less than 2 cm, medium, 3 cm, large, 4 cm, and larger 6 cm, extra large grapes. The null hypothesis follows the company, Grace’s Grapes, which suggests that 1/5 of the bag is small, 1/4 is medium, 1/2 is large, and 1/20 is extra large grapes. She performs a Chi-squared GOF test on a sample of one bag of grape with 300 grapes in it and get a p-value of 0.512. Do we reject the null hypothesis at the 0.05 significance level?",
            options: [
                "Yes, because the p-value is greater than \u03B1",
                "Yes, because \u03B1 is greater than the p-value",
                "No, because the p-value is greater than \u03B1",
                "No, because \u03B1 is greater than the p-value"
            ],
            correctIndex: 2,
            explanation: "A p-value of 0.512 is much greater than \u03B1 = 0.05, so we fail to reject the null hypothesis. This means there's not enough evidence that the observed grape sizes are different from the company's claim."
        },
        {
            question: "What conclusion can the student draw from these results?",
            options: [
                "There is sufficient evidence to support the claim that Grace's Grapes are delicious",
                "There is sufficient evidence to support the claim that Grace's Grapes are inaccurately sized",
                "There is NOT sufficient evidence to support the claim that the Grace's Grapes are accurately sized.",
                "There is sufficient evidence to support the claim that the Grace's Grapes are accurately sized."
            ],
            correctIndex: 3,
            explanation: "Since we failed to reject the null hypothesis, we conclude there's no significant difference between the observed and expected distributions — supporting the company's claim."
        },
        {
            question: "Assuming randomness and independence, which of the following correctly states the normality assumption?",
            options: [
                "Yes, the sample size is large enough because the expected frequencies are larger than 5.",
                "Yes, the sample size is large enough because the observed frequencies are larger than 5.",
                "No, the sample size is not large enough because the expected frequencies is smaller than 5.",
                "Yes, the sample size is not large enough because the observed frequencies is smaller than 5."
            ],
            correctIndex: 0,
            explanation: "The normal approximation used in the Chi-squared test requires that all expected counts be 5 or greater — not the observed counts."
        },
        {
            question: "What is the correct alternative hypothesis for any given GOF test?",
            options: [
                "Ha: H0 is true",
                "Ha: H0 is not true",
                "Ha: H0 ≠ 0",
                "Ha: H0 = 0"
            ],
            correctIndex: 1,
            explanation: "The alternative hypothesis in a GOF test is that the observed distribution does not fit the expected one, meaning the null hypothesis is false."
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [sticker, setSticker] = useState(null); // 'correct', 'incorrect', or null
    const [correctCount, setCorrectCount] = useState(0);

    const handleAnswered = (isCorrect) => {
        setShowNextButton(true);
        setSticker(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect) {
            setShowConfetti(true);
            setCorrectCount((prev) => prev + 1);
            const audio = new Audio('/correct.mp3');
            audio.play();
            setTimeout(() => setShowConfetti(false), 5000);

        } else {
            const audio = new Audio('/incorrect.mp3');
            audio.play();
        }
        // Hide sticker after animation (e.g., 2s)
        setTimeout(() => setSticker(null), 4000);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setShowNextButton(false);
        setShowConfetti(false); // Stop confetti when moving to the next question
    };

    return (
        <div className="hypothesis-container">
            <h1 id="top">Chi-Squared Goodness of Fit Test</h1>
            <button
                className="quiz-btn"
                onClick={() => document.getElementById('multiple-choice').scrollIntoView({ behavior: 'smooth' })}
                style={{ marginRight: '10px' }}
            >
                Go to Multiple Choice Practice
            </button>
            <button
                className="quiz-btn"
                onClick={() => document.getElementById('free-response').scrollIntoView({ behavior: 'smooth' })}
            >
                Go to Free Response Practice
            </button>
            <br />

            <h2 id="notes">Notes</h2>

            <h4>When to use it:</h4>
            <p>
              Use the Chi-Squared Goodness of Fit Test when you want to determine if a sample distribution matches an expected distribution for a single categorical variable.
            </p>

            <h4>Typical situations:</h4>
            <ul>
              <li>You are given observed counts (how many you actually got in a sample).</li>
              <li>You are given expected proportions or percentages (how many the company or theory says you should get).</li>
              <li>You want to test if the real-world data fits what is expected.</li>
            </ul>
            <p>
              <strong>Example:</strong> A company claims 30% of their candies are red, 40% blue, and 30% green. You take a sample and want to test if your data supports their claim.
            </p>

            <h4>Assumptions of the GOF Test:</h4>
            <p>You must check all three assumptions before performing the test:</p>
            <ol>
              <li><strong>Randomness:</strong> The data must come from a random sample of the population.</li>
              <li><strong>Sample Size: Expected Counts ≥ 5:</strong> All expected frequencies (E) must be at least 5. If even one expected count is below 5, the test is not valid.</li>
              <li><strong>Population Size: <InlineMath math={'10n \\leq \\text{pop}'} />:</strong> The population must be at least 10x the sample size (n). This ensures independence when sampling without replacement.</li>
            </ol>
            <p>If all 3 assumptions are met, you can proceed with the test.</p>

            <h4>Steps for Performing the Chi-Squared GOF Test:</h4>
            
            
                <strong>Step 1: State the Hypotheses</strong><br />
                <p>H<sub>0</sub> (null): The proportions of each category match the expected proportions</p>
                <p>H<sub>a</sub> (alternative): H<sub>0</sub> is incorrect</p>
                <strong>Step 2: Calculate Expected Counts</strong><br />
                <p>Use this formula for each category:</p>
                <p><InlineMath math={'\\text{Expected (E)} = \\text{Total Sample Size} \\times \\text{Expected Proportion}'} /></p>
            
                <strong>Step 3: Check Assumptions</strong>
                <p>Make sure:</p>
                <ul>
                    <li>Sample is random</li>
                    <li>All expected counts ≥ 5</li>
                    <li>10n ≤ population size</li>
                </ul>

                <strong>Step 4: Calculate the Test Statistic</strong>
                <p><InlineMath math={'\\chi^2 = \\sum \\frac{(O - E)^2}{E}'} /></p>
                <p>O = Observed count</p>
                <p>E = Expected count</p>
                <p>Do this for each category, then add them up.</p>
                
                <strong>Alternatively, using a calculator:</strong>
                <ol>
                  <li>Enter O into L<sub>1</sub> in a TI-84 calculator (stat → 1)</li>
                  <li>Enter E into L<sub>2</sub> in a TI-84 calculator</li>
                  <li>Perform the <InlineMath math={'\\chi^2'} /> GOF test (stat → tests → D)</li>
                  <ol type = 'a'>
                    <li>Enter L<sub>1</sub> into Observed</li>
                    <li>Enter L<sub>2</sub> into Expected</li>
                    <li>Set the D.F.</li>
                    <li>Press Calculate</li>
                    <li>P-Value &amp; <InlineMath math={'\\chi^2'} /> will be shown</li>
                  </ol>
                </ol>

                <strong>Step 5: Make a Decision</strong><br />
                Compare your p-value to your significance level (<InlineMath math={'\\alpha'} />, often 0.05):<br />
                <ul>
                  <li>If p-value &lt; <InlineMath math={'\\alpha'} />, reject H<sub>0</sub> → there's evidence the distributions are different.</li>
                  <li>If p-value &gt; <InlineMath math={'\\alpha'} />, fail to reject H<sub>0</sub> → not enough evidence to say they're different.</li>
                </ul>

            <h4 id="calculator">Calculator Commands:</h4>
            <strong>Enter data:</strong>
            <p>
            Press STAT → 1: Edit…<br />
            Enter observed values in L<sub>1</sub><br />
            Enter expected values in L<sub>2</sub>
            </p>
            
            <strong>Run the test:</strong>
            <p>
            Press STAT → scroll to TESTS<br />
            Select <InlineMath math={'\\chi^2'} /> GOF-Test (usually option D)<br />
            Enter: Observed list: L<sub>1</sub>, Expected list: L<sub>2</sub>, df = number of categories – 1
            </p>

            <strong>Results:</strong>
            <p>The calculator will give: </p>
            <ul>
                <li><InlineMath math={'\\chi^2'} /> value</li>
                <li>p-value</li>
                <li>Degrees of freedom (df)</li>
            </ul>
            
            <p>
              <i>Reminder: You must still show your expected values and assumptions in your work even if using a calculator.</i>
            </p>

            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1 </strong>
            <p>In a candy bag, there are 4 different candies. Mike & Ike, skittles, almond joy, and hersheys. The company suggested that the proportions of the candies would be the following: </p>
            <ol>
                <li>Mike & Ike = 1/3, skittles = 1/2, almond joy = 1/12, and hersheys = 1/12</li>
                <li>To assess whether the claim is correct, a bag of candy was randomly selected and the following frequencies were propagated: Mike & Ike = 105 pieces, Skittles = 201 pieces,  almond joy = 85 pieces, hershey's = 65 pieces. Perform a Chi-squared GOF test. </li>
            </ol>
            <p>
              <a href="https://drive.google.com/file/d/1ydW5iVAtqqm_YxKjFJmXHfkBtranGCLt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution
              </a>
            </p>

            <strong>Problem 2 </strong>
            <p>A clothing company claims that the proportions of T-shirt sizes they manufacture are: Small = 20% Medium = 35% Large = 35% Extra Large = 10% A student randomly samples 200 T-shirts from a warehouse to see if the actual proportions match the company’s claims. She observes the following: Small: 42 Medium: 70 Large: 68 Extra Large: 20 Is there evidence that the T</p>
            <p>
              <a href="https://drive.google.com/file/d/19-UAb6BMCYhvpQBgbAwBAM0sDi8IXuOG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution
              </a>
            </p>

            <h2 id="multiple-choice">Multiple Choice Practice</h2>
            <div style={{ position: 'relative' }}>
                {showConfetti && (
                    <>
                        {console.log('Confetti is being rendered')}
                        <Confetti
                            width={window.innerWidth}
                            height={300}
                            style={{ position: 'absolute', top: 0 }}
                        />
                    </>
                )}
                {currentQuestionIndex < questions.length ? (
                    <>
                        <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                        />
                        </div>
                        <p className="progress-text">
                        Question {currentQuestionIndex + 1} of {questions.length}
                        </p>

                        <MCQ
                            question={questions[currentQuestionIndex].question}
                            options={questions[currentQuestionIndex].options}
                            correctIndex={questions[currentQuestionIndex].correctIndex}
                            explanation={questions[currentQuestionIndex].explanation}
                            onAnswered={(isCorrect) => handleAnswered(isCorrect)}
                        />
                        {showNextButton && (
                            <button
                                onClick={handleNextQuestion}
                                className="quiz-btn"
                            >
                                Next
                            </button>
                        )}
                    </>
                ) : (
                    <div>
                        <button
                            className="quiz-btn"
                            style={{ marginLeft: '10px' }}
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setCorrectCount(0);
                                setShowNextButton(false);
                                setShowConfetti(false);
                                setSticker(null);
                            }}
                        >
                            Reset Quiz
                        </button>   
                        <p>You got {correctCount} out of 8 correct.</p>
                        {correctCount >= 6 ? (
                            <div className="congrats-message">
                                <h2>Congratulations!</h2>
                                <p>You did great! 🎉</p>
                                <img
                                    src="/correct.png"
                                    alt="Logo"
                                    style={{ width: '100px', height: '100px', marginRight: '16px' }}
                                />
                            </div>
                        ) : (
                            <div className="try-again-message">
                                <h2>Keep Trying!</h2>
                                <p>Review the material and try again. You can do it! 💪</p>
                                <img
                                    src="/incorrect.png"
                                    alt="Logo"
                                    style={{ width: '100px', height: '100px', marginRight: '16px' }}
                                />
                            </div>
                            
                        )}
                    </div>

                )}
                {sticker && (
                    <img
                        src={sticker === 'correct' ? '/correct.png' : '/incorrect.png'}
                        alt={sticker === 'correct' ? 'Correct!' : 'Incorrect!'}
                        className="sticker-spin"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '25%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2000,
                            pointerEvents: 'none'
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Chigof;
