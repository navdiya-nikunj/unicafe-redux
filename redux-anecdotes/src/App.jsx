import { useDispatch } from 'react-redux';
import AnecDoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { useEffect } from 'react';
import { InitializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(InitializeAnecdotes());
	}, []);
	return (
		<div>
			<Notification />
			<h2>Anecdotes</h2>
			<Filter />
			<AnecdoteList />
			<AnecDoteForm />
		</div>
	);
};

export default App;
