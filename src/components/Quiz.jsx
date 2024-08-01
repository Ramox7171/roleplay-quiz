import { useState, useCallback} from "react";
import QUESTIONS from '../questions.js';

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz(){

   
    
   

    
    const [userAnswers, setUserAnswers] =useState([]);
    const activeQuestionIndex =  userAnswers.length;
    const isComplete = activeQuestionIndex === QUESTIONS.length;

    const selectAnswerHandler =useCallback(function selectAnswerHandler(selectedAnswer){
       

        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers, selectedAnswer]

        });

       
    },[])
    const skipAnswerHandler = useCallback(()=>selectAnswerHandler(null),[selectAnswerHandler]);
    if (isComplete) {
        return <Summary userAnswers={userAnswers}/>
    }
     

    return <div id="quiz">
        <Question key={activeQuestionIndex} qIndex={activeQuestionIndex} onSelectAnswer={selectAnswerHandler}
         onSkipAnswer={skipAnswerHandler} />
        

    </div>
}