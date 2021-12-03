import axios from "axios"

export const uploadNotes = (notes) => ({
    type: "SAVE_NOTES",
    notes: notes
})

export const saveValues = (login, description, category) => {
    return {
        type: "ADD_NOTE",
        note: {
            login, description, category
        }
    }
}

export const delNote = (id) => ({
    type: "DELETE_NOTE",
    id
})

export const deleteNote = id => dispatch => {
    axios.delete(`http://localhost:80/notes/${id}`)
    dispatch(delNote(id))
}