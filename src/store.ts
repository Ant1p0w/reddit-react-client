import {ActionCreator, AnyAction, Reducer} from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type RootState = {
    commentText: string;
    token: string;
}

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: ''
}


export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

export const setToken: ActionCreator<AnyAction> = (text) => ({
    type: SET_TOKEN,
    text
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.text,
            };
        default:
            return state;
    }
}
