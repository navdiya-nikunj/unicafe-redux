import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
const AnecDoteForm = () => {
	const dispatch = useDispatch();
	const handleAddAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		dispatch(addAnecdote(content));
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={handleAddAnecdote}>
				<div>
					<input name='text' />
				</div>
				<button>create</button>
			</form>
		</>
	);
};
export default AnecDoteForm;
