/* 1 sample proportion z-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Pairedt() {
    const questions = [
    {
        question: "Grace wants to test whether drinking Celsius helps improve test scores on a stat FOK. She records students' test scores on the FOK before and after they drink a Celsius. She then calculates the difference in scores for each student and plans to test whether the mean difference is greater than 0, using a significance level of 0.05. Which of the following unique conditions have to be met to use a paired t-test?",
        options: [
        "The two sets of scores must come from independent groups of students",
        "The pop of test scores must be normally distributed, regardless of sample size.",
        "The differences in scores (after - before) should be approximately normally distributed if the sample size is small.",
        "The students must be tested at the exact same time of day to ensure consistency."
        ],
        correctIndex: 2,
        explanation: "Because in a paired t-test, we care about the distribution of differences. If the sample size is small, the differences should be approximately normal."
    },
    {
        question: "What is a paired t-test?",
        options: [
        "The paired t-test is a method used to test whether the mean difference between pairs of measurements is zero or not.",
        "The paired t-test is a method used to test whether the p-value is closer to -1 or 1.",
        "The paired t-test is a method used to test whether the mean difference between pairs of measurements is 1 or not.",
        "The paired t-test is a method used to test whether the mean difference between pairs of measurements is -1 or not."
        ],
        correctIndex: 0,
        explanation: "Because in a paired t-test, we care about the distribution of differences and how close these are to zero to see the significance of the difference."
    },
    {
        question: "Mrs. Gaffney began using a new face cream every day to improve her skin. She wants to measure whether or not her skin is less dry after using the cream. She applies the cream daily to half of her face, and then performs a paired t-test to figure out whether or not the cream improved her skin. What variables would be compared for the paired t-test?",
        options: [
        "Her right arm with the cream compared to her left arm",
        "Her face compared to another family member's face",
        "Half of her face with the cream compared to the other half without",
        "Her right arm with the cream compared to another persons arm"
        ],
        correctIndex: 2,
        explanation: "Because in a paired t-test, we care about the differences between before and after, and therefore, this can only be done in this case by comparing Mrs.Gaffney to some form of her own body (in this case her face as stated in the problem)."
    },
    {
        question: `Mrs. Gaffney wants to compare FOK A to FOK B. She gives students FOK A one day and FOK B another day to test the difficulty of the exams. Below are their scores. Assuming all assumptions are met, what is the test statistic?

Name      FOK A   FOK B   Before - After
Anuva     50      60      -10
Grace H   60      75      -15
Grace D   70      70      0
Sarah     60      80      -20
`,
        options: [
        "-2.63 = t",
        "-5.4 = t",
        "-4.3 = t",
        "-3.1 = t"
        ],
        correctIndex: 0,
        explanation: "Using the formula t = (the mean of the differences) / (standard deviation of the differences*sqrt(n)), we get -11.25/4.27 = approximately -2.63."
    },
    {
        question: "Mrs. Gaffney wants to perform a t-test for her sports stats class to see the difference in scores on the same test depending on what she teaches. She records a random sample of 14 students for two days, teaching fantasy football one day and sports stat the next. What degrees of freedom would be used in this scenario?",
        options: [
        "12",
        "1",
        "-1",
        "13"
        ],
        correctIndex: 3,
        explanation: "Degrees of freedom for a paired t-test is always pair numbers/n - 1. In this case that would be (14 “pairs” of students) - 1 = 13."
    },
    {
        question: "Anuva wants to test whether chewing gum during a test improves student scores. She gives 16 randomly selected students a pre-test, then after gives them gum and a post test. She then calculates the difference in scores, why would a paired t-test be appropriate in this scenario?",
        options: [
        "Since the students were given two tests, their scores were paired, and a paired t-test should be used.",
        "Since there was a small sample size of 16 students, their scores were paired and a paired t-test should be used.",
        "Since students were examined before and after being given the gum, their scores are thus paired, and a paired t-test should be used.",
        "Since students were randomly selected, their scores were paired, and a paired t-test should be used."
        ],
        correctIndex: 2,
        explanation: "Because in a paired t-test, we care about the distribution of differences. Which in this case, would be measuring the test scores before and after being given the gum."
    },
    {
        question: "Blair Swim and Dive wanted to test if practicing with fins made them faster at the 25-meter freestyle. They measured each swimmer's time before and after practicing with fins. What would be the correct null and alternative hypotheses of this paired t-test?",
        options: [
        "Ho: μd = 0, Ha:  μd > 0",
        "Ho: μd = 0, Ha:  μd < 0",
        "Ho: μd = 0, Ha:  μd ≠  0",
        "Ho: μd > 0, Ha:  μd =  0"
        ],
        correctIndex: 1,
        explanation: "Since this is a paired t-test. We are trying to figure out if the swim time after practice is lower, meaning that the swimmers are then faster. Therefore, the null hypothesis should mean that there is no difference in times, hence equal to 0, and the alternative hypothesis should be that the difference is less than 0."
    },
    {
        question: `Grace wants to compare students' scores after using Gaff About Your Grade. She gives students the same FOK once before using Gaff About Your Grade and once after. Below are their scores. Find the test statistic.

Name      Before GAYG   After GAYG   Before - After
Anuva     30            63           -33
Grace H   40            72           -32
Grace D   50            59           -9
Sarah     60            76           -16
`,
        options: [
        "-4.21",
        "-3.78",
        "-5.13",
        "-4.12"
        ],
        correctIndex: 1,
        explanation: "Using the formula t = (the mean of the differences) / (standard deviation of the differences*sqrt(n)), we get -22.5/5.95 = approximately -3.78."
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
            <h1 id="top">Paired T-Test</h1>
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

            <h4>Purpose</h4>
            <p>
            The paired t-test determines whether there is a statistically significant difference between two related measurements by analyzing the mean of the differences within pairs.
            </p>
            <ul>
            <li>Is there a significant difference between paired measurements?</li>
            <li>What is the mean difference in the population?</li>
            </ul>

            <h4>When to Use Paired t-Tests</h4>
            <ul>
            <li><strong>Before/After studies:</strong> Same subjects measured twice</li>
            <li><strong>Matched pairs:</strong> Different subjects matched on characteristics</li>
            <li><strong>Natural pairs:</strong> Related subjects (twins, siblings)</li>
            <li><strong>Same subject, different conditions:</strong> Two treatments on same individuals</li>
            </ul>

            <h4>Paired vs. Independent Samples</h4>
            <ul>
            <li><strong>Paired:</strong> Same/matched subjects → Analyze differences → More powerful</li>
            <li><strong>Independent:</strong> Different groups → Compare group means → Less powerful</li>
            </ul>

            <h4>Conditions for Paired t-Procedures (<b>RAIN</b>)</h4>
            <ul>
            <li><strong>Random:</strong> Data from random sample or randomized experiment</li>
            <li><strong>Almost Normal:</strong> Differences follow approximately normal distribution</li>
            <li><strong>Independent:</strong> Pairs are independent of each other</li>
            <li><strong>n ≥ 30 or Normal:</strong> Large sample OR differences are normally distributed</li>
            </ul>

            <h4>How to Check Conditions</h4>
            <ul>
            <li><strong>Random:</strong> Verify data collection method</li>
            <li><strong>Normal:</strong> Make histogram/NPP of the differences (not original data)</li>
            <li><strong>Independent:</strong> Check that pairs don't influence each other</li>
            <li><strong>10% Condition:</strong> If sampling without replacement, check n ≤ 10% of population</li>
            </ul>

            <h4>Hypothesis Test Setup</h4>
            <ul>
            <li>H<sub>0</sub>: μ<sub>d</sub> = 0 (no difference between paired measurements)</li>
            <li>H<sub>a</sub>: μ<sub>d</sub> ≠ 0 (there is a difference) OR μ<sub>d</sub> &gt; 0 OR μ<sub>d</sub> &lt; 0</li>
            <li>Where μ<sub>d</sub> = true mean difference in population</li>
            </ul>

            <h4>Test Statistic Formula</h4>
            <InlineMath math="\displaystyle t = \frac{\bar{d} - \mu_0}{s_d/\sqrt{n}}" />
            <ul>
            <li><strong>d̄:</strong> Sample mean of differences</li>
            <li><strong>s<sub>d</sub>:</strong> Sample standard deviation of differences</li>
            <li><strong>n:</strong> Number of pairs</li>
            <li><strong>df = n - 1</strong></li>
            </ul>

            <h4>Process</h4>
            <ol>
            <li>Calculate differences: d = (measurement 1) - (measurement 2) for each pair</li>
            <li>Find summary statistics: d̄, s<sub>d</sub>, n</li>
            <li>Check conditions: Verify RAIN using differences</li>
            <li>Calculate test statistic: Use t-formula with df = n - 1</li>
            <li>Find p-value: Use t-distribution</li>
            <li>Make decision: Compare p-value to α</li>
            </ol>

            <h4>Interpretation</h4>
            <ul>
            <li><strong>Small p-value (&lt; α):</strong> Reject H<sub>0</sub>; evidence of significant difference between pairs</li>
            <li><strong>Large p-value (≥ α):</strong> Fail to reject H<sub>0</sub>; insufficient evidence of difference</li>
            <li><strong>Confidence interval:</strong> Range of plausible values for true mean difference</li>
            </ul>

            <h4>Calculator Commands</h4>
            <ul>
            <li>Enter differences in L1: Calculate d = x₁ - x₂ for each pair</li>
            <li><strong>Statistical Test:</strong> STAT → TESTS → T-Test</li>
            <li>Select: Data (if using list) or Stats (if you have summary statistics)</li>
            <li>
                <strong>Input:</strong>
                <ul>
                <li>μ₀ = 0</li>
                <li>List: L1 (your differences)</li>
                <li>Freq: 1</li>
                <li>Alternative hypothesis: ≠μ₀, &gt;μ₀, or &lt;μ₀</li>
                </ul>
            </li>
            <li>Calculate: Gives t-statistic, p-value, df, x̄, s<sub>x</sub>, n</li>
            </ul>

            <strong>Summary Statistics Method:</strong>
            If you have d̄, s<sub>d</sub>, and n already calculated:
            <ul>
            
            <li>Select Stats instead of Data</li>
            <li>Enter: x̄ = d̄, s<sub>x</sub> = s<sub>d</sub>, n = number of pairs</li>
            </ul>

            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1</strong>
            <p>
            Mrs. Gaffney designed an experiment to test whether Celsius consumption affects performance on a FOK. She gets a random sample of 12 students and has each student take two equivalent FOKs under different conditions. Each student took one test after drinking Celsius and another not having anything prior. The order of the tests was randomized for each student, and there was a one-week gap between the two testing sessions to avoid any extra effects. What conclusions can you draw about drinking Celsius? Use statistics to support your answer.
            </p>
            <table border="1" cellPadding="4" style={{ borderCollapse: 'collapse', marginBottom: 16 }}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Celsius Score</th>
                <th>No Celsius Score</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Anuva</td><td>88</td><td>84</td></tr>
                <tr><td>Grace a</td><td>82</td><td>81</td></tr>
                <tr><td>Grace b</td><td>87</td><td>76</td></tr>
                <tr><td>Grace c</td><td>85</td><td>83</td></tr>
                <tr><td>Grace d</td><td>39</td><td>21</td></tr>
                <tr><td>Grace e</td><td>45</td><td>39</td></tr>
                <tr><td>Grace f</td><td>87</td><td>73</td></tr>
                <tr><td>Grace g</td><td>98</td><td>96</td></tr>
                <tr><td>Grace h</td><td>39</td><td>21</td></tr>
                <tr><td>Grace i</td><td>72</td><td>45</td></tr>
                <tr><td>Grace j</td><td>86</td><td>75</td></tr>
                <tr><td>Sarah</td><td>92</td><td>88</td></tr>
            </tbody>
            </table>

            <p>
              <a href="https://drive.google.com/file/d/13iqgclzNqiJxoORMEmhbRPu-8hJ_UQVG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution: 1-Sample Proportion Z-Test.pdf
              </a>
            </p>      

            <strong>Problem 2</strong>
            <p>
            Blair Swim and Dive wanted to test if practicing with fins made them faster at the 25-meter freestyle. They took a random sample of 12 swimmers and measured each swimmer's time before and after practicing with fins. What conclusions can you draw about practicing with fins? Use statistics to support your answer.
            </p>
            <table border="1" cellPadding="4" style={{ borderCollapse: 'collapse', marginBottom: 16 }}>
            <thead>
                <tr>
                <th>Time Before Fins</th>
                <th>Time After Fins</th>
                <th>Difference</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>23.0</td><td>22.8</td><td>0.2</td></tr>
                <tr><td>24.3</td><td>24.1</td><td>0.2</td></tr>
                <tr><td>25.2</td><td>22.2</td><td>3.0</td></tr>
                <tr><td>26.1</td><td>24.3</td><td>1.8</td></tr>
                <tr><td>22.9</td><td>22.2</td><td>0.7</td></tr>
                <tr><td>21.1</td><td>20.9</td><td>0.2</td></tr>
                <tr><td>22.6</td><td>22.1</td><td>0.5</td></tr>
                <tr><td>19.8</td><td>17.5</td><td>2.3</td></tr>
                <tr><td>18.7</td><td>17.4</td><td>1.3</td></tr>
                <tr><td>21.4</td><td>20.9</td><td>0.5</td></tr>
                <tr><td>24.3</td><td>23.9</td><td>0.4</td></tr>
                <tr><td>25.2</td><td>24.3</td><td>0.9</td></tr>
            </tbody>
</table>
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

export default Pairedt;
