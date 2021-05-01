import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Loader: React.FC = () => {
	const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

	const Rotate = styled.div`
		display: inline-block;
		width: 20px;
		height: 20px;

		&:after {
			content: ' ';
			display: flex;
			justify-content: center;
			align-item: center;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			border: 4px solid #fff;
			border-color: #fff transparent #fff transparent;
			animation: ${rotate} 1.2s linear infinite;
		}
	`;

	return (
		<Rotate>
			<div></div>
		</Rotate>
	);
};
