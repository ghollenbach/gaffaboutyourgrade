/* 1 sample proportion z-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Twoproportionztest() {
  const questions = [
  {
    question: "Sarah and Grace love to swim and want to calculate who wins more often in the 25-meter freestyle. A random sample of 15 races is chosen (step 1). There is a clearly defined winner for each race (step 2). The success/failure condition is valid (step 3). The races are categorical binary data. Sarah wants to conduct a 2 sample proportion z-test. Where did she go wrong with her assumptions? ",
    options: ["Step 1", "Step 2", "Step 3", "None, everything is correct."],
    correctIndex: 2,
    explanation: "The success/failure condition is not valid because neither Sarah nor Grace can have 10 wins and 10 losses, because the maximum number of outcomes for each swimmer is 15. "
  },
  {
    question: "Mrs. Gaffney wants to know whether the proportion of students who prefer FOKs is different between 10th and 11th graders. She randomly selects 100 10th graders, of which 40 say they prefer FOKs. She also randomly selects 100 11th graders, of which 30 say they prefer FOKs. What are the appropriate null and alternative hypothesis for a two-proportion z-test?",
    options: [
      "H0: p(10th) = p(11th); Ha: p(10th) ≠ p(11th)",
      "H0: p(10th) = p(11th); Ha: p(10th) > p(11th)",
      "H0: p(10th) > p(11th); Ha: p(10th) = p(11th)",
      "H0: p(10th) < p(11th); Ha: p(10th) = p(11th)"
    ],
    correctIndex: 0,
    explanation: "The null hypothesis checks the preference of 10th graders who prefer FOKs to 11th graders; the alternative hypothesis then tests everyone who does not."
  },
  {
    question: "Grace and Anuva race each other 50 times. They want to see who wins more often. Taking a random sample of 50 races, Grace is found to win 30 out of 50 races, with Anuva winning the remaining races. Find the standard error.",
    options: [
      "sqrt(.5*.5((1/50)+(1/50))",
      "sqrt(.6*.4((1/50)+(1/50))",
      "sqrt(.6*.4((30/50)+(20/50))",
      "sqrt(.5*.5((30/50)+(20/50))"
    ],
    correctIndex: 0,
    explanation: "Use the formula for a 2-proportion Z-Test standard error. The combined proportion is .5, with the sample size for both being 50 (n1 and n2)."
  },
  {
    question: " Mrs. Gaffney is comparing transportation to Montgomery Blair and Poolsville High School in the morning. She suspects that a larger proportion of students arrive late to Montgomery Blair High School. A random sample of 400 students in Montgomery Blair High School showed that 80 were late that day, and a random sample of 400 students in Poolsville found that 48 students were late that day. Mrs. Gaffney wants to use these results to test H0: p(blair) =  p(poolsville) versus Ha: p(blair) > p(poolsville), assuming that all conditions have been met. What is the p-value associated with the sample result? ",
    options: [
      "P-value < 0.01",
      "-.01 <= P-value <= 0.05",
      "0.1 <= P-value <= 0.15",
      "0.05 <= P-value <= 0.01"
    ],
    correctIndex: 3,
    explanation: "First, find the z test statistic using the test statistic formula. After finding that the test statistic is 1.543, we know that the Ha is a one-sided test, so we are looking for the area above the z test statistic 1.543 in a standard normal distribution. Plugging this into the calculator, we find that the p-value is 0.061, which is between 0.05 and 0.01."
  },
  {
    question: "The Coaches surveyed teams on bringing Celsius instead of water. Teens: 120 Yes, 40 No; Adults: 30 Yes, 170 No. Which of the following would be an appropriate test statistic for a 2-proportion z-test?",
    options: [
      "0.75 - 0.15/sqrt(0.4176(1-0.4176)(1/160 + 1/200))",
      "0.75 - 0.15/sqrt(0.15(1-0.15)(1/160 + 1/200))",
      "0.75-0.15/sqrt(0.75(1-0.75)(1/160 + 1/200))",
      "0.75-0.75/sqrt(0.75(1-0.4176)(1/160 + 1/200))"
    ],
    correctIndex: 0,
    explanation: "Use the formula for the test statistic of the 2-proportion z test. p1 = 120/160 = 0.75 (teen proportion) & p2 = 30/200 = 0.15 (adult proportion). The pooled proportion is 150/360 = 0.4167. Now, compute the z-statistic by plugging in these numbers into the formula."
  },
  {
    question: "Mrs. Gaffney compares magnet student rates: Blair 40/400 and Poolsville 30/400. Test H0: p(blair) = p(poolsville) vs Ha: p(blair) > p(poolsville). What is the p-value?",
    options: [
      "0.01 <= P-Value <= 0.1",
      "0.05 <= P-Value <= 0.15",
      "0.01 >= P-Value",
      "0.05 >= P-Value"
    ],
    correctIndex: 1,
    explanation: " Grace wants to know whether the proportion of students who prefer Celsius is significantly greater for 10th graders than 11th graders. She randomly selects 100 10th graders, of whom 60 say they prefer Celsius. She also randomly selects 100 11th graders, of whom 40 say they prefer Celsius. What are the appropriate null and alternative hypotheses for a two-proportion z-test? "
  },
  {
    question: "Grace wants to know whether the proportion of students who prefer Celsius is significantly greater for 10th than 11th graders. 60/100 vs 40/100. What are the appropriate hypotheses?",
    options: [
      "Ho: p(10th) = p(11th), Ha: p(10th) < p(11th)",
      "Ho: p(10th) = p(11th), Ha: p(10th) ≠ p(11th)",
      "Ho: p(10th) = p(11th), Ha: p(10th) > p(11th)",
      "Ho: p(10th) > p(11th), Ha: p(10th) = p(11th)"
    ],
    correctIndex: 2,
    explanation: "The null hypothesis has not only a statement of equality but also we are trying to test if the proportion of 10th grade students is higher than 11th grade students from the alternative hypothesis. "
  },
  {
    question: "Anuva wants to estimate the difference in the proportion of graduation rates between Montgomery Blair High School and Blake High School. She wants to take a sample of Montgomery Blair HS students and Blake HS Students to conduct this. Which of the following assumptions must be met for this to occur? 1. N > 30, 2. All variables must be independent in the sample, 3. Np > 10, n(p-1) > 10, success/failure condition must be passed",
    options: [
      "1, 2, & 3",
      "1 & 2",
      "2 & 3",
      "1 & 3"
    ],
    correctIndex: 2,
    explanation: "Having any n>= 30 applies to sample means, since we’re dealing with proportions, we want to count success/failure to be all at least 10. The variables must be independent as well."
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

            <h4>When do we use a 2-Sample Z-Test for Proportions?</h4>
            <p>
              We use a 2-Sample Z-Test when we want to compare the difference between two population proportions.
            </p>

            <h4>Important Notes:</h4>
            <ul>
              <li>Always verify your assumptions before using the test.</li>
              <li>The calculator automatically computes the pooled proportion.</li>
              <li>Interpret the p-value correctly based on your alternative hypothesis.</li>
              <li>For confidence intervals, the calculator uses individual sample proportions (not pooled).</li>
            </ul>

            <h4>Test Formula:</h4>
            <p>
              When testing H<sub>0</sub>: p₁ - p₂ = 0, use the standardized test statistic:
            </p>
            <InlineMath math="\displaystyle z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\hat{p}_c \hat{q}_c\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}" />

            <h4>Key Formulas:</h4>
            <p>
              <strong>Combined Proportion: </strong>
              <InlineMath math="\displaystyle \hat{p}_c = \frac{x_1 + x_2}{n_1 + n_2}" /> <br />
            </p>
            <p>
              <strong>Sample Proportions:</strong> <InlineMath math="\hat{p}_1 = \frac{X_1}{n_1}, \quad \hat{p}_2 = \frac{X_2}{n_2}" />
            </p>
            <p>
              <InlineMath math="\hat{q}_c = 1 - \hat{p}_c" />
            </p>

            <h4>Conditions for Inference:</h4>
            <ul>
              <li><strong>Random:</strong> Two random samples from populations of interest.</li>
              <li><strong>Normal:</strong> Sampling distributions are approximately normal.</li>
              <li><strong>Success/Failure Condition:</strong> np &gt; 10 and nq &gt; 10 for both samples.</li>
              <li><strong>Independence within samples:</strong> Population &gt; 10 x sample size for each group.</li>
              <li><strong>Independence between samples:</strong> The two populations must be independent of each other.</li>
            </ul>

            <h4 id="calculator">Calculator Commands:</h4>
            <strong>Accessing the Test:</strong>
            <ul>
              <li>Press STAT</li>
              <li>Arrow right to TESTS</li>
              <li>Select 6: 2-PropZTest...</li>
            </ul>

            <strong>Input Screen Setup:</strong>
            <p>Input: Stats (most of the time instead of Data)</p>
            <ul>
              <li>Required Inputs:
                <ul>
                  <li>x₁: Number of successes in sample 1</li>
                  <li>n₁: Sample size 1</li>
                  <li>x₂: Number of successes in sample 2</li>
                  <li>n₂: Sample size 2</li>
                  <li>p₁: Hypothesized value for alternative hypothesis</li>
                  <ul>
                    <li>For H₀: p₁ = p₂, choose ≠p₂ (not equal)</li>
                    <li>For H₀: p₁ &gt; p₂, choose &gt;p₂ (greater than)</li>
                    <li>For H₀: p₁ &lt; p₂, choose &lt;p₂ (less than)</li>
                  </ul>
                </ul>
              </li>
              <li>Choose <strong>Calculate</strong> to see your results.</li>
            </ul>

            <h5>Output Information:</h5>
            <ul>
              <li>p: P-value</li>
              <li>p̂₁: Sample proportion 1</li>
              <li>p̂₂: Sample proportion 2</li>
              <li>p̂: Pooled proportion</li>
              <li>n₁ and <code>n₂</code>: Sample sizes</li>
              <li>Z: Test statistic</li>
            </ul>

            <h2 id="free-response">Free Response Practice</h2>
            <strong>Problem 1</strong>
            <p>
              Anuva wants to see if Magnet students regularly sleep more than 8 hours in comparison to Cap students. She conducts a study with a random sample of 100 Magnet students and finds that 48 sleep more than 8 hours regularly. In comparison, she takes a random sample of 150 Cap students and finds that 90 sleep more than 8 hours regularly. She concludes that Cap students sleep more than Magnet students regularly. Do you agree? Explain using statistics. (Don't forget to always get more than 8 hours of sleep!!!) 
            </p>
            <p>
              <a href="https://drive.google.com/file/d/17ZaZA9nfP0wHyS3kI4igsHclrh-wvUPZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution (contains answers to both problems)
              </a>
            </p>

            <strong>Problem 2</strong>
            <p>
              Mrs. Gaffney wants to see if her Magnet Statistics students regularly study less for her FOKs than her Pre-calculus students. She conducts a study with a random sample of 200 stat students and finds that 62 study regularly. In comparison, she takes a random sample of 150 pre-calculus students and finds that 95 study regularly. What conclusion can be drawn from these results? Explain using statistics. 
            </p>
            <p>
              <a href="https://drive.google.com/file/d/17ZaZA9nfP0wHyS3kI4igsHclrh-wvUPZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution (contains answers to both problems)
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

export default Twoproportionztest;
