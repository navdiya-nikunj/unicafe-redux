import ReactDOM from 'react-dom/client';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { filterReducer, reducer } from './reducers/anecdoteReducer';
const combineddreducer = combineReducers({
	anecdotes: reducer,
	filter: filterReducer,
});
const store = createStore(combineddreducer);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
