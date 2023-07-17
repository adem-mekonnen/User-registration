import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import { useState } from 'react';
const AddUser = (props) => {
	const [enteredUser, setUserInput] = useState('');
	const [enteredAge, setAgeInput] = useState('');
	const [error, setError] = useState();
	const ageChangeHandler = (event) => {
		setAgeInput(event.target.value);
	};
	const userNameChangeHandler = (event) => {
		setUserInput(event.target.value);
	};
	const addUser = (event) => {
		event.preventDefault();
		if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'invalid input',
				message: 'please enter valid user name',
			});
			return;
		}
		// convert the string to number using +
		if (+enteredAge < 1) {
			setError({
				title: 'invalid  age',
				message: 'please enter valid age greater than 0',
			});
			return;
		}
		//console.log(enteredUser, enteredAge);
		props.onAddUser(enteredUser, enteredAge);
		setUserInput('');
		setAgeInput('');
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUser}>
					<label htmlFor="username">UserName </label>
					<input
						type="text"
						id="username"
						value={enteredUser}
						onChange={userNameChangeHandler}
					/>

					<label htmlFor="age">Age(Years) </label>
					<input
						type="number"
						id="age"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>

					<Button type="submit"> AddUser</Button>
				</form>
			</Card>
		</div>
	);
};
export default AddUser;
