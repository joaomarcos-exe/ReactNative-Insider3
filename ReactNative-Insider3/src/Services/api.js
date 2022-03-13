//0d73d11bcaf1486214312b0a431d7bfbda828cfa
//base url: https://api-ssl.bitly.com/v4
import axios from 'axios'

export const key = '0d73d11bcaf1486214312b0a431d7bfbda828cfa'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}` ,
    }
})

export default api;