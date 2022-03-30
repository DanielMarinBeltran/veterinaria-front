import axios from 'axios';
import {CONSULTA_DATA_SUCCESS, CONSULTA_DATA_ERROR} from '../types';

export function consultarAction(){
    return async(dispatch) =>{
        try {
            const result = await axios.get(`http://localhost:3050/consultarMascotas`);
            if(result.data){
                dispatch(consultaSuccess(result.data.body))
            }
        } catch (error) {
            dispatch(consultaError(error.result))
        }
    }
}

const consultaSuccess = (data) =>({
    type: CONSULTA_DATA_SUCCESS,
    payload: data
});

const consultaError = (error) => ({
    type: CONSULTA_DATA_ERROR,
    payload: error
});
