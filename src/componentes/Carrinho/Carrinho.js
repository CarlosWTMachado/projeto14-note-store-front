import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AddOutline, RemoveOutline } from 'react-ionicons'
import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import LoadingSpin from "react-loading-spin";
import Header from "../Produtos/Header";

export default function Produtos () {
	const navigate = useNavigate();
	const [carrinho, setCarrinho] = useState([]);

	useEffect(() => {
		const url = 'http://localhost:5000/carrinho';
		const carrinho = localStorage.getItem('CarrinhoToken');
		axios.get(url, {
			headers: {
				carrinho: "4fc17656-757f-4d77-9769-83a312f03d7d"
			}
		  }).then(response => {
			const {data} = response;
			console.log(data)
			setCarrinho(data);
		}).catch(error => console.log(error));
	}, []);

	return (
		<>
			<Header/>
			<Cards>
				{
					(carrinho.length > 0) ? (
						carrinho.map(produto => {
							return (
								<Card  id={produto._id}>
									<Image src={"https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_00000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"}/>
									<Container>
										<h3>{"Notebook Gamer Predator Helios 300 PH315-54-7852"}</h3>
										<p>R$ {"8999,00"}</p>
									</Container>
									<Quantity>
										<AddOutline 
											color='white' 
											width='15px' 
											height='15px'
											style={{marginRight: "5px", marginLeft: "5px"}}
										/>
										<p>{produto.quantidade}</p>
										<RemoveOutline 
											color='white' 
											width='15px' 
											height='15px'
											style={{marginRight: "5px", marginLeft: "5px"}}
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