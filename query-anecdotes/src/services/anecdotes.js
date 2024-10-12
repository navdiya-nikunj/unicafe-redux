import axios from 'axios'

const getAnecdotes = async () => {
    const res = await axios.get('http://localhost:3001/anecdotes')

    return res.data;
}

const createAnecdotes = async (newAnecdote) => {
    return (await axios.post('http://localhost:3001/anecdotes', newAnecdote)).data;
}

const voteAnecdotes = async (updatedAnecdote) => {
    return (await axios.put(`http://localhost:3001/anecdotes/${updatedAnecdote.id}`, updatedAnecdote));
}

export { getAnecdotes, createAnecdotes, voteAnecdotes };