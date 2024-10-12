import { createContext, useContext, useReducer } from 'react';

const NotificationReducer = (state, action) => {
	switch (action.type) {
		case 'SET':
			return action.payload;
		case 'REMOVE':
			return '';
		default:
			return state;
	}
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
	const [notification, notificationDispatch] = useReducer(
		NotificationReducer,
		''
	);

	return (
		<NotificationContext.Provider value={[notification, notificationDispatch]}>
			{props.children}
		</NotificationContext.Provider>
	);
};

export default NotificationContextProvider;

export const useNotification = () => {
	const notificationAndDispatch = useContext(NotificationContext);
	return notificationAndDispatch[0];
};

export const useNotificationDispatch = () => {
	const notificationAndDispatch = useContext(NotificationContext);
	setInterval(() => {
		notificationAndDispatch[1]({ type: 'REMOVE' });
	}, 10000);
	return notificationAndDispatch[1];
};
