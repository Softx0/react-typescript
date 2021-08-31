import { useEffect, useRef, useState } from "react";
import { apimanager } from "../api/ApiManager";
import { User, UserList } from "../interfaces/Usuario";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<User[]>([]);

    //excelente candidato para usar el useRef, como una ref a una variable si 
    //cambia su valor pero no va a disparar el procedimiento para renderizar el componente 
    const paginaRef = useRef(1);

    useEffect(() => {
        //primera y unica vez cada vez que recargue
        setUsuarios(usuarios);
    }, []);

    const getUser = async() => {
        //llamado al API
        const resp = await apimanager.get<UserList>('/users', {
            params: {
                //tenemos que incrementar esta pagina
                page: paginaRef.current
            }
        });

        //metodo antiguo
        // apimanager.get<UserList>('/users')
        //     .then(resp => {
        //         console.log(resp.data.data);
        //         setUsuarios(resp.data.data);
        //     })
        //     .catch(console.log);
        return resp;
    }

    const paginaSiguiente = () => {
        const users = getUser()
            .then(response => {
                if (response.data.data.length > 0) {
                    setUsuarios(response.data.data);
                    paginaRef.current ++;
                }else {
                    alert('Registros inexistentes, decremente');
                }
            })
            .catch(console.log)
        return users;
    };

    const paginaAnterior = () => {
        const users = getUser()
            .then(response => {
                
                if (response.data.data.length === 0) {
                    setUsuarios(response.data.data);
                    paginaRef.current --;
                }else {
                    alert('Registros inexistentes, aumente');
                }
            })
            .catch(console.log)
        return users;
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
