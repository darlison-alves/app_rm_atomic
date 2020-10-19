import axios from 'axios';
import { api_github } from '../../config/token.api';

const axios_base = axios.create({
    baseURL: 'https://github.com'
})

export function login(code) {
    console.log("dwdw", {
        ...api_github,
        code
    })
    return axios_base.post('/login/oauth/access_token',{}, {
        params: {
            ...api_github,
            code
        }
    });
}