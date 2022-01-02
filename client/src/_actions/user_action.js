import axios from 'axios';
// import { response } from 'express';
import {
    LOGIN_USER
} from './types.js'

export function loginUser(dataTosubmit) {
    const request = axios.post('/api/users/login/', dataTosubmit)
                .then(response => response.data)
    
    return  {
    type: LOGIN_USER,
    payload: request
            }

}