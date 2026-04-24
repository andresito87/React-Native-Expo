
import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormaulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormaulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);


    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (formula.includes('-')) {
            return setFormula(formula.slice(1));
        }

        setFormula('-' + formula);
    };

    const deleteLastDigit = () => {

        let currentSign = '';
        let temporalNumber = '';

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    };

    const setLastNumber = () => {
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2) || num2 === 0) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    };

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    const buildNumber = (numberString: string) => {

        // Evita agregar un segundo punto decimal
        if (numberString === '.' && number.includes('.')) return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Si ya hay decimales, permite seguir agregando dígitos
            if (number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evita formar 00 o -00
            if (numberString === '0') {
                return;
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer número
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar el 000000.000
            if (numberString === '0' || !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    };

    return {
        //Properties
        formula,
        number,
        prevNumber,

        // Methods
        clean,
        toggleSign,
        deleteLastDigit,
        buildNumber,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
        calculateSubResult
    };
};