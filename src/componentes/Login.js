import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext from "./../contexts/UserContext";

export default function Login() {
   const { user, setUser, Error } = useContext(UserContext);
   const [login, setLogin] = useState({ email: "", password: "" });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   function requestAcess(loginObj) {
      setLoading(true);
      const promise = axios.post(
         "http://localhost:5000/login",
         loginObj
      );
      promise.then((res) => {
         const user = {
            name: res.data.name,
            cart: [],
            total: 0
         }
         const token = res.data.token;

         localStorage.setItem("TOKEN", token);
         localStorage.setItem("USER", JSON.stringify(user));
         navigate("/");
         setLoading(false);
      });
      promise.catch((err) => {
         Error(err);
         navigate("/login");
         setLoading(false);
      });
   }

   function sendInputData(e) {
      e.preventDefault();
      requestAcess(login);
   }

   return (
      <MainStyle>
         <>
            <h1>note-store</h1>
            <form onSubmit={(e) => sendInputData(e)}>
               <input
                  type="email"
                  placeholder="E-mail"
                  value={login.email}
                  disabled={loading}
                  onChange={(e) =>
                     setLogin({ ...login, email: e.target.value })
                  }
                  required
               />
               <input
                  type="password"
                  placeholder="Senha"
                  value={login.password}
                  disabled={loading}
                  onChange={(e) =>
                     setLogin({ ...login, password: e.target.value })
                  }
                  required
               />
               <button type="submit">
                  Entrar
               </button>
            </form>

            <Link to="/signup">Primeira Vez? Cadastre-se</Link>
         </>
      </MainStyle>
   );
}

const MainStyle = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Righteous', cursive;
        font-weight: bold;
        color: #ffffff;
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
        margin-top: 10px;
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

    button:hover {
        cursor: pointer;
    }


    input {
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
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
        font-size: 17px;
    }
`;

