import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IProfileProps {
	location: {
		state: {
			login: string;
			password: string;
		};
	};
}

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin-bottom: 50px;
		font-size: 40px;
	}

	a {
		color: black;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		text-decoration: none;
		background-color: #eee;
		padding: 20px 0;
		border-radius: 8px;
		width: 200px;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}
`;

export const Profile: React.FC<IProfileProps> = (props) => {
	return (
		<ProfileWrapper>
			<p>Здравствуйте, {props.location.state.login}</p>
			<NavLink to="/">Выйти</NavLink>
		</ProfileWrapper>
	);
};
