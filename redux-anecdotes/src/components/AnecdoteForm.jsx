import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import {
	removeNotification,
	setNotification,
} from '../reducers/notificationReducer';
import notes from '../services/notes';
const AnecDoteForm = () => {
	const dispatch = useDispatch();
	const handleAddAnecdote = (e) => {
		e.preventDefault();
		const content = e.target.text.value;
		e.target.text.value = '';
		notes.createAnecdote(content).then((res) => {
			dispatch(addAnecdote(res));
			dispatch(setNotification(`You added ${content}`));
			setInterval(() => {
				dispatch(removeNotification());
			}, 5000);
		});
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
