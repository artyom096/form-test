import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputWrapper } from './InputWrapper';

interface IInputProps {
	name: string;
	required: boolean;
	id: string;
	type: string;
	register: UseFormRegister<any>;
	children: string;
	errors: FieldErrors;
}

export const Input: React.FC<IInputProps> = ({ name, register, required, type, id, children, errors }) => {
	return (
		<InputWrapper name={name} errors={errors}>
			<label htmlFor={id}>{children}</label>
			<input id={id} type={type} {...register(name, { required })} />
			{errors[name] && <p>Обязательное поле</p>}
		</InputWrapper>
	);
};
