import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdoteFn } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector((state) => {
		console.log(state);
		if (state.filter === '') {
			return [...state.anecdotes].sort((a, b) => {
				if (a.votes > b.votes) return -1;
				else return 1;
			});
		} else {
			return [...state.anecdotes]
				.filter((anecdote) => anecdote.content.includes(state.filter))
				.sort((a, b) => {
					if (a.votes > b.votes) return -1;
					else return 1;
				});
		}
	});

	const handleVote = (id) => {
		dispatch(voteAnecdoteFn(id));
	};

	return anecdotes.map((anecdote) => (
		<div key={anecdote.id}>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => handleVote(anecdote.id, anecdote.content)}>
					vote
				</button>
			</div>
		</div>
	));
};
export default AnecdoteList;
