import { parseCookies } from 'nookies'

export default function ifLogIn(ctx) {
    const {passport_frontend} = parseCookies(ctx)
    if(passport_frontend){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
}