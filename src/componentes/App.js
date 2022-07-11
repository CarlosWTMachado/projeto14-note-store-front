import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos/Produtos";
import Carrinho from "./Carrinho/Carrinho";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Produtos/>} />
					<Route path="/carrinho" element={<Carrinho/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}