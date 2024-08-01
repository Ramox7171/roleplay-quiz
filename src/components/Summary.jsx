import completeImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js';


export default function Summary({userAnswers}){

const skippedAnswers = userAnswers.filter(answer => answer === null);
const goodAnswers = userAnswers.filter((answer,index)  => answer === QUESTIONS[index].answers[0]);
const skippedAnswersPercent = Math.round((skippedAnswers.length / userAnswers.length) * 100)
const goodAnswersPercent = Math.round((goodAnswers.length / userAnswers.length) * 100)
const badAnswersPercent = 100 -skippedAnswersPercent - goodAnswersPercent;




    return<div id="summary">
    <img src={completeImg} alt="quiz completed" />
    <h2>Dotrwałeś do końca!</h2>
    <div id='summary-stats'>
        <p>
            <span className='number'>{skippedAnswersPercent}%</span>
            <span className='text'>pominiętych odpowiedzi</span>
        </p>
        <p>
            <span className='number'>{goodAnswersPercent}%</span>
            <span className='text'>dobrych odpowiedzi</span>
        </p>
        <p>
            <span className='number'>{badAnswersPercent}%</span>
            <span className='text'>złych odpowiedzi</span>
        </p>
    </div>
    <ol>
        {userAnswers.map((answer,index)=>{


            let isValid = null;

            if (answer === null) {
                isValid ='---';
            } else if (answer === QUESTIONS[index].answers[0]) {
                isValid= '✔ -';
            } else {
                isValid=  '✖ -';
            }

            return <li key={index}>
            <h3>{index+1}</h3>
            <p className='question'>{QUESTIONS[index].text}</p>
            <p > {isValid}-{answer ?? 'POMINIĘTO'}</p>
            </li>
        })}
        
    </ol>
</div>
}