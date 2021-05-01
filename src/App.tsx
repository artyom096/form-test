import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Form } from './Components/Form/Form';
import { Profile } from './Components/Profile';
import { Title } from './Components/Title';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	z-index: 1000;
`;

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Title />
			<Wrapper>
				<Route path="/" exact component={Form} />
				<Route path="/profile" exact component={Profile} />
			</Wrapper>
		</BrowserRouter>
	);
};
