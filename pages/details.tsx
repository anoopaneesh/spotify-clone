import Player from "../components/Player"
import Sidebar from "../components/Sidebar"
import Image from 'next/image'
import {  ClockIcon } from "@heroicons/react/outline"
import { GetServerSideProps } from "next"
import Track from "../types/Track"
import PlayIconCircle from "../components/icons/PlayIconCircle"
import TrackCard from "../components/TrackCard"
import { useUser } from "../context/UserProvider"
import { useEffect, useState } from "react"
import {useRouter} from "next/router"
import Head from 'next/head'
import { useTrack } from "../context/TrackContext"
import { Playlist } from "../types/Playlist"
import { Album } from "../types/Album"
import { getAlbumTracks, getPlaylistTracks } from "../helpers/spotify-api"
interface DetailsProps{
    tracks:Track[]
    playlist:Playlist|null
    album:Album|null
}
const getCleanString = (myString:string) => {
    return myString.replace( /(<([^>]+)>)/ig, '').replace(/&amp;/g, "&")
  }
  
const details = ({album,playlist}:DetailsProps) => {
    const [tracks,setTracks] = useState<Track[]>([])
    let subtitle: string|null=null
    if(album){
        subtitle = getCleanString(album.artists.map(artist => artist.name).join().toString())
    }
    const {user} = useUser()
    const {addTrack} = useTrack()
    const router = useRouter()
    const handleTrackClick = (track:Track) => {
        addTrack(track)
    }
    useEffect(()=>{
        if(!user || !user.token){
            router.push('/login')
        }else{
            if(album){
                getAlbumTracks(album,user.token.access_token).then((data)=>{
                    setTracks(data)
                })
            }else if(playlist){
                getPlaylistTracks(playlist,user.token.access_token).then((data)=>{
                    setTracks(data)
                })
            }
        }
    },[])
    return (
        <div>
             <Head>
      <title>
          Spotify Clone | Creative World Inc.
        </title>
        </Head>
      {(user && user.token !== null)? (<main className="font-poppins">
        {/* left side */}
        <section>
          <Sidebar />
        </section>
        {/* right side */}
        <section className="md:ml-60 bg-black bg-opacity-90 flex-grow text-white py-24 md:px-8 min-h-screen">
          <div className="flex flex-col sm:flex-row sm:items-end space-x-5">
              <div className="relative w-48 h-48 mx-5 sm:mx-0">
                  <Image src={album?.images[0].url || playlist?.images[0].url || ''} layout="fill" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex flex-col">
                     <h1 className="text-7xl font-bold">{album?.name || playlist?.name || ''}</h1>
                     <h3 className="text-gray-500 text-sm font-bold">{subtitle || playlist?.description || ''}</h3>
                  </div>                
                  <div>
                     <PlayIconCircle height="120px" width="120px" className="scale-75 md:scale-100 hover:scale-75 md:hover:scale-105 transition duration-300 ease-out cursor-pointer"/>
                  </div>
              </div>
          </div>
          <div className="mt-20">
          <div className="flex uppercase text-sm text-gray-300 border-b border-[#373B3F] pb-2 items-center">
                <div className="w-16 text-center"><p>#</p></div>
                <div className="flex-1"><p>Title</p></div>
                <div className="flex-1 hidden md:inline-flex"><p>Album</p></div>
                <div className="w-96 hidden lg:inline-flex"><p>Date added</p></div>
                <div className="w-24 flex justify-end pr-8"><ClockIcon className="h-3" /></div>
          </div>
          {tracks.map((track,i) => (<TrackCard track={track} index={i+1} key={track.id} onClick={handleTrackClick}/>))}
          </div>
        </section>
        <section>
          <Player />
        </section>
      </main>):<><div>Loading...</div></>}
    </div>
    )
}

export default details

export const getServerSideProps : GetServerSideProps = async(context) => {
    let {album,playlist} = context.query
    album = (album && album.length) ? JSON.parse(album as string) : null
    playlist = (playlist && playlist.length) ? JSON.parse(playlist as string) : null
    return {
        props:{
            album,
            playlist
        }
    }
}
