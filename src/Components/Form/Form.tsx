import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../Input';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

interface IFormData {
	login: string;
	password: string;
}

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 640px;

	label {
		margin-bottom: 10px;
	}
`;

const AbsancePerson = styled.div`
	padding: 20px;
	background-color: #f5e9e9;
	border: 2px solid #e26f6f;
	border-radius: 8px;
	font-weight: 400;
	display: flex;
	margin-bottom: 25px;
	margin-top: 100px;

	div {
		border-radius: 50%;
		color: #e26f6f;
		background-color: #ffc8c8;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		margin-right: 15px;
		box-sizing: border-box;
	}
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	width: 100%;

	p {
		color: #e26f6f;
		margin-bottom: 0;
	}
`;

export const Form: React.FC = () => {
	const [data, setData] = useState<IFormData | null>(null);
	const [validation, setValidation] = useState<boolean | string>(' ');
	const [disabled, setDisabled] = useState<boolean>(false);

	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>();

	const onSubmit = (data: IFormData) => {
		setDisabled(true);
		setTimeout(() => {
			setData(data);
			if (data.login === 'steve.jobs@example.com' || data.password === 'password') {
				setValidation(true);
				history.push({
					pathname: '/profile',
					state: data,
				});
			} else {
				setValidation(false);
			}
			setDisabled(false);
		}, 1500);
	};

	return (
		<FormWrapper onSubmit={handleSubmit(onSubmit)}>
			{validation ? (
				''
			) : (
				<AbsancePerson>
					<div>!</div>
					<p>{`Пользователя ${data?.login} не существует`}</p>
				</AbsancePerson>
			)}
			<InputGroup>
				<Input register={register} name="login" type="text" id="login" required errors={errors}>
					Логин
				</Input>
			</InputGroup>
			<InputGroup>
				<Input register={register} name="password" type="password" id="password" required errors={errors}>
					Пароль
				</Input>
			</InputGroup>
			<Checkbox name="isRemember" id="remember" type="checkbox" register={register} />
			<Button validation={validation} disabled={disabled} />
		</FormWrapper>
	);
};
