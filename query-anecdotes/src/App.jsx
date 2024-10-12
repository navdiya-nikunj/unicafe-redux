import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { getAnecdotes, voteAnecdotes } from './services/anecdotes';
import { useNotificationDispatch } from './CounterContext';

const App = () => {
	const queryClient = useQueryClient();
	const dispatch = useNotificationDispatch();
	const voteMutation = useMutation({
		mutationFn: voteAnecdotes,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
		},
	});
	const handleVote = (anecdote) => {
		voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
		dispatch({ type: 'SET', payload: `You voted '${anecdote.content}'` });
		setInterval(() => {
			dispatch({ type: 'REMOVE' });
		}, 5000);
		console.log('vote');
	};

	const result = useQuery({
		queryKey: ['anecdotes'],
		queryFn: getAnecdotes,
		retry: false,
	});
	if (result.isLoading) {
		return <div>loading data...</div>;
	}

	if (result.isError) {
		return <div>Service not available</div>;
	}
	const anecdotes = result.data;
	return (
		<div>
			<h3>Anecdote app</h3>

			<Notification />
			<AnecdoteForm />

			{anecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => handleVote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
