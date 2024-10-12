import axios from 'axios'

const getAnecdotes = async () => {
    const res = await axios.get('http://localhost:3001/anecdotes')

    return res.data;
}

export { getAnecdotes };