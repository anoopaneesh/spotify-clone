import Track from "../types/Track";
import Image from 'next/image'
import { formatDistanceToNow } from "date-fns";
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
  interface TrackCardProps{
      track:Track
      index:number
      onClick:(track:Track) => void 
  }
const TrackCard = ({track,index,onClick}:TrackCardProps) => {
    return (
        <div onClick={() => onClick(track)} className="flex text-sm md:text-xs text-gray-300 py-2 items-center hover:bg-white hover:bg-opacity-5 cursor-pointer hover:rounded-md group">
                <div className="w-16 text-center"><p>{index}</p></div>
                <div className="flex-1 truncate">
                    <div className="flex space-x-4">
                        <div className="relative w-10 h-10">
                            <Image src={track.album.images[0].url} layout="fill" />
                        </div>
                        <div className="flex flex-col">
                        <p className="text-white font-bold truncate">{track.name}</p>
                        <p>{getArtists(track)}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 hidden md:inline-flex"><p>{track.album.name}</p></div>
                <div className="w-96 hidden lg:inline-flex"><p>{track.added_at ? formatDistanceToNow(new Date(track.added_at),{addSuffix:true}) : ''}</p></div>
                <div className="w-24 text-right pr-8"><p>{formattedTime(track.duration_ms)}</p></div>
          </div>
    )
}

export default TrackCard
