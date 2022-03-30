import {CONSULTA_DATA_SUCCESS, CONSULTA_DATA_ERROR} from '../types';

const initialState = {
    result: [],
}

export default function consultarReducer(state = initialState, action){
    switch (action.type) {
        case CONSULTA_DATA_SUCCESS:
            return{
                ...state, result: action.payload
            }
        case CONSULTA_DATA_ERROR:
            return {
                ...state, error: action.payload.error, result: []
            }
        default:
            return state
    }
}