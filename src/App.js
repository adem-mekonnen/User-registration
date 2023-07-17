import React from 'react';
import './index.css';
import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';
function App() {
	const [userList, setUserList] = useState([]);
	const userListHandler = (uName, uAge) => {
		setUserList((prevList) => {
			return [
				...prevList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<div>
			<AddUser onAddUser={userListHandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;
