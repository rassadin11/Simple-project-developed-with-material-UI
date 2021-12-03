import axios from "axios"

export const changeValues = (title, details, category) => () => {
    return axios.post("http://localhost:80/notes", {
        title, details, category
    })
}