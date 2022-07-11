import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import LoadingSpin from "react-loading-spin";
import Header from "./Header";

export default function Produtos () {
	const navigate = useNavigate();
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:5000/produtos';
		const carrinho = localStorage.getItem('CarrinhoToken');
		axios.get(url, {
			headers: {
				carrinho: carrinho
			}
		  }).then(response => {
			const {data} = response;
			setProdutos(data.produtos);
			localStorage.setItem('CarrinhoToken', data.token);
		}).catch(error => console.log(error));
	}, []);

	return (
		<>
			<Header/>
			<Cards>
				{
					(produtos.length > 0) ? (
						produtos.map(produto => {
							return (
								<Card id={produto._id}>
									<Image src={produto.imagem}/>
									<Container>
										<h3>{produto.titulo}</h3>
										<p>R$ {produto.preco}</p>
										<div><p>Adciona ao carrinho</p></div>
									</Container>
								</Card>
							)
						})
					) : (
						<LoadingSpin/>
					)
				}
			</Cards>
		</>
	);
}

const Cards = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 70px;
`;

const Card = styled.div`
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	width: 80%;
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 5px;
`;

const Image = styled.img`
	width: 100%;
`;

const Container = styled.div`
	font-family: 'Roboto';
	padding: 5px 15px;
	text-align: left;
	h3{
		font-weight: bold;
	}
	div p{
		background-color: #232f3e;
		color: white;
		align-items: center;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
		margin-top: 15px;
	}
`;