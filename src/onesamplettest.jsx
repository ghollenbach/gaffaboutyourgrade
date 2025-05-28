/* 1 sample mean t-test */
import React, { useState } from 'react';
import './hypothesistest.css';
import MCQ from './MCQ';
import Confetti from 'react-confetti';

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
            explanation: "The assumption made for performing the hypothesis test with T distribution is that the distribution is approximately normal. This is because the t-test is used when the sample size is small and the population standard deviation is unknown, which requires the assumption of normality for valid results."
        },
        {
            question: "How many samples can you have in a 1 sample mean t-test?",
            options: ["0", "1", "-1", "Π"],
            correctIndex: 1,
            explanation: "In a 1 sample mean t-test, you can only have 1 sample."
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
            explanation: "The central limit theorem states that as the sample size increases, the shape of the sampling distribution of sample means will approach a normal distribution, regardless of the shape of the population distribution."
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
            explanation: "Sampling variability refers to the variation in the value of the sample statistic."
        },
        {
            question: "The standard deviation of the sample means will be:",
            options: [
                "Larger than the standard deviation of the population",
                "Smaller than the standard deviation of the population",
                "The same size as the standard deviation of the population",
                "The reciprocal of the standard deviation of the population"
            ],
            correctIndex: 1,
            explanation: "The standard deviation of the sample means will be smaller than the standard deviation of the population."
        },
        {
            question: "The mean of the sample means is always:",
            options: [
                "0",
                "The sample size",
                "The population mean",
                "The population mean divided by the sample size"
            ],
            correctIndex: 2,
            explanation: "The mean of the sample means is always equal to the population mean."
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
            explanation: "A random sample is required to remove bias."
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
            explanation: "Yes, reject the null hypothesis because the p-value is less than alpha (0.05)."
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleAnswered = (isCorrect) => {
        setShowNextButton(true);
        if (isCorrect) {
            console.log('Confetti triggered');
            setShowConfetti(true); // Trigger confetti only if the answer is correct

            // Automatically stop confetti after 5 seconds
            setTimeout(() => {
                setShowConfetti(false);
                console.log('Confetti stopped');
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setShowNextButton(false);
        setShowConfetti(false); // Stop confetti when moving to the next question
    };

    return (
        <div className="hypothesis-container">
            <h1 id="top">One Sample Mean t Test</h1>
            <a href="#multiple-choice">Go to Multiple Choice Practice</a>
            <br />
            <a href="#free-response">Go to Free Response Practice</a>

            <h2 id="notes">Notes</h2>
            <p>Notes go here</p>

            <h2 id="free-response">Free Response Practice</h2>
            <p>Free response questions go here</p>

            <h2 id="multiple-choice">Multiple Choice Practice</h2>
            <div style={{ position: 'relative' }}>
                {showConfetti && (
                    <>
                        {console.log('Confetti is being rendered')}
                        <Confetti
                            width={window.innerWidth}
                            height={300} // Confetti height limited to the question area
                            style={{ position: 'absolute', top: 0 }}
                        />
                    </>
                )}
                {currentQuestionIndex < questions.length ? (
                    <>
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
                                style={{
                                    marginTop: '10px',
                                    padding: '10px 20px',
                                    backgroundColor: '#007BFF',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Next
                            </button>
                        )}
                    </>
                ) : (
                    <p>You've completed all the questions!</p>
                )}
            </div>
        </div>
    );
}

export default Onesamplettest;
