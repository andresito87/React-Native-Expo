import { useForm } from 'react-hook-form';

type FormInputs = {
    email: string,
    password: string;
};

export const FormsPage = () => {

    // https://react-hook-form.com/
    // Utilizamos hooks de React Hook Form para el manejo de los campos del formulario
    const {
        register,
        handleSubmit
    } = useForm<FormInputs>({
        defaultValues: {
            email: 'andrespodadera87@gmail.com',
            password: 'supersecret'
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>

                <div className='flex flex-col space-y-2 w-125'>
                    <input
                        type='email'
                        placeholder='email'
                        className='border border-gray-300 p-2 rounded-xl'
                        {...register('email', { required: true })}
                    />

                    <input
                        type='password'
                        placeholder='password'
                        className='border border-gray-300 p-2 rounded-xl'
                        {...register('password', { required: true })}
                    />

                    <button
                        type='submit'
                        className='text-white bg-blue-500 p-2 rounded-xl'
                    >
                        Ingresar
                    </button>

                </div>

            </form>
        </>
    );
};