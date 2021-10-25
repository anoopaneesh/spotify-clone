import { NextApiRequest, NextApiResponse } from "next"

const handler = async(req:NextApiRequest,res:NextApiResponse) => {
    const code = req.query.code
    const id = `${process.env.SP_CLIENT_ID}:${process.env.SP_SECRET}`
    if(code){
        const options = {
            'grant_type':'authorization_code',
            'redirect_uri':`${process.env.REDIRECT_URI}`,
            'code':`${code}`,
        }
        const token = await fetch('https://accounts.spotify.com/api/token',{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization':`Basic ${Buffer.from(id).toString('base64')}`
            },
            body:new URLSearchParams(Object.entries(options)).toString()
        }).then(res =>res.json())
        res.status(200).send({token,message:'token recieved'})
    }else{
        res.status(200).send({token:null,message:'token not recieved'})
    }
}

export default handler