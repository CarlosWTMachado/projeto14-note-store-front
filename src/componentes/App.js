import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos/Produtos";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Produtos/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}