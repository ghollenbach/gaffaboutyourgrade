import React, { useState, useEffect } from 'react';

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

    return (
        <div className="mcq">
            <h3>{question}</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: selected === index ? 'lightblue' : '',
                            padding: '10px',
                            margin: '10px 0', // Ensures spacing between items
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            display: 'block', // Ensures vertical stacking
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {!answered && (
                <button
                    onClick={handleNext}
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
                        <p style={{ marginTop: '10px', color: '#555' }}>
                            <strong>Explanation:</strong> {explanation}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default MCQ;