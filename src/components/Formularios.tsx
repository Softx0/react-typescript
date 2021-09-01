
import { useFormularios } from "../hooks/useFormularios"

export const Formularios = () => {

    const initialState = {
        email: 'enmanuel@gmail.com',
        password: '123456',
    }

    const { email, password, formulario, onChange } = useFormularios(initialState);

    //Tambien mitigaremos como se llamara el campo email y password
    //mitigandolo con Genericos<T>
    return (
        <div className="container">
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({target}) => onChange(target.value, 'email')}
            />

            <input
                type="password"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({target}) => onChange(target.value, 'password')}
            />

            {/* manera inteligente de ver por pantalla */}
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </div>
    )
}