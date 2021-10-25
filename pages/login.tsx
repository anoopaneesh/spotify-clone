import logo from '../images/spotify.svg'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/UserProvider'
import Token from '../types/Token'
const login = () => {
    const {requestToken,loading} = useUser()
    const router = useRouter()
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search) // id=123
        let code = params.get('code')
        if(code){
            requestToken(code).then(()=>{
                router.push('/')
            })
        }
    },[])
    return (
        <div>
            <main className="bg-[#1A1A1A] h-screen flex items-center justify-center">
            {loading ? <div className="text-white"><h1>Loading....</h1></div> :(
            <div className="flex flex-col space-y-2">
            <div className="relative w-80 h-40 bg-transparent">
                 <Image src={logo} layout="fill" />
            </div>
            <a href="/api/login" className="px-8 py-2 rounded-md font-bold text-white text-center bg-green-500 hover:bg-green-600 active:scale-95 transition duration-150 ease-out">Log in with spotify</a>
            </div>

            )}
            </main>
        </div>
    )
}

export default login

