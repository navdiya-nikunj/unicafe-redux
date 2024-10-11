import { useDispatch } from 'react-redux';
import { addAnecdoteAction } from '../reducers/Actions';

const AnecDoteForm = () => {
	const dispatch = useDispatch();
	const addAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		dispatch(addAnecdoteAction(content));
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='text' />
				</div>
				<button>create</button>
			</form>
		</>
	);
};
export default AnecDoteForm;
