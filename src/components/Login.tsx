import { useReducer } from "react";

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

type 

const authReducer = (state: IAuthState, action): IAuthState => {};

export const Login = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h3> Login </h3>

			{/* useReducer, es cuando el estado puede cambiar con mucha regularidad */}
			<div className="alert alert-info">Validating...</div>

			<div className="alert alert-danger">Please register</div>

			<div className="alert alert-success">Success</div>

			<button className="btn btn-success"> Login </button>

			<button className="btn btn-danger"> Logout </button>
		</>
	);
};
