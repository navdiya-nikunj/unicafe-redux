import { createSlice } from "@reduxjs/toolkit"
import notes from "../services/notes"


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