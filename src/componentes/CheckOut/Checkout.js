import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import Header from "../Header";

export default function Produtos () {
	const navigate = useNavigate();

	useEffect(() => {
		const url = 'https://projeto14-note-store.herokuapp.com/carrinho';
		const carrinho = localStorage.getItem('CarrinhoToken');
		axios.delete(url, {
			headers: {
				carrinho: carrinho
			}
		}).then(response => {
			const {data} = response;
			console.log(data)
			localStorage.removeItem('CarrinhoToken');
		}).catch(error => console.log(error));
	}, []);

	return (
		<>
			<Header/>
			<Cards>Compra Concluida</Cards>
			<StyledLink to='/'>Voltar a Pagina inicial</StyledLink>
		</>
	);
}

const Cards = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 90px;
	font-family: 'Roboto', sans-serif;
	font-size: 30px;
`;

const StyledLink = styled(Link)`
	margin-top: 15px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #0000FF;
	font-family: 'Roboto', sans-serif;
`;