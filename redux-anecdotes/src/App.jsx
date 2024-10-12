import { useDispatch } from 'react-redux';
import AnecDoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { useEffect } from 'react';
import notes from './services/notes';
import { setAnecdote } from './reducers/anecdoteReducer';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		notes.getAll().then((res) => {
			dispatch(setAnecdote(res));
		});
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
