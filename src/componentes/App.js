import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos/Produtos";
import Carrinho from "./Carrinho/Carrinho";
import Checkout from "./CheckOut/Checkout";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Produtos/>} />
					<Route path="/carrinho" element={<Carrinho/>} />
					<Route path="/checkout" element={<Checkout/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}