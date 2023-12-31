import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const GuessingGame = () => {
    const [guess, setGuess] = useState("");
    const [number, setNumber] = useState(null);
    const [result, setResult] = useState({mes:"",correct:false});
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setNumber(Math.round(Math.random(100) * 20));
    }, []);
  
  
    useEffect(() => {
      handleCompare();
    }, [count])
  
  
    const handleChange = (e) => {
      console.log(number)
      console.log(e.target.value)
      setGuess(e.target.value);
    };
  
    const handleCompare = () => {
      if (!guess) {
        setResult({...result, mes:"Enter your guess"})
      }
      else if (guess < number) {
        setResult({...result, mes:"Your guess is LOWER!"});
      }
      else if (guess > number) {
        setResult({...result,mes:"Your guess is HIGHER!"});
      }
      else {
        setResult({...result, mes:"Your guess is CORRECT!",correct:true});
        
      }
    }
  
    console.log(number)
  
    return (
      <div className="m-20">
        <input
          placeholder="Guess a number"
          value={guess}
          type="number"
          onChange={(e) => handleChange(e)}
          className="w-96 h-12 rounded-lg p-4 text-[24px]"
        />
        <button onClick={()=>setCount(count+1)}>Submit</button>
        <p className="text-[20px]">{result.mes}</p>
        <p className={`${result.correct?"":"hidden"} text-[20px]`}> You guessed it in {count} tries.</p>
  
      </div>
    );
}

export default GuessingGame
