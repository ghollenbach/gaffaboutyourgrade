/* 1 sample proportion z-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Onesampleztest() {
    const questions = [
        {
            question: "A random sample of 20 students from Montgomery Blair High School is estimated such that 40% of students fail the AP Statistics exam. Can we assume independence?",
            options: [
                "Yes there is independence by the 10% condition.",
                "No there is not independence by the 10% condition.",
                "Yes there is independence by the success/failure condition.",
                "No there is not independence by the success/failure condition."
            ],
            correctIndex: 0,
            explanation: "In order to check independence, we see if the 10% condition is satisfied: 10n < pop. Since there are more than 200 students at Montgomery Blair High School, our sample size is less than 10% of the population and we can assume independence."
        },
        {
            question: "Inferences are made about…",
            options: [
                "Populations",
                "Samples",
                "Subjects",
                "Intervals"
            ],
            correctIndex: 0,
            explanation: "Inferences are made about populations! Samples give us statistics that we then extrapolate to make a prediction—an inference—about a population."
        },
        {
            question: "John wants to see if a student's hair color affects their math grade. John wants to determine if the true proportion of tests that brunettes score an A on is greater than the proportion of tests that blondes score an A on (0%). What should be her null and alternative hypotheses?",
            options: [
                "H0: p = 0.0; Ha: p ≠ 0.0",
                "H0: p̂ = 0.0; Ha: p̂ > 0.0",
                "H0: p = 0.0; Ha: p > 0.0",
                "H0: p̂ = 0.0; Ha: p̂ ≠ 0.0"
            ],
            correctIndex: 2,
            explanation: "Since the proportion of tests that blondes score an A on is 0%, and we assume no difference in the true proportion, our null hypothesis should state that p = 0.0. Since it is impossible to have a math score less than 0% (and the prompt asks if the true proportion of tests that brunettes score an A on is greater than that of blondes), this becomes a right tailed test. The alternative hypothesis should be p > 0.0."
        },
        {
            question: "When can we assume an approximately normal distribution of our sample distribution of sample proportions?",
            options: [
                "If the expected successes and failures are both greater than 10.",
                "If the sample size is less than 10% of the population size.",
                "If the sample was taken randomly.",
                "If the population follows a unimodal distribution."
            ],
            correctIndex: 0,
            explanation: "In order to assume an approximately normal distribution the sampling distribution of sample proportions, the success/failure condition must be met. The success/failure condition details that the expected successes and failures for a scenario are both greater than 10."
        },
        {
            question: "As the sample size gets larger…",
            options: [
                "The standard deviation gets larger",
                "The standard deviation remains unchanged",
                "The standard deviation gets smaller",
                "The standard deviation is always 1"
            ],
            correctIndex: 2,
            explanation: "The formula for standard deviation for a sampling distribution of sample proportions is sqrt(pq/n). As n increases, 𝜎 decreases."
        },
        {
            question: "What is the formula for standard deviation of a 1-sample proportion z-test?",
            options: [
                "Sqrt(pq)",
                "Sqrt(pq/n)",
                "pq/n",
                "n"
            ],
            correctIndex: 1,
            explanation: "Know this!"
        },
        {
            question: "In a 1-sample proportion z-test, when calculating standard deviation, what value is used for p?",
            options: [
                "Use the probability of success based on the sample (X/n)",
                "Use the probability of success for which we assume the true probability to be",
                "Use the sample size value",
                "Use the same value as q"
            ],
            correctIndex: 1,
            explanation: "The standard deviation of the sampling distribution is a property of the population and the sampling process, not just one particular sample. It measures how much sample proportions would vary if you repeatedly took samples from the population where the true proportion is p. Therefore, we must use the hypothesized value for p, not the proportion from a given sample."
        },
        {
            question: "When do we use a z-test instead of a t-test?",
            options: [
                "When we know the standard deviation",
                "When we don't know the standard deviation",
                "When we know the alpha value",
                "When we don't know the alpha value"
            ],
            correctIndex: 0,
            explanation: "In order to use a z-test, we must be able to calculate a z-score. In order to calculate a z-score, we must know 𝜎 (think back to unit 1!). The alpha value is irrelevant because if we don’t know it, we assume it’s 0.05."
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
            <h1 id="top">1-Sample Proportion Z-Test</h1>
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

            <h4>When do we use a 1 - Sample Proportion Z-Test?</h4>
            <p>
              A 1-sample proportion z-test is used when you're testing a claim about a population proportion, and you have data from a single random sample.
            </p>

            <h4>Sampling Distribution of Sample Proportions:</h4>
            <p>
              <strong>What is a sampling distribution of sample proportions?</strong> A distribution obtained by using the proportions computed from random samples of a specific size taken from a population.
            </p>

            <h4>Need to Know Properties:</h4>
            <p>
              To compute the z-statistic, use the following formula: <InlineMath math={'z = \\frac{\\hat{p} - p}{\\sqrt{pq/n}}'} /> , such that <InlineMath math={'\\hat{p} = X/n'} />, <InlineMath math={'p'} /> = population proportion, <InlineMath math={'q = 1-p'} />, and <InlineMath math={'n'} /> = sample size.
            </p>
            <p>
              Standard Deviation for the sampling distribution of sample proportions: <InlineMath math={'\\sigma = \\sqrt{pq/n}'} />
            </p>

            <h4>Hypotheses</h4>
            <p>
              (For generality, let's let the claimed population proportion be denoted as 'm', and the true population proportion be denoted as q)
            </p>
            <ul>
              <li>
                <strong>H<sub>0</sub> (null hypothesis) will always assume that the true population proportion equals the claimed value:</strong> p = m
              </li>
              <li>
                <strong>H<sub>a</sub> (alternative hypothesis) can take a few forms, depending on the context of the problem:</strong>
                <ul>
                  <li>p &gt; m (right-tailed test)</li>
                  <li>p &lt; m (left-tailed test)</li>
                  <li>p ≠ m (two-tailed test - why? because p could be greater than or less than m)</li>
                </ul>
              </li>
            </ul>

            <img src="/diagram2.png" alt="Description" style={{ width: '540px' }} />

            <h4>Success/Failure Condition:</h4>
            <p>
              Spoiler… the success/failure condition is used to determine approximate normality of a given sampling distribution of sample proportions. Using the hypothesized population proportion (NOT the sample proportion), you check if the predicted successes and failures will be greater than or equal to 10. If they are not, you cannot proceed (if you think this is the case on a FOK, still proceed so you don't lose major points!).<br />
              To conduct the success failure condition, check that <InlineMath math={'np \\geq 10'} /> and <InlineMath math={'nq \\geq 10'} />. See the example FRQ solution on this page for further support if you need.
            </p>

            <h4>Assumptions:</h4>
            <p>
              A little Gaffney mnemonic… <strong>RNI!</strong> Randomness, normality, and independence. Let's look at how to check each.
            </p>
            <ul>
              <li>
                <strong>Randomness:</strong> Check that the sample is a random sample taken from the population of interest.<br />
                <em>pro-Gaffney tip: Don't forget to say the population of interest, that's a whole point. And always put it in context!</em>
              </li>
              <li>
                <strong>Normality:</strong> Success/Failure condition
              </li>
              <li>
                <strong>Independence:</strong> 10% condition. As long as the population size is greater than or equal to 10 times the sample size, we can use the formula for standard deviation and proceed with the hypothesis test.
              </li>
            </ul>

            <h4 id="calculator">Calculator Commands:</h4>
            <ul>
              <li>ZCV = invNorm(𝛼, 0, 1, LEFT/CENTER/RIGHT)</li>
              <li>P(z &lt; Y) = normalcdf(-1E00, Y, 0, 1)</li>
              <li>P(z &gt; Y) = 1 - normalcdf(-1E00, Y, 0, 1)</li>
              <li>Note: If the test is two-tailed: 2*P(z &lt; Y) = 2*normalcdf(-1E00, Y, 0, 1)</li>
              <li>Note: All values that are included in the calculator, but generally the lower bounds, mean, and standard deviations will be auto-filled and should not be changed. Simply, input your unique data.</li>
            </ul>

            <h2 id="free-response">Free Response Practice</h2>
            <p>
              Let's look at an example FRQ problem!
            </p>
            <strong>Problem 1</strong>
            <p>
              A national survey claims that 70% of teenagers regularly eat breakfast before school. Ms. Gaffney wonders if the proportion is different at Montgomery Blair High School. She randomly surveys 80 students at Blair and finds that 50 of them say they eat breakfast before school. Does the data provide convincing evidence to reject the national survey’s claim? Use a significance level of 0.05.
            </p>
            <p>
              <a href="https://drive.google.com/file/d/1WAQK2Qq33uHp-tOhKlt1mpMht3Cek-3p/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution: 1-Sample Proportion Z-Test.pdf
              </a>
            </p>

            <strong>Problem 2</strong>
            <p>MyMCPS Classroom claims that at least 70% of its users are satisfied with the new online design. In a random sample of 150 users, 96 said they were satisfied. At the 0.05 level of significance, is there evidence that fewer than 70% of users are satisfied?</p>
            <p>
              <a href="https://drive.google.com/file/d/1UZDa5cV6llmvUx1sljwm1uz4emrUwJYG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution: 1-Sample Proportion Z-Test.pdf
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

export default Onesampleztest;
