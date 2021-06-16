import { useReducer, useEffect } from "react";

interface IAuthState {
	enabling: boolean;
	token: string | null;
	username: string;
	nombre: string;
}

const initialState: IAuthState = {
	enabling: true,
	token: null,
	username: "",
	nombre: "",
};

type LoginActionPayload = {
	username: string;
	nombre: string;
};

//mejor manejar las actions con type, ya que no las necesitare expandir
type AuthAction =
	| { type: "logout" }
	| { type: "login"; payload: LoginActionPayload };

const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
	//consideraciones a tomar con los reducer
	//jamas mutar el state, si haremos eso debemos devolver el state limpio

	switch (action.type) {
		case "logout":
			console.log("Deslogeandome");
			return {
				enabling: false,
				token: null,
				nombre: "",
				username: "",
			};

		case "login":
			const { nombre, username } = action.payload;
			console.log("Logeandome!");
			return {
				enabling: false,
				token: "JKDBFJSBDFGSD58455AD7F5",
				nombre: nombre,
				username: username,
			};

		default:
			return state;
	}
};

export const Login = () => {
	const [{ enabling, token, username }, dispatch] = useReducer(
		authReducer,
		initialState
	);

	//useEffect para disparar efectos secundarios, solo renderizado la unica vez que el componente sea renderizado la primera vez
	//a menos que le pasemos el state en el [] para que cada vez que cambie se vuelva a recargar...
	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "logout" });
		}, 3500);
	}, []);

	const login = () => {
		dispatch({
			type: "login",
			payload: {
				nombre: "Eduardo",
				username: "Softx0",
			},
		});
	};

	const logout = () => {
		dispatch({
			type: "logout",
		});
	};

	if (enabling) {
		return (
			<>
				<h3> Login </h3>
				<div className="alert alert-info">Validating...</div>
			</>
		);
	}
	return (
		<>
			<h3> Login </h3>
			{/* useReducer, es cuando el estado puede cambiar con mucha regularidad */}

			{token ? (
				<div className="alert alert-success">Success {username}</div>
			) : (
				<div className="alert alert-danger">Please Login or Register</div>
			)}

			{token ? (
				<button className="btn btn-danger" onClick={logout}>
					{" "}
					Logout{" "}
				</button>
			) : (
				<button className="btn btn-success" onClick={login}>
					Login
				</button>
			)}
		</>
	);
};
