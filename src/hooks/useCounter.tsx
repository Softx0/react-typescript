import { useState } from "react";

export const useCounter = (inicialState: number) => {
	const [counter, setCounter] = useState(inicialState);

	const acumular = (numero: number) => {
		if (counter <= -1) {
			setCounter(0);
		} else {
			setCounter(counter + numero);
		}
	};

	return {
		acumular,
		counter,
	};
};
