/* Chi-squared Goodness of Fit test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Chiindepedence() {
    const questions = [
        {
            question: "When do you use a Chi-Squared Test for Independence?",
            options: [
                "When comparing two population means",
                "When you want to test if two categorical variables in a single sample are associated",
                "When determining if a sample distribution fits a known population distribution",
                "When comparing proportions from multiple independent samples"
            ],
            correctIndex: 1,
            explanation: "The Chi-Squared Test for Independence is used to see whether two categorical variables are related in one sample."
        },
        {
            question: "Which of the following best describes the null hypothesis for a Chi-Squared Independence test?",
            options: [
                "The variables are not related",
                "The variables are normally distributed",
                "The variables are dependent",
                "The variables are independent"
            ],
            correctIndex: 3,
            explanation: "The null hypothesis (H₀) for this test always states that the variables are independent, meaning there is no association between them."
        },
        {
            question: "A student conducts a Chi-Squared Independence test on gender vs. ice cream flavor preference and obtains a p-value of 0.003. What can they conclude at α = 0.05?",
            options: [
                "Fail to reject H₀; the variables are independent",
                "Reject H₀; there is an association between gender and ice cream flavor",
                "Reject H₀; the sample size is too small",
                "Fail to reject H₀; the p-value is greater than \u03B1"
            ],
            correctIndex: 1,
            explanation: "Since the p-value < 0.05, we reject H₀ and conclude that there is a statistically significant association between gender and flavor preference."
        },
        {
            question: "What is the formula for degrees of freedom in a Chi-Squared Test for Independence?",
            options: [
                "N-1",
                "K-l",
                "R+c-2",
                "(r-1)(c-1)"
            ],
            correctIndex: 3,
            explanation: "Degrees of freedom for a two-way table are calculated as (number of rows - 1)(number of columns - 1)."
        },
        {
            question: "Which situation would NOT be appropriate for a Chi-Squared Test for Independence?",
            options: [
                "Determining if school type (public/private) is related to preferred school lunch",
                "Testing if political affiliation is associated with support for a policy",
                "Checking if shoe size is associated with hair color",
                "Analyzing if voting preference varies by age group"
            ],
            correctIndex: 2,
            explanation: "A Chi-Squared Test for Independence requires two categorical variables. Shoe size is quantitative, so this violates the test condition."
        },
        {
            question: "A Chi-Squared Independence test is conducted with a 3x2 table. What are the degrees of freedom?",
            options: [
                "2",
                "3",
                "4",
                "6"
            ],
            correctIndex: 0,
            explanation: "For a 3x2 table, degrees of freedom = (3 - 1)(2 -= 1) = 2."
        },
        {
            question: "A researcher incorrectly enters raw percentages instead of counts into a Chi-Squared Independence test. What will happen?",
            options: [
                "The test will work normally",
                "The degrees of freedom will be incorrect",
                "The test will inflate the sample size and distort the p-value",
                "The test will default to a GOF test"
            ],
            correctIndex: 2,
            explanation: "The χ² test requires raw counts, not percentages. Using percentages results in incorrect expected values and test statistic, invalidating the p-value."
        },
        {
            question: "Which of the following would not increase the χ² test statistic in an Independence test?",
            options: [
                "Larger differences between observed and expected counts",
                "Larger sample size",
                "More categories (increasing df)",
                "Observed counts that closely match expected counts"
            ],
            correctIndex: 3,
            explanation: "The χ² test statistic increases when observed and expected counts differ more. If they match closely, the test statistic remains low."
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
            setTimeout(() => setShowConfetti(false), 5000);
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
            <h1 id="top">Chi-Squared Test for Independence</h1>
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
              Use the Chi-Squared Test for Independence when you have one sample and want to know if two categorical variables are associated or independent. The data is displayed in a two-way table (r × c), where:
            </p>
            <ul>
              <li>Rows = categories of variable 1</li>
              <li>Columns = categories of variable 2</li>
            </ul>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Is party affiliation related to opinion on a new law?</li>
              <li>Is there an association between education level and preferred news source?</li>
            </ul>

            <h4>Assumptions:</h4>
            <ol>
              <li><strong>Random:</strong> The data must come from a random sample.</li>
              <li><strong>Independence:</strong> All observations are independent from one another.</li>
              <li><strong>Sample size:</strong> All expected counts must be at least 5.</li>
            </ol>

            <h4>Steps to perform:</h4>

            <p><strong>Step 1: State the hypotheses</strong></p>
            <p>
              H<sub>0</sub>: The two variables are independent (no association).<br />
              H<sub>a</sub>: The two variables are not independent (there is an association).
            </p>

            <p><strong>Step 2: Organize the data</strong></p>
            <ul>
              <li>Put your data in a 2-way table (r rows x c columns)</li>
              <li>Label rows and columns clearly</li>
            </ul>

            <p><strong>Step 3: Find the degrees of freedom</strong></p>
            <p>
              D.F. = (r - 1) (c - 1)<br />
              r = number of rows<br />
              c = number of columns
            </p>

            <p><strong>Step 4: Using a calculator, perform a <InlineMath math={'\\chi^2'} /> test (see calculator commands)</strong></p>

            <p><strong>Step 5: Make a conclusion</strong></p>
            <p>
              Compare the p-value to <InlineMath math={'\\alpha'} /> (usually 0.05):<br />
              If p &lt; <InlineMath math={'\\alpha'} />, <strong>reject H<sub>0</sub></strong>: There is an association between the variables.<br />
              If p &gt; <InlineMath math={'\\alpha'} />, <strong>fail to reject H<sub>0</sub></strong>: There is not enough evidence of an association.
            </p>

            <h4 id="calculator">Calculator Instructions:</h4>
            <strong>Enter the observed data:</strong>
            <ol>
              <li>Press 2nd → <InlineMath math={'x^{-1}'} /> (MATRIX)</li>
              <li>Go to EDIT and select [A]</li>
              <li>Enter the number of rows and columns</li>
              <li>Fill in the observed frequencies into matrix A</li>
            </ol>

            <strong>Run the test:</strong>
            <ol>
              <li>Press STAT → scroll to TESTS</li>
              <li>Select <InlineMath math={'\\chi^2'} />-Test (Option C)</li>
              <li>Confirm: Observed: [A]</li>
              <li>Expected will be automatically saved in [B]</li>
              <li>Press ENTER</li>
            </ol>

            <strong>Results:</strong>
            <ul>
              <li><InlineMath math={'\\chi^2'} /> test statistic</li>
              <li>Degrees of freedom</li>
              <li>P-value (You can also view expected counts in matrix [B])</li>
            </ul>
            

            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1 </strong>
            <p>A sociologist wants to know whether three different regions (Urban, Suburban, and Rural) have the same distribution of preferred work arrangements. She randomly samples residents from each region and records whether they prefer: Working In-Office, Working Remotely, Hybrid Schedule. The results are summarized in the table below</p>
            <img src="/table3.png" alt="Description" style={{ width: '540px' }} />
            <p>Conduct a Chi-Squared Test for Independence at the 0.05 level of significance to determine whether smoking status and exercise habits are associated. Show all steps. </p>
            <p>
              <a href="https://drive.google.com/file/d/1rhf4tj7qC8Lz4zIPhHTifum9uUKMM1Gx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution
              </a>
            </p>

            <strong>Problem 2 </strong>
            <p>A school counselor wonders if grade level (Freshman, Sophomore, junior, Senior) is associated with preference for in-person, hybrid, or virtual learning. She surveys 160 students and the data is recorded. </p>
            <img src="/table4.png" alt="Description" style={{ width: '540px' }} />
            <p>Conduct a Chi-Squared Test for Independence to determine if grade level and learning preference are associated.</p>
            <p>
              <a href="https://drive.google.com/file/d/1z94NnZvxXeiZWIlnfazCKLaV_eLAS1Bm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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

export default Chiindepedence;
