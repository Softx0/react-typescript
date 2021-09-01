import { useState } from "react";

export const useFormularios = <T extends Object>(initialState: T) => {

    const [formulario, setFormulario] = useState(initialState);
    
    //manejo de n campos, la misma logica, el problema es que otra pantalla que use forms usar un hook
    
    //para prevenir que en el onChange de aquel lado se mando lo que sea en el [campo], mitigaremos ese inconveniente
    const onChange = (value: string, campo: keyof T) => {
        setFormulario({
            ...formulario, //desestructurando los valores del formulario
            [campo]: value 
        });
    };

    return { 
        ...formulario, //con el objetivo de pasar el email y el password
        formulario, // este sera momentaneo ya que es solo para el <code>
        onChange,
    }
}
