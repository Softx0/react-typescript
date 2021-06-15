interface IPersona {
    nombre: string;
    nombreCompleto: string;
    edad: number;
    direccion: IDireccion
}

interface IDireccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {
	const persona: IPersona = {
		nombre: "Eduardo",
		edad: 35,
        nombreCompleto: 'Eduardo Valenzuel',
		direccion: {
			pais: "Rep. Dom.",
			casaNo: 1,
		},
	};

    persona.nombreCompleto = 'Eduardo Valenzuela';

	return (
		<>
			<h3>Objetos Literales</h3>
			{JSON.stringify(persona)}

			<code>
				<pre>{JSON.stringify(persona, null, 2)}</pre>
			</code>
		</>
	);
};
