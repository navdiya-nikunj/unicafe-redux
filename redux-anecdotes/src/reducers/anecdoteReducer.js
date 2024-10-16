import { createSlice } from "@reduxjs/toolkit"
import notes from "../services/notes"
import { setNotificationFn } from "./notificationReducer"


const initialState = []

const anecdoteReducer = createSlice({
  name: 'Anecdotes',
  initialState,
  reducers: {
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      return [...state].map((anecdote) => {
        if (anecdote.id === action.payload) {
          return { ...anecdote, votes: anecdote.votes + 1 }
        }
        return anecdote;
      })
    },
    setAnecdote(state, action) {
      return action.payload;
    }
  }
})


export default anecdoteReducer.reducer;
export const { voteAnecdote, addAnecdote, setAnecdote } = anecdoteReducer.actions;

export const InitializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await notes.getAll()
    dispatch(setAnecdote(anecdotes))
  }

}

export const createAnecdoteFn = (content) => {
  return async dispatch => {
    const newAnecdote = await notes.createAnecdote(content);
    console.log("new an", newAnecdote);
    dispatch(addAnecdote(newAnecdote));
    dispatch(setNotificationFn(`You added ${content}`, 5))
  }
}

export const voteAnecdoteFn = (id) => {
  return async dispatch => {
    const res = await notes.voteAnecdote(id);
    dispatch(voteAnecdote(id));
    dispatch(setNotificationFn(`You voted '${res.content}'`, 5));
  }
}