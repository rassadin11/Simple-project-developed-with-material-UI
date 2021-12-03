const initialState = {
    login: '',
    description: '',
    category: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FORM_VALUES":
            return {
                ...state,
                login: action.login,
                description: action.description
            }
        default:
            return state
    }
}