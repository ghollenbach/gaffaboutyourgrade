/* 1 sample mean t-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Onesamplettest() {
    const questions = [
        {
            question: "What is the assumption made for performing the hypothesis test with T distribution?",
            options: [
                "The distribution is symmetric",
                "The distribution is bimodal",
                "The distribution has constant variance",
                "The distribution is approximately normal"
            ],
            correctIndex: 3,
            explanation: "In order to perform a hypothesis test with a t-distribution (1 sample mean t-test), we must assume that the distribution is approximately normal. While an approximately normal distribution may be symmetric, not all symmetric distributions will satisfy the condition. Bimodality violates an approximately normal distribution. Constant variance is irrelevant to a t-distribution."
        },
        {
            question: "How many samples can you have in a 1 sample mean t-test?",
            options: ["0", "1", "-1", "Π"],
            correctIndex: 1,
            explanation: "It's in the name… You can only have 1 sample in a 1 sample mean t-test because you’re testing whether the mean of a single sample differs from a known or hypothesized population mean."
        },
        {
            question: "The central limit theorem (CLT) states that as the sample size increases…",
            options: [
                "The shape of the sampling distribution of sample means will approach a normal distribution if the shape of the population distribution is approximately normal.",
                "The shape of the sampling distribution of sample proportions will approach a normal distribution if the shape of the population distribution is approximately normal.",
                "The shape of the sampling distribution of sample means will approach a normal distribution, regardless of the shape of the population distribution.",
                "The shape of the sample distribution will approach a normal distribution, regardless of the shape of the population distribution."
            ],
            correctIndex: 2,
            explanation: "The central limit theorem states that as the sample size increases, the shape of the sampling distribution of sample means will approach a normal distribution, regardless of the shape of the population. Know this! The distribution of the population is irrelevant, this does not apply for sampling distributions of sample proportions, and it must be a sampling distribution of sample means."
        },
        {
            question: "What is sampling variability?",
            options: [
                "The variation in the value of the sample statistic",
                "The variation in the size of the samples",
                "The variation in the true population parameter",
                "The variation in populations from which the sample is taken"
            ],
            correctIndex: 0,
            explanation: "Sampling variability is the variation in the value of a sample statistic because the obtained statistic may vary based on the members of your sample (e.g. if you picked really smart students, the average GPA may be higher than the true GPA or the GPA of the least hardworking students)."
        },
        {
            question: "The standard deviation of the sampling distribution of sample means will be:",
            options: [
                "Larger than the standard deviation of the population",
                "Smaller than the standard deviation of the population",
                "The same size as the standard deviation of the population",
                "The reciprocal of the standard deviation of the population"
            ],
            correctIndex: 1,
            explanation: "The standard deviation of the sample is given by 𝜎/sqrt(n). Since n is always a whole number, the standard deviation of the population is divided by a number greater than 1; the standard deviation of the sampling distribution of sample means will be smaller than that of the population."
        },
        {
            question: "The mean of the sampling distribution of sample means is always:",
            options: [
                "0",
                "The sample size",
                "The population mean",
                "The population mean divided by the sample size"
            ],
            correctIndex: 2,
            explanation: "Know this! The mean of the sampling distribution of sample means is always equal to the population mean."
        },
        {
            question: "Why do we require a random sample?",
            options: [
                "Reduces standard deviation",
                "Removes gaffney",
                "Decreases the level of significance",
                "Removes bias"
            ],
            correctIndex: 3,
            explanation: "Random sampling ensures every member of the population has an equal chance of being selected, removing bias. Standard deviation decreases with a larger sample size, not necessarily a random one. Gaffney and level of significance are constants!"
        },
        {
            question: "Sarah consumes an unhealthy amount of trans fats every day. She wants to determine if the true mean trans fat consumption for the average person exceeds the recommended maximum daily intake. Let her null hypothesis state that the average daily trans fat consumption is equal to the maximum daily intake. Sarah conducted a 1-sample mean t-test and calculated a p-value of 0.02. At the 0.05 level of significance, do we reject the null hypothesis?",
            options: [
                "Yes, reject because the p-value is less than alpha",
                "Yes, reject because the p-value is greater than alpha",
                "No, fail to reject because the p-value is less than alpha",
                "No, fail to reject because the p-value is greater than alpha"
            ],
            correctIndex: 0,
            explanation: "If the p-value is less than alpha, we reject. If the p-value is greater than alpha, we fail to reject. Since the p-value was less than alpha in this problem, we reject the null hypothesis at the 0.05 level of significance."
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
            <h1 id="top">1-Sample Mean T-Test</h1>
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

            <h4>When do we use a 1 - Sample Mean T-Test?</h4>
            <p>
              When you're testing a claim about a <strong>population mean</strong> but you <strong>do not know the population standard deviation</strong>. That is actually the most common situation in real-world data!
            </p>

            <h4>Describing Sampling Distributions + Key Vocabulary:</h4>
            <ul>
              <li><strong>Bias:</strong> the distance that a distribution is from the true center</li>
              <li><strong>Variability:</strong> the spread of the scores</li>
              <li><strong>Sampling Variability:</strong> the variation in the sample statistic (sampling variability is ok, this is why we use a sampling distribution)</li>
              <li><strong>Sampling Distribution:</strong> the distribution of values taken by the statistic in all possible samples of the same size from the same population</li>
            </ul>
            <p>
              The variability of a sampling statistic is described by the spread of the distribution. The spread is largely determined by the size of the sample (<strong>smaller sample equates to larger spread and vice versa</strong>).
            </p>

            <h4>Sampling Distribution of Sample Means:</h4>
            <p>
              <strong>What is a sampling distribution of sample means?</strong> A distribution obtained by using the means computed from random samples of a specific size taken from a population.
            </p>

            <h4>The T-Distribution:</h4>
            <p>
              The t-distribution is a probability distribution used in inferential statistics—specifically when you are estimating or testing the mean of a population and the population standard deviation is unknown.
            </p>
            <p>The t-distribution is:</p>
            <ul>
              <li>bell-shaped</li>
              <li>symmetric about the mean</li>
              <li>the mean, median, and mode are 0 (and at the center of the distribution)</li>
              <li>the curve never touches the x-axis</li>
              <li>𝜎² is greater than 1</li>
              <li>the t-distribution curve depends on the degrees of freedom*</li>
              <li>as n increases, the t-distribution approaches the standard normal distribution</li>
            </ul>
            <p>
              <em>*For this type of hypothesis test, the degrees of freedom (d.f.) is n-1</em>
            </p>
            <img src="/diagram1.png" alt="Description" style={{ width: '400px' }} />
            <p>
              <strong>T-critical values (tCV)</strong> are found on the t-table linked here on page 5: <a href="https://drive.google.com/file/d/1eQ3-l8sAY6Is8IaZ2yCx4hA0NBESdO3K/view?pli=1" target="_blank" rel="noopener noreferrer">AP Statistics Reference Tables.pdf - Google Drive</a>. To use it, find the appropriate alpha value and d.f., and refer to the corresponding t-value.
            </p>
            <p>
              <strong>Conservative Rule:</strong> When our degrees of freedom are not listed on the t table, we round down to the next lowest d.f. (must be noted in your work!)
            </p>

            <h4>Need to Know Properties:</h4>
            <ul>
              <li>
                <InlineMath math={'\\mu_x = \\mu'} />
              </li>
              <li>
                <InlineMath math={'\\sigma_x = \\frac{\\sigma}{\\sqrt{n}}'} /> &larr; The standard deviation of the sampling distribution of sample means is less than the standard deviation of the population!
              </li>
            </ul>

            <h4>Hypotheses</h4>
            <p>
              (For generality, let's let the claimed population mean be denoted as 'm', and the true population mean be denoted as μ)
            </p>
            <ul>
              <li>
                <strong>H<sub>0</sub> (null hypothesis):</strong> μ = m
              </li>
              <li>
                <strong>H<sub>a</sub> (alternative hypothesis):</strong>
                <ul>
                  <li>μ &gt; m (right-tailed test)</li>
                  <li>μ &lt; m (left-tailed test)</li>
                  <li>μ ≠ m (two-tailed test - why? because μ could be greater than or less than m)</li>
                </ul>
              </li>
            </ul>

            <img src="/diagram2.png" alt="Description" style={{ width: '540px' }} />

            <h4>Central Limit Theorem (CLT):</h4>
            <p>
              So, a little spoiler, we must be able to assume that the sampling distribution of sample means is approximately normal before performing a 1 - sample mean t-test. Usually, normality can be checked if the population is normally distributed. If the population isn't normally distributed (or we don't know if it is), we can do something called the <strong>Central Limit Theorem</strong>.
            </p>
            <p>
              <strong>Central Limit Theorem (CLT):</strong> as the sample size increases, the shape of the sampling distribution of sample means will approach a normal distribution, regardless of the shape of the population distribution.
            </p>
            <p>
              From this, we can say that if the sample size is large enough, we can assume approximate normality. How large is large enough? It's arbitrary, but we say if the sample size is <strong>greater than or equal to 30</strong>, then the CLT can be applied.
            </p>

            <h4>Assumptions:</h4>
            <p>
              A little Gaffney mnemonic… <strong>RNI!</strong> Randomness, normality, and independence. Let's look at how to check each.
            </p>
            <ul>
              <li>
                <strong>Randomness:</strong> Check that the sample is a <u>random sample taken from the population of interest.</u><br />
                <em>pro-Gaffney tip: Don't forget to say the population of interest, that's a whole point. And always put it in context!</em>
              </li>
              <li>
                <strong>Normality:</strong> Either the population is normally distributed, or the CLT applies.
              </li>
              <li>
                <strong>Independence:</strong> 10% condition. As long as the population size is greater than or equal to 10 times the sample size, we can use the formula for standard deviation and proceed with the hypothesis test.
              </li>
            </ul>

            <h4 id="calculator">Calculator Commands:</h4>
            <p>
              <strong>tcdf(lower bound, upper bound, d.f.):</strong> This is used to find the percentage of time that a variable will fall into a given region on the t-distribution (similar to normcdf(...)!). Use it to convert a t-statistic to a p-value.
            </p>

            <h2 id="free-response">Free Response Practice</h2>
            <p>
              Okay, that was a lot… Let's see an example with explanations, along with what to include in this type of hypothesis test!
            </p>
            <p>
              A nutritionist claims that a certain brand of granola bars contains an average of 200 calories per bar. Grace Hollenbach, however, is a very skeptical student; she thinks the true mean is less than 200 calories. She randomly selects 12 granola bars and finds that the mean number of calories is 194.8 with a sample standard deviation of 6.5 calories. The population distribution of calories in the brand of granola bars is normal. Does the data provide convincing evidence that the mean number of calories is less than 200?
            </p>
            <p>
              <a href="https://drive.google.com/file/d/13t8U3gK9WcA2jtY8W-Kz0pDkFmxL6_zU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution: 1-Sample Mean t-Test Example FRQ.pdf
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

export default Onesamplettest;
