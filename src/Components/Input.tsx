import React from 'react';
import styled from 'styled-components';
import { InputWrapper } from './InputWrapper';

interface IInputProps {
	name: string;
	required: boolean;
	id: string;
	type: string;
	register: any;
	children: string;
	errors: any;
}

export const Input: React.FC<IInputProps> = ({ name, register, required, type, id, children, errors }) => {
	console.log(errors);

	return (
		<InputWrapper name={name} errors={errors}>
			<label htmlFor={id}>{children}</label>
			<input id={id} type={type} {...register(name, { required })} />
			{errors[name] && <p>Обязательное поле</p>}
		</InputWrapper>
	);
};
