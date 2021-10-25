import Player from "../components/Player"
import Sidebar from "../components/Sidebar"
import Image from 'next/image'
import detailedPlaylist from "../data/detailed-playlist"
import { PlayIcon } from "@heroicons/react/solid"
import {  ClockIcon } from "@heroicons/react/outline"
import { GetServerSideProps } from "next"
import Track from "../types/Track"
import { addSeconds, format, formatDistanceToNow } from "date-fns"
import PlayIconCircle from "../components/icons/PlayIconCircle"
interface DetailsProps{
    tracks:Track[]
}
const getCleanString = (myString:string) => {
    return myString.replace( /(<([^>]+)>)/ig, '').replace(/&amp;/g, "&")
  }
function formattedTime(millis:number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Number(((millis % 60000) / 1000).toFixed(0))
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  function getArtists(track:Track){
      return getCleanString(track.album.artists.map(artist => artist.name).join().toString())
  }
const details = ({tracks}:DetailsProps) => {
    return (
        <div>
      <main className="font-poppins">
        {/* left side */}
        <section>
          <Sidebar />
        </section>
        {/* right side */}
        <section className="md:ml-60 bg-black bg-opacity-90 flex-grow text-white py-24 px-8">
          <div className="flex flex-col sm:flex-row sm:items-end space-x-5">
              <div className="relative w-48 h-48 mx-5 sm:mx-0">
                  <Image src="https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6" layout="fill" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex flex-col">
                     <h1 className="text-7xl font-bold">Peaceful Piano</h1>
                     <h3 className="text-gray-500 text-sm font-bold">Relax and indulge with beautiful piano pieces</h3>
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
          {tracks.map((track,i) => (<div className="flex text-sm md:text-xs text-gray-300 py-2 items-center hover:bg-white hover:bg-opacity-5 cursor-pointer hover:rounded-md group">
                <div className="w-16 text-center"><p>{i+1}</p></div>
                <div className="flex-1 truncate">
                    <div className="flex space-x-4">
                        <div className="relative w-10 h-10">
                            <Image src={track.album.images[0].url} layout="fill" />
                        </div>
                        <div className="flex flex-col">
                        <p className="text-white font-bold">{track.name}</p>
                        <p>{getArtists(track)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 hidden md:inline-flex"><p>{track.album.name}</p></div>
                <div className="w-96 hidden lg:inline-flex"><p>{formatDistanceToNow(new Date(track.added_at),{addSuffix:true})}</p></div>
                <div className="w-24 text-right pr-8"><p>{formattedTime(track.duration_ms)}</p></div>
          </div>))}
          </div>
        </section>
        <section>
          <Player />
        </section>
      </main>
    </div>
    )
}

export default details

export const getServerSideProps : GetServerSideProps = async(context) => {
    let tracks : Track[] = detailedPlaylist.items.map(item => {
        return{
            added_at:item.added_at,
            id:item.track.id,
            name:item.track.name,
            album:item.track.album,
            duration_ms:item.track.duration_ms,
            popularity:item.track.duration_ms

        }
    })
    return {
        props:{
            tracks
        }
    }
}
