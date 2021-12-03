const initialState = {
    notes: [],
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_NOTES":
            if (state.notes === action.notes) return;

            return {
                ...state,
                notes: action.notes
            }
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case "DELETE_NOTE":
            return {
                notes: state.notes.filter(note => note.id !== action.id)
            }
        default: return state
    }
}