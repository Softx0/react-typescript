import { useEffect } from "react";
import { apimanager } from "../api/ApiManager";

const Usuarios = () => {

    useEffect(() => {
        //llamado al API
        //primera y unica vez
        apimanager.get('/users')
            .then(res => {
                console.log(res.data.data);
            })
            .catch(console.log);

    }, []);


    return (
        <div>
            <h3>Usuarios!</h3>

            <table className="table">
                <thead className="table-dark" >
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody className="table">

                </tbody>
            </table>
        </div>
    )
}

export default Usuarios;
