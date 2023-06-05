import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
	// let url = 'https://api.github.com/users/0x-sarthak';
	let url = 'https://api.github.com/users';
	const [user, setUser] = useState(null);
	const [follower, setFollower] = useState([]);
	const [names, setName] = useState('');
	const handleChange = (e) => {
		setName(e.target.value);
	};
	console.log(user);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetchData();
	};

	const fetchData = async () => {
		try {
			const response = await fetch(`https://api.github.com/users/${names}`);
			const followerResponse = await fetch(
				`https://api.github.com/users/${names}/followers`
			);
			const data = await response.json();
			const followerData = await followerResponse.json();

			setUser(data);
			setFollower(followerData);
			// console.log(followerData);
		} catch (error) {
			console.log(error);
		}
	};

	// const { avatar_url, followers, blog, location } = user;
	return (
		<div className='App'>
			<br />
			<h1> GITHUB PROFILE CHECKER</h1>
			<div className='formdata'>
				<form onSubmit={handleSubmit}>
					<label>USERNAME : </label>
					<input
						style={{
							padding: '2px',
							border: '0px',
							borderRadius: '5px',
							height: '30px',
							width: '200px',
						}}
						onChange={handleChange}
						type='name'
						placeholder='Enter Here'
						value={names}
					/>
					<button
						style={{
							fontfamily: 'Montserrat Alternates',
							background: '#30E3CA',
							border: '0px',
							borderRadius: '5px',
							margin: '10px',
							height: '30px',
							width: '80px',
						}}
						type='submit'>
						Submit
					</button>
				</form>
			</div>
			{/* <hr style={{ width: '800px', color: 'black' }} />
			<hr style={{ width: '800px' }} /> */}

			{user?.name ? (
				<div className='main-div'>
					<div className='main-div1'>
						<img
							style={{ width: '250px', borderRadius: '50%' }}
							src={user?.avatar_url}
							alt='Not Found'
						/>
					</div>
					<div className='main-div2'>
						<h2>{user?.name || user?.message}</h2>
						<a
							style={{ textDecorationLine: 'none' }}
							href={user?.blog}
							target='_blank'
							rel='noreferrer'>
							Portfolio
						</a>
						<br />
						<button style={{ width: '150px', height: '30px', margin: '20px' }}>
							No. of followers- {user?.followers}
						</button>
						<button style={{ width: '150px', height: '30px', margin: '20px' }}>
							No. of following- {user?.following}
						</button>
					</div>
				</div>
			) : (
				<h2>ENTER THE CORRECT USERNAME</h2>
			)}
			{/* {follower
				? follower.map((flwr) => {
						const { id, login } = flwr;
						return (
							<div key={id}>
								<h2>{login}</h2>
							</div>
						);
				  })
				: null} */}

			{/* {follower.map((flwr) => {
				const { id, login } = flwr;
				return (
					<div key={id}>
						<h2>{login}</h2>
					</div>
				);
			})} */}

			{/* <ul className='users'>
				{user.map((users) => {
					const { id, login, avatar_url, html_url } = users;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h5>{login}</h5>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul> */}
			<br />
		</div>
	);
}

export default App;
