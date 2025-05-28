import React, { useState } from 'react';

function MCQ({ question, options, correctIndex }) {
const [selected, setSelected] = useState(null);
const [answered, setAnswered] = useState(false);

const handleClick = (index) => {
if (!answered) {
    setSelected(index);
    setAnswered(true);
    }
};

return (
    <div className="mcq">
    <h3>{question}</h3>
    <ul>
        {options.map((option, index) => (
            <li
                key={index}
                onClick={() => handleClick(index)}
                style={{
                    cursor: 'pointer',
                    backgroundColor:
                        answered && index === correctIndex
                        ? 'lightgreen'
                        : answered && index === selected
                        ? 'salmon'
                        : '',
                    padding: '10px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            >
                {option}
            </li>
        ))}
    </ul>
    {answered && (
            <p>
            {selected === correctIndex ? '✅ Correct!' : '❌ Incorrect. Try again next time!'}
            </p>
        )}
    </div>  
    );
}

export default MCQ;