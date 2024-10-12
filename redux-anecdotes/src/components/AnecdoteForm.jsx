import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import {
	removeNotification,
	setNotification,
} from '../reducers/notificationReducer';
const AnecDoteForm = () => {
	const dispatch = useDispatch();
	const handleAddAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		dispatch(addAnecdote(content));
		dispatch(setNotification(`You added ${content}`));
		setInterval(() => {
			dispatch(removeNotification());
		}, 5000);
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
