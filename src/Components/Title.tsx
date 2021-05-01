import React from 'react';
import styled from 'styled-components';

export const Title: React.FC = () => {
	const TitleWrapper = styled.h1`
		width: 100%;
		text-align: center;
		margin-top: 2rem;
		font-size: 64px;
		position: absolute;
	`;

	return <TitleWrapper>ONLY.</TitleWrapper>;
};
