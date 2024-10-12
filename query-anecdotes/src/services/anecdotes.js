import axios from 'axios'

const getAnecdotes = async () => {
    const res = await axios.get('http://localhost:3001/anecdotes')

    return res.data;
}

const createAnecdotes = async (newAnecdote) => {
    const res = await axios.post('http://localhost:3001/anecdotes', newAnecdote)
}

export { getAnecdotes, createAnecdotes };