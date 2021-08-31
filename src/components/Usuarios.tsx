
import { useUsuarios } from "../hooks/useUsuarios";
import { User } from "../interfaces/Usuario";

const Usuarios = () => {

    const { 
        usuarios,
        paginaAnterior,
        paginaSiguiente
    } = useUsuarios();

    const renderBody = ({id, avatar, first_name, last_name, email}: User) => {
        return (
            <tr key={id.toString()} >
                <td>
                    <img 
                       src={avatar} 
                       alt={first_name} 
                       style={{
                           width: 60, 
                           borderRadius: 100
                       }} 
                   />
                </td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        )
   }

    return (
        <div>
            <h3>Tabla de Usuarios!</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // usuarios.map(usuario => renderItem(usuario))
                        usuarios.map(renderBody)
                    }
                </tbody>
            </table>

            <button style={{marginRight: 5}}
                className="btn btn-primary"
                onClick={paginaAnterior}
                >
                Atras
            </button>

            <button 
                className="btn btn-primary"
                onClick={paginaSiguiente}
                >
                Siguiente
            </button>
        </div>
    )
}

export default Usuarios;
