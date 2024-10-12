import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdotes } from '../services/anecdotes';
import { useNotificationDispatch } from '../CounterContext';

const AnecdoteForm = () => {
	const queryClient = useQueryClient();
	const dispatch = useNotificationDispatch();
	const createAnecdoteMutation = useMutation({
		mutationFn: createAnecdotes,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
		},
	});

	const onCreate = (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = '';
		console.log('new anecdote');
		createAnecdoteMutation.mutate({ content, votes: 0 });
		dispatch({ type: 'SET', payload: `you added '${content}'` });
		setInterval(() => {
			dispatch({ type: 'REMOVE' });
		}, 5000);
	};

	return (
		<div>
			<h3>create new</h3>
			<form onSubmit={onCreate}>
				<input name='anecdote' />
				<button type='submit'>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
