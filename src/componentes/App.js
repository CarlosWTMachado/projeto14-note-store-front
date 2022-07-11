import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Produtos from "./Produtos/Produtos";
import Carrinho from "./Carrinho/Carrinho";
import Checkout from "./CheckOut/Checkout";

import Login from "./componentes/Login";
import SignUp from "./componentes/Sign-Up";
import GlobalStyle from "./assets/GlobalStyle/GlobalStyle";
import UserContext from "./contexts/UserContext";

export default function App() {
    const [user, setUser] = useState({});

    function Error(e) {
        console.log(`${e.response.status} - ${e.response.statusText}`);
        alert("Um erro aconteceu, tente novamente");
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            Error
        }}>
            <BrowserRouter>
                <GlobalStyle />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<Produtos/>} />
                        <Route path="/carrinho" element={<Carrinho/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                    </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
