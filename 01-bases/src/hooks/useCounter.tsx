import { useState } from 'react';

export const useCounter = () => {

    const [count, setCount] = useState<number>(0);

    const increaseBy = (value: number = 1) => {
        // setCount(count + value); // React realiza optimizaciones entre renders que pueden afectar y no reflejar el valor actual en count

        setCount((current) => current + value); // se calcula utilizando el valor actual en cada render, es más seguro
    };

    const decreaseBy = (value: number = 1) => {
        if (count > 0)
            setCount(count - value);
    };

    return {
        //Properties
        count,

        // Actions
        increaseBy,
        decreaseBy
    };
};