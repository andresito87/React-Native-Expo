
// Queda fuera del componente para que React no rerenderice cuando cambia esta función, no depende del componente
const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
};

export const BasicFunctions = () => {
    const a = 5;
    const b = 5;

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar {a} y {b} es {addTwoNumbers(a, b)}</span>
        </>
    );
};