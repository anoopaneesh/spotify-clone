import {useState,createContext,useContext} from 'react'
import Token from '../types/Token'
interface User{
    token:Token
}
interface UserContextProps{
    user:User|null
    setToken:(token:Token) => void
    requestToken:(code:string) => Promise<void>
    loading:boolean
}
const UserContext = createContext({} as UserContextProps)
const UserProvider = ({children}:any) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState(false)
    const setToken = (token:Token) => {
        setUser({token})
    }
    const requestToken = async(code:string) => {
            return new Promise<void>(async(resolve) => {
                setLoading(true)
                await fetch(`/api/getToken?code=${code}`).then(res => res.json()).then(data => {
                console.log(data)
                    if(data.token){
                        setToken(data.token as Token)
                        resolve()
                    }
                })
                setLoading(false)
            })
    }
    return (
        <UserContext.Provider value={{user,setToken,requestToken,loading}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider

export const useUser = () => useContext(UserContext)
