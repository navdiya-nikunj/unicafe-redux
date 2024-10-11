import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/Actions';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector((state) =>
		state.sort((a, b) => {
			if (a.votes > b.votes) return -1;
			else return 1;
		})
	);

	return anecdotes.map((anecdote) => (
		<div key={anecdote.id}>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
			</div>
		</div>
	));
};
export default AnecdoteList;
