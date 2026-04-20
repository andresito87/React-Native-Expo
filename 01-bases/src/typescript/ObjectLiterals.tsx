
interface Person { // Tipo Persona
    age: number,
    firstName: string,
    lastName: string,
    address: Address;
}

interface Address { // Tipo Dirección
    country: string,
    houseNo: string;
    street?: string;  // ? Opcional
}

export const ObjectLiterals = () => {

    const person: Person = {
        age: 38,
        firstName: 'Andrés',
        lastName: 'Podadera',
        address: {
            country: 'España',
            houseNo: '22',
        }
    };

    return (
        <>
            <h3>ObjectLiterals</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};