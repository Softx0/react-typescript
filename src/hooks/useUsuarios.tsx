import { useEffect, useRef, useState } from "react";
import { apimanager } from "../api/ApiManager";
import { User, UserList } from "../interfaces/Usuario";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const INITIAL_PAGE: number = 1;
    //excelente candidato para usar el useRef, como una ref a una variable si 
    //cambia su valor pero no va a disparar el procedimiento para renderizar el componente 
    const paginaRef = useRef(1);

    useEffect(() => {
         //primera y unica vez cada vez que recargue
        getUser().then(res => setUsuarios(res.data.data));
    }, [usuarios]);

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
                if (paginaRef.current === (response.data.total / response.data.per_page)) {
                    alert('Registros inexistentes, decremente');
                }else {
                    setUsuarios(response.data.data);
                    paginaRef.current ++;
                }
            })
            .catch(console.log)
        return users;
    };

    const paginaAnterior = () => {
        const users = getUser()
            .then(response => {
                if(paginaRef.current !== INITIAL_PAGE){
                    setUsuarios(response.data.data);
                    paginaRef.current --;
                }else {
                    alert('Registros inexistentes, aumente');
                }
            })
            .catch(console.log)
        return users;
    };

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
