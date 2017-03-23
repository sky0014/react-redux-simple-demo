import * as types from './actionTypes.js';

export default function reducer(state, action) {
    switch (action.type) {
        case types.ACTION_A_CHANGE:
            const {isA} = action;
            return {
                ...state,
                isA
            }
        case types.ACTION_B_CHANGE:
            const {isB} = action;
            return {
                ...state,
                isB
            }
        default:
            return state;
    }
}