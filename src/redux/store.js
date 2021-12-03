import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { formReducer } from "./reducers/form";
import thunk from 'redux-thunk'
import { notesReducer } from "./reducers/notes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
    form: formReducer,
    notes: notesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)