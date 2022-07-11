import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext from "./../contexts/UserContext";

export default function SignUp() {
    const { Error } = useContext(UserContext);
    const [registerUser, setregisterUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });
    const navigate = useNavigate();


    function register(registerUser) {
        if (registerUser.password !== registerUser.confirm) {
            alert("Senhas diferentes!");
            setregisterUser({ ...registerUser, password: "", confirm: "" });
            return;
        }
        delete registerUser.confirm;
        const promise = axios.post("http://localhost:5000/signup", registerUser);
        promise.then(() => {
            navigate("/login");
        });
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert("E-mail já cadastrado!");
            }
            else {
                Error(err);
            }
        });
    }

    function sendUser(e) {
        e.preventDefault();
        register(registerUser);
    }

    return (
    <MainStyle>
            <>
            <h1>note-store</h1>
            <form
                onSubmit={(e) => {
                    sendUser(e);
                }}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    value={registerUser.name}
                    onChange={(e) => setregisterUser({ ...registerUser, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={registerUser.email}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={registerUser.password}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, password: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={registerUser.confirm}
                    onChange={(e) =>{
                        setregisterUser({ ...registerUser, confirm: e.target.value })
                    }
                }
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/login">Já tem uma conta? Entre agora!</Link>
            </>
        </MainStyle>
    );
}
        
const MainStyle = styled.main`
display: flex;
width: 100%;
height: 100vh;
background-color:  blue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1 {
    font-family: 'Righteous', cursive;
    font-weight: bold;
    color: #ffffff;
    font-size: 52px;
    font-size: 400%;
    line-height: 50px;
    margin: -5px 0px 35px;
}

h2 {
    font-weight: bold;
    color: #ffffff;
    font-size: 25px;
    line-height: 50px;
    margin: -5px 0px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

button {
    background-color: #c747fc;
    border: none;
    width: 31%;
    height: 54px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}

button:hover{
    cursor: pointer;
}

button:disabled{
    background-color: #a09da1;
    color: #ffffff00;
}

input{
    width: 60%;
    max-width: 470px;
    height: 45px;
    padding: 18px 15px;
    border-radius: 30px;
    border: none;
    color: #000000;
    font-size: 12 px;
    margin-bottom: 13px;
}

a {
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}
`;