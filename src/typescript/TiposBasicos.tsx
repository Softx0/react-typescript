export const TiposBasicos = () => {
	const nombre: string = "Fernando";
	const edad: number = 35;
	const isEnable: boolean = true;
	const superPowers: string[] = [
		"volar",
		"super fuerza",
		"respirar bajo del agua",
	];

	return (
		<>
			<h3>Tipos Basicos</h3>
			{nombre} {edad} {isEnable ? "Enable" : "Disable"}
			{superPowers.join(", ")}
		</>
	);
};
