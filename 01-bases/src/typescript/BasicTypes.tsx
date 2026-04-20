
export const BasicTypes = () => {

    const name: string = 'Andrés';
    const age: number = 38;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'React Native', 'Angular'];

    return (
        <>
            <h3>Tipos básicos</h3>
            <p>{name} - {age} - {isActive ? 'Activo' : 'No Activo'}</p>
            <p>{powers.join(', ')}</p>
        </>
    );
};
