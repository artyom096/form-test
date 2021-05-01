import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
	width: 100%;
	text-align: center;
	margin-top: 2rem;
	font-size: 64px;
	position: absolute;
`;

export const Title: React.FC = () => {
	return <TitleWrapper>ONLY.</TitleWrapper>;
};
