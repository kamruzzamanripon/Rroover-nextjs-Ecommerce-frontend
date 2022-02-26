import axios from 'axios'
import { parseCookies } from 'nookies'

export default function axios_auth_header(ctx) {
   //console.log("useAxios_authheaders", ctx)
   //console.log("useAxios_authheaders", parseCookies(ctx))
    const {passport_frontend} = parseCookies(ctx) ? parseCookies(ctx) : ""
    const token = passport_frontend ? passport_frontend : ""
    const api = axios.create({
        withCredentials: true,
        headers:{
            'Authorization': `Bearer ${token}`
          }
    })

       
    return api
    
    //api.defaults.headers.common['Authorization'] = `Bearer ${snactum_frontend}`;

    
}