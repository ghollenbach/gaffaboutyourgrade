/* 1 sample proportion z-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Linregttest() {
    const questions = [
  {
    question: "Grace was wondering if there was a relationship between hair length and test scores on a FOK. Grace selected 30 random magnet students from the Magnet Stat roster for the year. Assuming that all conditions were met, why should a linear regression t-test for slope be used to investigate whether there is convincing evidence, at a 5 percent level of significance, that longer hair length can be associated with an increase in test scores on a FOK?",
    options: [
      "A linear regression t-test for slope should be used because Grace is trying to determine if there is a linear relationship between hair length and test scores on a FOK.",
      "A linear regression t-test for slope should be used because Grace is trying to find a number very close to 0.",
      "A linear regression t-test for slope should be used because Grace is trying to find a linear total of FOK scores from the random sample of students.",
      "A linear regression t-test for slope should be used because Grace is trying to find a linear total of hair length from the random sample of students."
    ],
    correctIndex: 0,
    explanation: "The answer explains itself; the other answers are all incorrect or do not make any grammatical sense."
  },
  {
    question: "Anuva took a record of the number of times students checked StudentVue in a week and the number of times they checked Grade Melon during that week for 100 people with access to a phone. A hypothesis test was conducted to investigate whether the slope of the students' population regression line relating the number of StudentVue checks to the number of Grade Melon checks is positive. What are the correct hypotheses for the test?",
    options: [
      "Ho: β = 0, Ha: β < 0",
      "Ho: β = 0, Ha: β > 0",
      "Ho: β = 0, Ha: β ≠  0",
      "Ho: β > 0, Ha: β = 0"
    ],
    correctIndex: 1,
    explanation: "The null hypothesis should be that there is no linear relationship between StudentVue checks and Grade Melon checks (so it equals 0). The alternative hypothesis should be that there is a positive linear relationship between StudentVue checks and Grand Melon checks (so greater than 0)."
  },
  {
    question: `Given the table below, find the test statistic. If Ho: β = 0, Ha: β ≠ 0

Predictor   Coeff    SE      T      P
constant    1.522    2.31    .04    .312
weight      .1498    .7642   1.02   .1373
`,
  options: [
    "t = (0.1522 - 0)/ 2.31",
    "t =(0.1498 - 0)/2.31",
    "t = (0.1498 - 0)/0.7642",
    "t = (0.1522 - 0)/0.7642"
  ],
  correctIndex: 2,
  explanation: "The formula for the test statistic is t = (b - β)/SE of b. Given the chart, b = 0.1498, β = 0, and SE of b = 0.7642."
},
{
  question: `Sarah conducted a test and collected the following data between hours of cooking and minutes eating.

Hours Cooking (x)   Minutes Eating (y)
1                   35
2                   60
3                   75
4                   90

Using linear regression, what is the least squares regression line?`,
  options: [
    "𝑦̂ = 20 + 18x",
    "𝑦̂ = 18 + 20x",
    "𝑦̂ = 16 + 18x",
    "𝑦̂ = 16 + 20x"
  ],
  correctIndex: 0,
  explanation: "Using a calculator, plug in the x values (hours cooking) into L1, then the y-values (minutes eating) into L2. Run LinReg(ax + b) and view the output: y-intercept is 20, slope is 18."
},
{
  question: `Sarah conducted a test and collected the following data between hours of cooking and minutes eating.

Hours Cooking (x)   Minutes Eating (y)
1                   35
2                   60
3                   75
4                   90

Using linear regression, what is the test statistic for the hypothesis Ho: β = 0, Ha: β > 0?`,
  options: [
    "t = 4.35",
    "t = 5.36",
    "t = 6.36",
    "t = -6.36"
  ],
  correctIndex: 2,
  explanation: "Using a calculator, t = b/(SE of b) where b is the slope and SE of b is the standard error. Slope is 18, SE is 2.828, so 18/2.828 = 6.36."
},
{
  question: `Evan conducted a test and collected the following data between hours of practicing and minutes spent racing the mile.

Hours Practicing (x)   Minutes Racing (y)
1                      15
2                      13.5
3                      11.5
4                      9.5

Using linear regression, what is the test statistic for the hypothesis Ho: β = 0, Ha: β > 0? Given the regression line y = -1.85x + 17.`,
  options: [
    "t = -21.37",
    "t = -1.85",
    "t = 0.0866",
    "t = 21.37"
  ],
  correctIndex: 0,
  explanation: "Using a calculator, t = b/(SE of b) where b is the slope and SE of b is the standard error. Slope is -1.85, SE is 0.0866, so -1.85/0.0866 = -21.37."
},
  {
    question: "Mr. Schafer recorded the number of times he checked his watch in Quantum Physics versus in Math Physics. A hypothesis test was conducted to investigate whether the slope of the Mr. Schafers' regression line relating to the number of times he checked his Watch in Quantum Physics and the number of times he checked his watch in Math Physics is negative. What are the correct hypotheses for the test?",
    options: [
      "Ho: β = 0, Ha: β < 0",
      "Ho: β = 0, Ha: β > 0",
      "Ho: β = 0, Ha: β ≠  0",
      "Ho: β > 0, Ha: β = 0"
    ],
    correctIndex: 0,
    explanation: "The null hypothesis should be that there is no linear relationship between Quantum Physics checks and Math Physics checks (so it equals 0). The alternative hypothesis should be that there is a negative linear relationship between Physics checks and Quantum checks (so less than 0)."
  },
  {
    question: "Mr. Schafer is wondering if there is a relationship between the time it takes to solve a Rubik's Cube and the amount of time practiced. He selected 30 random Rubik's Cube solvers from the Woodmoor area. Assuming all conditions are met, why should a linear regression t-test for slope be used to investigate whether there is convincing evidence, at a 5% level of significance, that more practice time is associated with faster solve times?",
    options: [
      "A linear regression t-test for slope should be used because Mr. Schafer is testing for a linear relationship between two quantitative variables: practice time and solve time.",
      "A linear regression t-test for slope should be used because Mr. Schafer is testing whether the mean solve time is different before and after practicing.",
      "A linear regression t-test for slope should be used because Mr. Schafer wants to know the average amount of time people practice Rubik's Cubes.",
      "A linear regression t-test for slope should be used because Mr. Schafer is comparing two proportions."
    ],
    correctIndex: 0,
    explanation: "The answer is the literal definition."
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
            The linear regression t-test determines whether there is a statistically significant linear relationship between two quantitative variables by testing if the slope of the population regression line is significantly different from zero.
            </p>
            <ul>
            <li>Is there really a linear relationship between x and y in the population, or could the pattern we see be due to chance?</li>
            <li>How much will the predicted value of y change for each 1-unit increase in x?</li>
            </ul>

            <h4>Sampling Distribution of the Slope</h4>
            <ul>
            <li><strong>Shape:</strong> Is it approximately normal, unimodal, etc.?</li>
            <li><strong>Center:</strong> Mean = β (true population slope)</li>
            <li><strong>Spread:</strong> Standard deviation = σ/(σₓ√n)</li>
            </ul>

            <h4>Conditions for Regression Inference (<b>LINER</b>)</h4>
            <ul>
            <li><strong>Linear:</strong> Actual relationship between x and y is linear</li>
            <li><strong>Independent:</strong> Individual observations are independent (check 10% condition)</li>
            <li><strong>Normal:</strong> For any fixed x, response y varies according to Normal distribution</li>
            <li><strong>Equal SD:</strong> Standard deviation of y is same for all values of x</li>
            <li><strong>Random:</strong> Data from well-designed random sample or randomized experiment</li>
            </ul>

            <strong>How to Check Conditions</strong>
            <ul>
            <li><strong>Linear:</strong> Check scatterplot for linear pattern; look for curves in residual plot</li>
            <li><strong>Independent:</strong> Check 10% condition</li>
            <li><strong>Normal:</strong> Make histogram or NPP of residuals; check for skewness</li>
            <li><strong>Equal SD:</strong> Check residual plot for constant vertical spread around residual = 0 line</li>
            <li><strong>Random:</strong> Verify data collection method</li>
            </ul>

            <h4>Hypothesis Test Formula</h4>
            <ul>
            <li><strong>Test Statistic:</strong> <InlineMath math="t = \frac{b - \beta}{S_b}" /></li>
            <li><strong>Standard Error of Slope:</strong> <InlineMath math="SE_b = \frac{s}{s_x \sqrt{n-1}}" /></li>
            <li><strong>Degrees of Freedom:</strong> df = n - 2</li>
            </ul>

            <h4>Common Hypothesis Setup</h4>
            <ul>
            <li>H<sub>0</sub>: β = 0 (no linear relationship between x and y)</li>
            <li>H<sub>a</sub>: β ≠ 0 (there is a linear relationship)</li>
            <li>Alternative could also be β &gt; 0 or β &lt; 0</li>
            </ul>

            <h4>Key Information from Computer Output</h4>
            <img src="/diagram3.png" alt="Description" style={{ width: '400px' }} />

            <ul>
            <li><strong>Coef:</strong> Sample slope (b)</li>
            <li><strong>SE Coef:</strong> Standard error of slope (SEb)</li>
            <li><strong>T:</strong> Test statistic value</li>
            <li><strong>P:</strong> P-value for the test</li>
            <li><strong>s:</strong> Standard error of residuals</li>
            <li><strong>R-Sq:</strong> Coefficient of determination (r²)</li>
            </ul>

            <h4>Interpretation</h4>
            <ul>
            <li><strong>Small p-value (&lt; α):</strong> Reject H<sub>0</sub>; evidence of significant linear relationship</li>
            <li><strong>Large p-value (≥ α):</strong> Fail to reject H<sub>0</sub>; insufficient evidence of linear relationship</li>
            <li>The test assesses probability of getting observed slope (or larger) if true slope were zero</li>
            </ul>

            <h4>Calculator Commands</h4>

            <strong>Important Calculator Settings + Set up</strong>
            <ul>
            <li><strong>Diagnostics ON:</strong> 2ND → CATALOG → DiagnosticOn → ENTER (enables r and r² display)</li>
            <li><strong>Enter x-values in L1:</strong> STAT → EDIT → Enter data in L1</li>
            <li><strong>Enter y-values in L2:</strong> Enter corresponding y-values in L2</li>
            </ul>

            <strong>Finding Regression Equation</strong>
            <ul>
            <li>STAT → CALC → LinReg(a+bx)</li>
            <li>Input:
                <ul>
                <li>Xlist: L1</li>
                <li>Ylist: L2</li>
                <li>FreqList: (leave blank)</li>
                <li>Store RegEQ: (optional - can store in Y1)</li>
                </ul>
            </li>
            <li>Calculate: Gives a, b, r², r</li>
            </ul>

            <strong>Significance Test for Slope</strong>
            <ul>
            <li>STAT → TESTS → LinRegTTest</li>
            <li>Input:
                <ul>
                <li>Xlist: L1</li>
                <li>Ylist: L2</li>
                <li>Freq: 1</li>
                <li>β &amp; ρ: (choose ≠ 0, &gt; 0, or &lt; 0 for alternative hypothesis)</li>
                <li>RegEQ: (optional)</li>
                </ul>
            </li>
            <li>Calculate: Gives t-statistic, p-value, df, a, b, s, r², r</li>
            </ul>

            <strong>What Calculator Gives You</strong>
            <ul>
            <li>A: y-intercept</li>
            <li>b: slope (sample slope)</li>
            <li>t: test statistic for slope</li>
            <li>p: p-value for significance test</li>
            <li>df: degrees of freedom (n - 2)</li>
            <li>s: standard error of residuals</li>
            <li>r²: coefficient of determination</li>
            <li>r: correlation coefficient</li>
            </ul>

            <h4>Residual Analysis</h4>
            <ul>
            <li>After running LinReg: Residuals automatically stored in RESID list</li>
            <li>STAT → EDIT: Check RESID list for residual values</li>
            <li>Create residual plot:
                <ul>
                <li>STAT PLOT → Plot1 → ON</li>
                <li>Type: Scatterplot</li>
                <li>Xlist: L1 (original x-values)</li>
                <li>Ylist: RESID</li>
                </ul>
            </li>
            <li>Normal Probability Plot of Residuals:
                <ul>
                <li>STAT PLOT → Plot2 → ON</li>
                <li>Type: Normal Prob Plot</li>
                <li>Data List: RESID</li>
                <li>Data Axis: X or Y</li>
                <li>Mark: Choose point style</li>
                <li>ZOOM → ZoomStat</li>
                </ul>
            </li>
            </ul>

            <h4>Confidence Interval for Slope</h4>
            <p>
            Use: <InlineMath math="b \pm t^* \times SE_b" /> <br />
            Get SE<sub>b</sub> from calculator<br />
            Find t* using invT function
            </p>


            <h2 id="free-response">Free Response Practice</h2>

            <strong>Problem 1</strong>
            <p>
            Mrs. Gaffney's statistics class wanted to investigate whether consuming Celsius energy drinks before taking a test would improve student performance. The class randomly selected 25 students from the school population. Each student was assigned (0-2) cans of Celsius to drink an hour before their FOK. Below is the data:
            </p>
            <table border="1" cellPadding="4">
            <thead>
                <tr>
                <th>Cans of Celsius</th>
                <th>Test Scores (Groups of 5)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>0</td>
                <td>72, 68, 75, 71, 69</td>
                </tr>
                <tr>
                <td>1</td>
                <td>78, 82, 76, 80, 79</td>
                </tr>
                <tr>
                <td>2</td>
                <td>85, 88, 83, 87, 82</td>
                </tr>
            </tbody>
            </table>
            <ol type="a">
            <li>Find the equation of the least-squares regression line.</li>
            <li>Perform a significance test to determine if there is convincing evidence of a linear relationship between the number of Celsius cans consumed and quiz scores. State your hypotheses, and report the test statistic, p-value, and conclusion at the α = 0.05 level.</li>
            <li>Interpret the slope of your regression line in the context of this problem.</li>
            <li>Check the conditions for regression inference.</li>
            <li>Based on your analysis, what can Mrs. Gaffney's class conclude about the effectiveness of Celsius energy drinks on quiz performance? What are the limitations of this study?</li>
            </ol>

            <p>
              <a href="https://drive.google.com/file/d/1T2SNbkZ-uJZnmGsYdqI3ZfZ0qloEppMm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Link to solution
              </a>
            </p> 

            <br />

            <strong>Problem 2</strong>
            <p>
            Sarah and Anuva believed that schools within MoCo with more students named Grace might have different academic outcomes due to varying factors associated with name popularity trends. They collect data from 20 randomly selected high schools in MoCo. For each school, they recorded the number of students named Grace (excluding variations) and the school's average FOK BFT scores (on a scale from 0-100). There is constant variance in residuals.
            </p>
            <p>Computer output from a least-squares regression analysis is shown below:</p>
            <table border="1" cellPadding="4">
            <thead>
                <tr>
                <th>Predictor</th>
                <th>Coeff</th>
                <th>SE</th>
                <th>T</th>
                <th>P</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Constant</td>
                <td>68.425</td>
                <td>2.847</td>
                <td>24.03</td>
                <td>0.000</td>
                </tr>
                <tr>
                <td>Graces</td>
                <td>1.254</td>
                <td>0.312</td>
                <td>4.02</td>
                <td>0.001</td>
                </tr>
            </tbody>
            </table>
            <ul>
            <li>S = 4.623</li>
            <li>R-Sq = 47.3%</li>
            <li>R-Sq(adj) = 44.4%</li>
            </ul>
            <ol type="a">
            <li>Write the equation of the least-squares regression line. Define the variables in your equation and interpret the slope in the context of this problem.</li>
            <li>Sarah and Anuva want to test whether there is convincing evidence of a linear relationship between the number of students named Grace and school test scores. State the appropriate hypotheses and carry out the significance test at the α = 0.05 level. Be sure to include all components of a complete hypothesis test.</li>
            <li>Check whether the conditions for regression inference are satisfied. For each condition, state whether it is met and provide evidence to support your conclusion.</li>
            <li>Based on your analysis, what conclusion should Sarah and Grace draw about the relationship between the number of students named Grace and school test scores?</li>
            </ol>

            <p>
              <a href="https://drive.google.com/file/d/1JTQyDDOW3DiCAaYsrK39sAVIIYTY4qnh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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

export default Linregttest;
