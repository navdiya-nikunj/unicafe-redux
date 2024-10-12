import AnecDoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
	return (
		<div>
			<Notification />
			<h2>Anecdotes</h2>
			<Filter />
			<AnecdoteList />
			<AnecDoteForm />
		</div>
	);
};

export default App;
