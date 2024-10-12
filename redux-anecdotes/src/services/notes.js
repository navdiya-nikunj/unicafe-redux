import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content) => {
    const res = (await axios.post(baseUrl, { content, votes: 0 }));
    return res.data;
}

const voteAnecdote = async (id) => {
    const anecdote = (await axios.get(`${baseUrl}/${id}`)).data;
    const res = await axios.put(`${baseUrl}/${id}`, { id, content: anecdote.content, votes: anecdote.votes + 1 });
    return res.data;
}

export default { getAll, createAnecdote, voteAnecdote }