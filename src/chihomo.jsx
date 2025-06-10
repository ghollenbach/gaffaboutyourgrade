/* 1 sample mean t-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function chihomo() {
    const questions = [
      {
        question: "When should you use a Chi-Squared Test for Homogeneity?",
        options: [
          "When comparing one sample to an expected distribution",
          "When testing if two variables are related in one sample",
          "When comparing the distributions of a categorical variable across multiple groups",
          "When testing the goodness of fit in one group"
        ],
        correctIndex: 2,
        explanation: "The test for homogeneity is used to compare two or more independent groups to see if they have the same distribution for a categorical variable."
      },
      {
        question: "What is the main difference between the Chi-Squared Test for Homogeneity and the Test for Independence?",
        options: [
          "Homogeneity is only used with one group",
          "Homogeneity uses two or more samples from different populations",
          "Independence uses two or more different variables from separate samples",
          "There is no difference"
        ],
        correctIndex: 1,
        explanation: "The test for homogeneity compares multiple independent samples, while the test for independence uses one sample with two categorical variables."
      },
      {
        question: "Which of the following is a correct assumption for the Chi-Squared Test for Homogeneity?",
        options: [
          "All observed values must be greater than 5",
          "The sample size must be below 30",
          "The variables must be quantitative",
          "The expected counts in each cell must be at least 5"
        ],
        correctIndex: 3,
        explanation: "One of the key assumptions is that each expected count in the table is at least 5. This ensures the validity of the chi-square approximation."
      },
      {
        question: "What is the correct formula for degrees of freedom in a Chi-Squared Test for Homogeneity?",
        options: [
          "(rows - 1)(columns - 1)",
          "N-1",
          "(number of categories - 1)",
          "(columns - 1)(n-1)"
        ],
        correctIndex: 0,
        explanation: "In a two-way table, degrees of freedom are calculated by multiplying the number of row categories minus 1 by the number of column categories minus 1."
      },
      {
        question: "A researcher surveys 100 teens and 120 adults about their favorite fast food restaurant. Which test should they use?",
        options: [
          "Chi-Squared GOF",
          "Chi-Squared Test for Independence",
          "2-sample z-Test",
          "Chi-squared Test for Homogeneity"
        ],
        correctIndex: 3,
        explanation: "Since the researcher is comparing two separate groups (teens and adults) on one categorical variable, the test for homogeneity is appropriate."
      },
      {
        question: "What does a large chi-squared statistic indicate in a homogeneity test?",
        options: [
          "The distributions across groups are likely the same",
          "The observed values are far from expected",
          "The data is too skewed to analyze",
          "The samples were not random"
        ],
        correctIndex: 1,
        explanation: "A large chi-squared value suggests that the observed and expected values differ significantly, indicating that the group distributions may not be the same."
      },
      {
        question: "In a homogeneity test, which of the following statements best describes the null hypothesis?",
        options: [
          "The proportions are different across groups",
          "The distributions are not related",
          "The distributions of the categorical variables are the same across all groups",
          "All expected values are equal"
        ],
        correctIndex: 2,
        explanation: "The null hypothesis in a homogeneity test always states that all groups share the same distribution for the categorical variable being tested."
      },
      {
        question: "A chi-squared test for homogeneity gives a p-value of 0.273. What should the researcher conclude at α = 0.05?",
        options: [
          "There is not enough evidence to reject the null hypothesis",
          "There is enough evidence to say the distributions are different",
          "The chi-squared statistic must be recalculated",
          "The sample size is too small to make any conclusion"
        ],
        correctIndex: 0,
        explanation: "Since the p-value is greater than 0.05, we fail to reject the null hypothesis, meaning there is not enough evidence to claim the group distributions are different."
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
            <h1 id="top">Chi-Squared Test for Homogeneity</h1>
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
              Use the Chi-Squared Test for Homogeneity when you want to see if two or more different populations share the same distribution of a categorical variable. This test compares how groups respond to the same question or situation.
            </p>

            <h4>Example situations:</h4>
            <ul>
              <li>Do boys and girls have the same favorite TV show?</li>
              <li>Do men and women prefer the same Olympic events?</li>
            </ul>
            <p>
              This test is used when:
            </p>
            <ul>
              <li>You have two or more groups (like boys vs girls, men vs women)</li>
              <li>Each group is a separate random sample</li>
              <li>You want to compare one categorical variable across groups</li>
            </ul>

            <h4>Assumptions:</h4>
            <ol>
              <li>
                <strong>Two or more independent random samples:</strong> Each group must be from a separate, random, and independent sample (e.g., 1st grade boys and 1st grade girls sampled separately).
              </li>
              <li>
                <strong>Expected counts are all ≥ 5:</strong> You must first calculate expected values for each cell in the table using:<br />
                <InlineMath math={'\\text{Expected} = \\frac{(\\text{Row total}) \\times (\\text{Column total})}{\\text{Grand Total}}'} /><br />
                If any expected value is &lt; 5, the test may not be valid.
              </li>
              <li>
                <strong>10n Population Rule:</strong> The population should be at least 10x the sample size (e.g., if you surveyed 100 boys, the boy population should be &gt; 1000).
              </li>
            </ol>

            <h4>Steps to performing a Chi-Squared Homogeneity Test:</h4>

            <p><strong>Step 1: State the Hypotheses</strong></p>
            <p>
              H<sub>0</sub>: P₁ = P₂ = P₃ (each group has same preferences)<br />
              H<sub>a</sub>: At least one group has different proportions
            </p>

            <p><strong>Step 2: Organize the Data into a Two-Way Table</strong></p>
            <ul>
              <li>Rows = different groups</li>
              <li>Columns = categories</li>
            </ul>
            <p>
              <strong>Example:</strong><br />
              Rows = Boys and Girls<br />
              Columns = Lone Ranger, Sesame Street, The Simpsons
            </p>

            <p><strong>Step 3: Check Assumptions</strong></p>
            <ul>
              <li>Each sample was randomly selected</li>
              <li>All expected counts ≥ 5</li>
              <li>Each population is at least 10x its sample size</li>
            </ul>

            <p><strong>Step 4: Calculate Expected Values</strong></p>
            <p>
              Use this for each cell in the table:<br />
              <InlineMath math={'\\text{Expected} = \\frac{(\\text{Row total}) \\times (\\text{Column total})}{\\text{Grand Total}}'} />
            </p>

            <p><strong>Step 5: Find Degrees of Freedom</strong></p>
            <p>
              D.F. = (rows - 1) (columns - 1)
            </p>

            <p><strong>Step 6: Use Calculator to Find <InlineMath math={'\\chi^2'} /> and P-Value</strong></p>
            <p>
              See Calculator Commands below.
            </p>

            <p><strong>Step 7: Make a Decision and Conclusion</strong></p>
            <p>
              Compare p-value to <InlineMath math={'\\alpha'} /> (usually 0.05 or 0.01):<br />
              If p &lt; <InlineMath math={'\\alpha'} /> → <strong>Reject H<sub>0</sub>:</strong> There is a difference in distributions<br />
              If p ≥ <InlineMath math={'\\alpha'} /> → <strong>Fail to reject H<sub>0</sub>:</strong> Not enough evidence of a difference
            </p>

            <h4 id="calculator">Calculator Commands (TI-84/83+):</h4>
            <strong>Enter observed data into Matrix A:</strong>
            <ol>
            <li>Press: 2nd → <InlineMath math={'x^2'} /> (MATRIX)</li>
            <li>Select EDIT → [A]</li>
            <li>Enter number of rows (groups) and columns (categories)</li>
            <li>Fill in observed values</li>
            </ol>

            <strong>Run the test:</strong>
            <ol>
            <li>Press STAT → scroll to TESTS</li>
            <li>Choose <InlineMath math={'\\chi^2'} />-Test (Option C)</li>
            <li>Confirm Matrix A is selected</li>
            <li>Press ENTER</li>
            <li>Calculator will display:
                <ul>
                <li><InlineMath math={'\\chi^2'} /> statistic</li>
                <li>Degrees of freedom</li>
                <li>p-value</li>
                <li>(Matrix B will contain expected counts)</li>
                </ul>
            </li>
            </ol>
            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1 </strong>
            <p>A sociologist wants to know whether three different regions (Urban, Suburban, and Rural) have the same distribution of preferred work arrangements. She randomly samples residents from each region and records whether they prefer: Working In-Office, Working Remotely, Hybrid Schedule. The results are summarized in the table below</p>
            <img src="/table1.png" alt="Description" style={{ width: '540px' }} />
            <p>Perform a Chi-Squared Test for Homogeneity at the 0.05 significance level. </p>
            <p>
              <a href="https://drive.google.com/file/d/1nC8P5Lo1B7bkWr3WFOIMKfpkwX1UwFAp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution
              </a>
            </p>

            <strong>Problem 2 </strong>
            <p>A music company surveys teens and young adults on their favorite food company: Chipotle, CAVA, and Wingstop. </p>
            <img src="/table2.png" alt="Description" style={{ width: '540px' }} />
            <p>Perform a Chi-Squared Test for Homogeneity at the 0.05 significance level. </p>

            <p>
              <a href="https://drive.google.com/file/d/1LJikJjwc-VaA5oREWIVom2t98Ck6oEko/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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

export default chihomo;
