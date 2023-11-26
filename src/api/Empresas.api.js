import axios from 'axios'
export const getAllEmpresas=()=>{
    return axios.get('http://127.0.0.1:9090/empresas/')
}