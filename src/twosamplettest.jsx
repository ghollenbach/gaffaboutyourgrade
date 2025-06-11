/* 1 sample proportion z-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Twosampleztest() {
  const questions = [
    {
      question: "Questions 1-4 pertain to the following prompt: The average size of a person named Sarah is 89kgs. The average size of a person named Grace is 80kgs. The data was obtained from two samples with standard deviations 15 and 28, respectively, and sample sizes 10 and 12, respectively. If working by hand, what are the degrees of freedom?",
      options: ["9", "10", "11", "12"],
      correctIndex: 0,
      explanation: "To be conservative, when calculating degrees of freedom by hand, choose the smaller sample size and subtract 1."
    },
    {
      question: "Questions 1-4 pertain to the following prompt: The average size of a person named Sarah is 89kgs. The average size of a person named Grace is 80kgs. The data was obtained from two samples with standard deviations 15 and 28, respectively, and sample sizes 10 and 12, respectively. What is the standard deviation?",
      options: ["17.8694", "1.9578", "12.8263", "9.3719"],
      correctIndex: 0,
      explanation: "Use the formula! Take the square root of the sum of the variances (standard deviations, squared)."
    },
    {
      question: "Questions 1-4 pertain to the following prompt: The average size of a person named Sarah is 89kgs. The average size of a person named Grace is 80kgs. The data was obtained from two samples with standard deviations 15 and 28, respectively, and sample sizes 10 and 12, respectively. Can it be concluded that the average mass of the people in either population (Sarahs or Graces) is different? Assume the populations are normally distributed.",
      options: [
        "Yes, we can assume that the average mass of the people in either population is different because the average size of a person named Sarah is 89kgs while the average size of a person named Grace is less, at 80kgs.",
        "Yes, we can assume that the average mass of the people in either population is different because our p-value is less than α and our H0 stated that the average masses were equal.",
        "No, we cannot assume that the average mass of the people in our population is different because our p-value is less than α and our H0 stated that the average masses were different.",
        "No, we cannot assume that the average mass of the people in either population is different because our t-value is greater than α."
      ],
      correctIndex: 1,
      explanation: "We must conduct a hypothesis test. In conducting the hypothesis test, you will find that the p-value is less than 0.05, assumed alpha, and therefore the null hypothesis is rejected. This means that we can conclude that the average mass of the people in either population is different."
    },
    {
      question: "Questions 1-4 pertain to the following prompt: The average size of a person named Sarah is 89kgs. The average size of a person named Grace is 80kgs. The data was obtained from two samples with standard deviations 15 and 28, respectively, and sample sizes 10 and 12, respectively. Which of the following is an irrelevant assumption to this prompt?",
      options: [
        "The samples were randomly selected from the populations of interest.",
        "The populations are normally distributed.",
        "The standard deviations are different from each other.",
        "The populations are independent of each other and satisfy the 10% condition."
      ],
      correctIndex: 2,
      explanation: "The only necessary assumptions are: RNI. Randomness, normality, and independence within and between populations."
    },
    {
      question: "Which of the following is not a valid alternate hypothesis for a 2-sample mean t-test?",
      options: ["μ1 ≠ μ2", "μ1 = μ2", "μ1 < μ2", "μ1 > μ2"],
      correctIndex: 1,
      explanation: "Option 2 would be a great null hypothesis, not alternate. Since “μ1 = μ2” shows no effect, it does not qualify."
    },
    {
      question: "In these hypothesis tests, we must assume:",
      options: [
        "Independence between samples and within samples",
        "Independence between samples only",
        "Independence within samples only",
        "Depends on the populations of interest"
      ],
      correctIndex: 0,
      explanation: "Independence must be observed within each sample to ensure that the sample mean and variance are accurate and unbiased estimates of the population parameters. Independence must also be observed between samples because a 2-sample mean t-test tests independent samples only. If samples are dependent (like measurements before and after on the same subjects), the two-sample t-test is not appropriate; instead, a paired t-test or other dependent-sample methods should be used."
    },
    {
      question: "What is the minimum information needed to complete a 2-sample mean t-test?",
      options: [
        "Knowing the sample sizes of both",
        "Knowing the variances and sample sizes of both",
        "Knowing the means, variances, and sample sizes of both",
        "Knowing the mean, variance, and sample size of at least one of the populations of interest."
      ],
      correctIndex: 2,
      explanation: "We need the means otherwise there is nothing to compare (the test compares the difference between the two sample means). The size of variability affects how confident you can be that the observed difference is meaningful, not just random chance. Sample size influences the precision of your estimates, and is needed to calculate degrees of freedom."
    },
    {
      question: "To find a t-value, which of the following ways will not work?",
      options: [
        "Using the calculator",
        "Using a t-table",
        "Using the t-value provided in the prompt",
        "Using the corresponding chi-squared value"
      ],
      correctIndex: 3,
      explanation: "Never use the chi-squared table when looking for a t-value!"
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
            <h1 id="top">2-Sample Proportion Z-Test</h1>
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

            <h4>When do we use a 2-Sample Mean T-Test?</h4>
            <p>
              We use a 2-Sample Mean t-Test when we want to test the difference between two means of different populations.
            </p>

            <h4>The T-Distribution:</h4>
            <p>
              The t-distribution is a probability distribution used in inferential statistics—specifically when you are estimating or testing the mean of a population and the population standard deviation is unknown.
            </p>
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
              <strong>T-critical values (t<sub>CV</sub>)</strong> are found on the t-table linked here on page 5: <a href="https://drive.google.com/file/d/1eQ3-l8sAY6Is8IaZ2yCx4hA0NBESdO3K/view?pli=1">AP Statistics Reference Tables.pdf - Google Drive</a>. To use it, find the appropriate alpha value and d.f., and refer to the corresponding t-value.
            </p>
            <p>
              <strong>Conservative Rule:</strong> When our degrees of freedom are not listed on the t table, we round down to the next lowest d.f. (must be noted in your work!)
            </p>

            <h4>Need to Know Properties:</h4>
            <p>
              To calculate the test statistic (we assume unequal variances): </p>
            <InlineMath math="\displaystyle t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}" />
            <p> 
              Calculating the degrees of freedom (d.f.) is a little confusing, because there are two samples, right? To combat this, if working by hand, we take the smaller sample size, n, and set d.f. = n-1. The calculator uses a different formula for degrees of freedom. If you use this value, truncate the d.f. and put a “≈” symbol to denote that it is an approximation.
            </p>

            <h4>Hypotheses:</h4>
            <ul>
              <li><strong>H<sub>0</sub> (null hypothesis):</strong> μ₁ = μ₂</li>
              <li><strong>H<sub>a</sub> (alternative hypothesis):</strong>
                <ul>
                  <li>H<sub>a</sub>: μ₁ &gt; μ₂</li>
                  <li>H<sub>a</sub>: μ₁ &lt; μ₂</li>
                  <li>H<sub>a</sub>: μ₁ ≠ μ₂</li>
                </ul>
              </li>
            </ul>

            <h4>Assumptions:</h4>
            <p>
              A little Gaffney mnemonic… <strong>RNI!</strong> Randomness, normality, and independence. But this time, we need to check 2 types of independence. Let’s look at how to check each.
            </p>
            <ul>
              <li>
                <strong>Randomness:</strong> Check that the samples are a random sample taken from the populations of interest.<br />
                <em>pro-Gaffney tip: Don't forget to say the population of interest, that's a whole point. And always put it in context!</em>
              </li>
              <li>
                <strong>Normality:</strong> Either the population is normally distributed, the CLT applies (n &gt; 30), or we create NPP's for each sample that shows approximate linearity.*
              </li>
              <li>
                <strong>Independence (within each sample):</strong> 10% condition. As long as the population size is greater than or equal to 10 times the sample size, we can use the formula for standard deviation and proceed with the hypothesis test.
              </li>
              <li>
                <strong>Independence (between both samples):</strong> Check that both samples are independent of one another (e.g. boys and girls are always independent, but students and children are not).
              </li>
            </ul>
            <p>
              <em>*If you aren't familiar with the CLT or the NPP, visit the 1-Sample Mean T-Test page that has notes and instructions.</em>
            </p>

            <h4 id="calculator">Calculator Commands:</h4>
            <ul>
              <li>Stat → Tests → 2-Samp T-Test → input data/stats → Calculate</li>
            </ul>

            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1</strong>
            <p>
              A teacher wants to compare the test scores of students who studied with music vs. without music. She randomly selects 2 small groups of students and records their scores:
            </p>
            <ul>
              <li><strong>With Music</strong>: 82, 90, 76, 88, 85</li>
              <li><strong>Without Music</strong>: 75, 78, 72, 74, 69, 80</li>
            </ul>
            <p>Does the data provide convincing evidence that the mean score is different between the two groups? Use a significance level of α=0.05.</p>
            <p>
              <a href="https://drive.google.com/file/d/13iqgclzNqiJxoORMEmhbRPu-8hJ_UQVG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution: 1-Sample Proportion Z-Test.pdf
              </a>
            </p>

            <strong>Problem 2</strong>
            <p>A nutritionist wants to compare the mean iron levels (mg/day) of teenage boys and girls. She takes independent random samples from each group:</p>
            <ul>
              <li><strong>Boys</strong>: n = 35, x̄ = 15.3, s<sub>x</sub> = 2.4</li>
              <li><strong>Girls</strong>: n = 30, x̄ = 13.8, s<sub>x</sub> = 2.1</li>             
            </ul>
            <p>Does the data provide evidence at the 0.01 significance level that teenage boys consume more iron on average than teenage girls?</p>
            <p>
              <a href="https://drive.google.com/file/d/11M2uKEAbKOjZgHgsC9ktYx8qWbNMjpsH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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

export default Twosampleztest;
