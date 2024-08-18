import { useState } from 'react';
import CounterButton from './CounterButton';

import './Counter.css'

export default function Counter(){
    const [count, setCount] = useState(0);
    
    function incrementParent(by){
        setCount(count + by);
    }

    function decrementParent(by){
        setCount(count - by);
    }

    function resetCounter(){
        setCount(0);
    }
    return(
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} incrementMethod={incrementParent} decrementMethod={decrementParent}/>
            <CounterButton by={2} incrementMethod={incrementParent} decrementMethod={decrementParent}/>
            <CounterButton by={5} incrementMethod={incrementParent} decrementMethod={decrementParent}/>

            <button 
                    className="resetButton" 
                    onClick={resetCounter}
            >RESET</button>
        
        </>
    );
}

