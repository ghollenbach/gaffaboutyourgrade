/* 1 sample mean t-test */
import './hypothesistest.css';
import MCQ from './MCQ';

function Onesamplettest() {
    return (
        <div>
            <h1> This is the one-sample t-test page</h1>
            <MCQ
                question="What is the assumption made for performing the hypothesis test with T distribution?"
                options={['The distribution is symmetric', 'The distribution is bimodal', 'The distribution has constant variance', 'The distribution is approximately normal']}
                correctIndex={3}
            />
        </div>
    )
}

export default Onesamplettest;
