import React, { useState, useEffect } from 'react';
import './MCQ.css'; 

function MCQ({ question, options, correctIndex, explanation, onAnswered }) {
    const [selected, setSelected] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    // Reset state whenever the question changes
    useEffect(() => {
        setSelected(null);
        setAnswered(false);
        setShowExplanation(false);
    }, [question]);

    const handleClick = (index) => {
        if (!answered) {
            setSelected(index);
        }
    };

    const handleNext = () => {
        setAnswered(true);
        setShowExplanation(true);
        const isCorrect = selected === correctIndex;
        console.log('Answer submitted. Is correct:', isCorrect);
        onAnswered(isCorrect); // Pass whether the answer is correct to the parent
    };

    // Helper: use <pre> only for table-like questions
    const isTableLike = typeof question === 'string' && (
        question.match(/  +/) || question.includes('\n')
    );

    return (
        <div className="mcq">
            {isTableLike ? (
                <pre style={{ fontFamily: 'monospace', fontSize: '1.2em', whiteSpace: 'pre-wrap' }}>{question}</pre>
            ) : (
                <div style={{ whiteSpace: 'pre-wrap' }}>{question}</div>
            )}
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: selected === index ? '#c8bbe0' : '',
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            display: 'block',
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {!answered && (
                <button
                    onClick={handleNext}
                    className="quiz-btn"
                >
                    Submit
                </button>
            )}
            {answered && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                        {selected === correctIndex
                            ? '✅ Correct!'
                            : '❌ Incorrect. Try again next time!'}
                    </p>
                    {showExplanation && (
                        <div style={{ marginTop: '10px', color: '#555' }}>
                            <strong>Explanation:</strong> {explanation}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MCQ;