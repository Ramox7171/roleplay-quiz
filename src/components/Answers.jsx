import { useRef } from "react";


export default function Answers({answers,selectedAnswer, answerState, onSelect}) {

    const mixedAnswers = useRef();
    if(!mixedAnswers.current)

        { mixedAnswers.current = [...answers]
        mixedAnswers.current.sort(()=>Math.random()-0.5);}



    return (<ul id="answers">
    {mixedAnswers.current.map((answer)=> {
        const isSelected = selectedAnswer ===answer;
        let cssClass = '';

        if(answerState === 'answered' && isSelected) {
            cssClass = 'selected';
        }

        if((answerState === 'good' || answerState === 'bad') && isSelected) {
            cssClass = answerState;
        }


      return <li key={answer} className="answer"><button onClick={()=>onSelect(answer)} className={cssClass} disabled={answerState !== ''}>
    {answer}</button></li>

    })}
    </ul>)
}