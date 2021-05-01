import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface ICheckProps {
	name: string;
	id: string;
	type: string;
	register: UseFormRegister<any>;
}

const CheckboxStyle = styled.div`
	font-size: 16px;

	input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}

	input + label {
		position: relative;
		vertical-align: middle;
		padding: 0 0 0 30px;
		cursor: pointer;
	}

	input + label:before {
		content: '';
		position: absolute;
		top: -1px;
		left: 0;
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	input + label:after {
		content: '';
		position: absolute;
	}

	input:checked + label:after {
		position: absolute;
		top: 3px;
		left: 4px;
		background-color: #4a67ff;
		height: 14px;
		width: 14px;
		border-radius: 2px;
	}
`;

export const Checkbox: React.FC<ICheckProps> = ({ register, name, id, type }) => {
	return (
		<CheckboxStyle>
			<input {...register('isRemember')} name={name} defaultChecked id={id} type={type} />
			<label htmlFor="remember">Запомнить меня</label>
		</CheckboxStyle>
	);
};
