import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AddOutline, RemoveOutline } from 'react-ionicons'
import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import LoadingSpin from "react-loading-spin";
import Header from "../Header";

export default function Produtos () {
	const navigate = useNavigate();
	const [carrinho, setCarrinho] = useState([]);

	useEffect(getCarrinho, []);

	function getCarrinho(){
		const url = 'https://projeto14-note-store.herokuapp.com/carrinho';
		const carrinho = localStorage.getItem('CarrinhoToken');
		axios.get(url, {
			headers: {
				carrinho: carrinho
			}
		  }).then(response => {
			const {data} = response;
			setCarrinho(data);
		}).catch(error => console.log(error));
	}

	function Adiciona(element){
		const carrinhoId = element.target.parentNode.parentNode.parentNode.id;
		console.log(carrinhoId)
		const url = 'https://projeto14-note-store.herokuapp.com/updatecarrinho';
		axios.post(url, {carrinhoId: carrinhoId, adiciona: true}).then(response => {
			const {data} = response;
			console.log(data)
			getCarrinho();
		}).catch(error => console.log(error));
	}

	function Subtrai(element){
		const carrinhoId = element.target.parentNode.parentNode.parentNode.id;
		console.log(carrinhoId)
		const url = 'https://projeto14-note-store.herokuapp.com/updatecarrinho';
		axios.post(url, {carrinhoId: carrinhoId, adiciona: false}).then(response => {
			const {data} = response;
			console.log(data)
			getCarrinho();
		}).catch(error => console.log(error));
	}

	return (
		<>
			<Header/>
			<Cards>
				{
					(carrinho.length > 0) ? (
						carrinho.map(value => {
							return (
								<Card id={value.carrinho._id}>
									<Image src={value.produto.imagem}/>
									<Container>
										<h3>{value.produto.titulo}</h3>
										<p>R$ {value.produto.preco}</p>
									</Container>
									<Quantity>
										<RemoveOutline 
											color='white' 
											width='15px' 
											height='15px'
											style={{marginRight: "5px", marginLeft: "5px"}}
											onClick={Subtrai}
										/>
										<p>{value.carrinho.quantidade}</p>
										<AddOutline 
											color='white' 
											width='15px' 
											height='15px'
											style={{marginRight: "5px", marginLeft: "5px"}}
											onClick={Adiciona}
										/>
									</Quantity>
								</Card>
							)
						})
					) : (
						<LoadingSpin/>
					)
				}
			</Cards>
			<Button onClick={() => navigate('/checkout')}>
				<p>Check Out</p>
			</Button>
		</>
	);
}

const Cards = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 70px;
	margin-bottom: 40px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	width: 80%;
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 5px;
`;

const Image = styled.img`
	width: 70px;
	height: 100%;
`;

const Container = styled.div`
	font-family: 'Roboto';
	padding: 5px 15px;
	text-align: left;
	h3{
		font-weight: bold;
	}
`;

const Quantity = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #232f3e;
	p{
		color: white;
		align-items: center;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
	}
`;

const Button = styled.div`
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 40px;
	background-color: #232f3e;
	p{
		color: white;
	}
`;