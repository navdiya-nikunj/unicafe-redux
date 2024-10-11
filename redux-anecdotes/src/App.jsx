import { useSelector, useDispatch } from 'react-redux';

const App = () => {
	const anecdotes = useSelector((state) => state);
	const dispatch = useDispatch();

	const vote = (id) => {
		dispatch({
			type: 'VOTE',
			payload: {
				id: id,
			},
		});
	};
	const getId = () => (100000 * Math.random()).toFixed(0);
	const addAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		dispatch({
			type: 'ADD_ANECDOTE',
			payload: {
				content,
				id: getId(),
				votes: 0,
			},
		});
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='text' />
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default App;
