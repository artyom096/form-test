import React from 'react';
import styled from 'styled-components';

const InputWrapperStyle = styled.div<any>`
	input {
		padding: 20px;
		width: 100%;
		border-radius: 8px;
		border: none;
		background-color: #f5f5f5;
		outline: none;
		border: ${(props) => (props.errors[props.name] ? '2px solid #E26F6F' : '')};
		margin-top: 10px;
		box-sizing: border-box;
	}

	label {
		margin-bottom: 10px;
	}

	p {
		margin-top: 8px;
		margin-bottom: 20px;
	}
`;

export const InputWrapper = ({ children, errors, name }: any) => {
	return (
		<InputWrapperStyle name={name} errors={errors}>
			{children}
		</InputWrapperStyle>
	);
};
