import axios from "axios"
import { uploadNotes } from "../actions/notes"

export const getNotes = () => dispatch => {
    axios.get("http://localhost:80/notes").then(response => {
        dispatch(uploadNotes(response.data))
    })
}