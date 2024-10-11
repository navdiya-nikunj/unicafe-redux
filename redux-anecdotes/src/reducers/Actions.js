import { getId } from "../utils/getId"

const vote = (id) => {
    return {
        type: 'VOTE',
        payload: {
            id: id
        }
    }
}

const addAnecdoteAction = (content) => {
    return {
        type: 'ADD_ANECDOTE',
        payload: {
            content,
            id: getId(),
            votes: 0
        }
    }
}
export { vote, addAnecdoteAction }