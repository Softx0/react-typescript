import { useState } from "react";

export const Contador = () => {
	const [counter, setCounter] = useState(0);

	const acumular = (numero: number) => {
		if (counter <= -1) {
			alert("no es permitido restar negativos");
		} else {
			setCounter(counter + numero);
		}
	};

	return (
		<>
			<h3>
				Contador <small>{counter}</small>
			</h3>
			<button className="btn btn-primary" onClick={() => acumular(1)}>
				+ 1
			</button>
			&nbsp;
			<button className="btn btn-primary" onClick={() => acumular(-1)}>
				- 1
			</button>
		</>
	);
};
