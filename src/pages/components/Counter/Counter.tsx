import React from 'react'
import { useCounter } from '../../../store/Counter/counter';

export const Counter = () => {
    const { add, sub, counter } = useCounter();
    return (
        <> 
            <button onClick={() => sub()} data-testid="sub">-</button> 
            <span data-testid="counter">{counter}</span>
            <button onClick={() => add()} data-testid="add">+</button> 
        </>
       
    )
}

