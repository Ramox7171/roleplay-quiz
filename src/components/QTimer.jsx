import { useState, useEffect } from "react";
export default function QTimer({timeout,onTimeout,mode}){

    const [timeRemaining, setTimeRemaining] =useState(timeout);

    useEffect(()=>{
        console.log('SETTING TIMEOUT');
       const timer = setTimeout(onTimeout,timeout);
       return ()=>{
        clearTimeout(timer);
       }
    },[timeout,onTimeout]);

   


    useEffect(()=>{

        console.log('SETTING INTERVAL');
       const interval = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
        },100);

        return ()=>{
            clearInterval(interval);
        };
    },[]);

    

    return(<progress id="question-time" max={timeout} value={timeRemaining} className={mode}/>)
}