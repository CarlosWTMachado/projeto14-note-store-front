import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";

export default function Produtos () {
	const navigate = useNavigate();

	return (
		<>
			<Cards>
				<Card>
					<Image src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_00000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"/>
					<Container>
						<h3>Notebook DELL Inspiron 15 3000</h3>
						<p>R$ 2798,00</p>
						<div><p>Adciona ao carrinho</p></div>
					</Container>
				</Card>
				<Card>
					<Image src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_00000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"/>
					<Container>
						<h3>Notebook DELL Inspiron 15 3000</h3>
						<p>R$ 2798,00</p>
						<div><p>Adciona ao carrinho</p></div>
					</Container>
				</Card>
				<Card>
					<Image src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_00000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"/>
					<Container>
						<h3>Notebook DELL Inspiron 15 3000</h3>
						<p>R$ 2798,00</p>
						<div><p>Adciona ao carrinho</p></div>
					</Container>
				</Card>
			</Cards>
		</>
	);
}

const Cards = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Card = styled.div`
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	width: 80%;
	margin-top: 10px;
	margin-bottom: 10px;
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
		background-color: green;
		align-items: center;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
		margin-top: 15px;
	}
`;