import { useDispatch } from 'react-redux';
import { createAnecdoteFn } from '../reducers/anecdoteReducer';

const AnecDoteForm = () => {
	const dispatch = useDispatch();
	const handleAddAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		e.target.text.value = '';
		dispatch(createAnecdoteFn(content));
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
