import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
	const { counter, acumular } = useCounter(0);

	return (
		<>
			<h3>
				Contador con Hook <small>{counter}</small>
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
