import { useState } from "react";

export const useCounter = (inicialState: number) => {
	const [counter, setCounter] = useState(inicialState);

	const acumular = (numero: number) => {
		if (counter <= -1) {
			alert("no es permitido restar negativos");
		} else {
			setCounter(counter + numero);
		}
	};

	return {
		acumular,
		counter,
	};
};
