import React from 'react';
import styled, { css } from 'styled-components';
import { Loader } from '../Loader';

interface IButton {
	disabled: boolean;
	validation: boolean | string;
}

const ButtonStyle = styled.button`
	margin-top: 40px;
	padding: 0;
	cursor: pointer;
	height: 60px;
	background-color: #4a67ff;
	color: #fff;
	border-radius: 8px;
	border: none;
	outline: none;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	div {
		margin-right: 15px;
		margin-bottom: -10px;
	}

	${(props) =>
		props.disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const Button: React.FC<IButton> = (props: IButton) => {
	return (
		<ButtonStyle disabled={props.disabled}>
			{props.disabled ? <Loader /> : ''}
			Войти
		</ButtonStyle>
	);
};
