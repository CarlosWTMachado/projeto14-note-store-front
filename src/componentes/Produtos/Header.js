import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { LaptopOutline, CartOutline, PersonOutline } from 'react-ionicons'

export default function Produtos () {
	const navigate = useNavigate();
	
	return (
		<HeaderContainer>
			<AppName>
				<LaptopOutline
					color='white'
					width='60px'
					height='60px'
				/>
				<p>NoteStore</p>
			</AppName>
			<Buttons>
				<PersonOutline
					color='white'
					width='25px'
					height='25px'
					style={{marginRight: "20px"}}
					onClick={() => navigate('/login')}
				/>
				<CartOutline
					color='white'
					width='25px'
					height='25px'
					onClick={() => navigate('/carrinho')}
				/>
			</Buttons>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 70px;
	background-color: #232f3e;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	align-items: center;
	display: flex;
	flex-direction: row;
`;

const AppName = styled.div`
	margin-left: 15px;
	margin-right: 15px;
	display: flex;
	align-items: center;
	justify-content: center;

	p{
		margin-left: 10px;
		font-family: 'Roboto';
		font-size: 20px;
		color: white;
	}
`;

const Buttons = styled.div`
	margin-left: 90px;
	padding: 5px;
`;