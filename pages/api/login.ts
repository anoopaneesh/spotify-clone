import { NextApiRequest, NextApiResponse } from "next"

const handler = (req:NextApiRequest,res:NextApiResponse) => {
    var scope = 'streaming user-read-private user-read-email user-read-playback-state user-modify-playback-state';
    res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SP_CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.REDIRECT_URI}`);
}

export default handler