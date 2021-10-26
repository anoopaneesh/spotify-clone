import Image from 'next/image'
import {useRouter} from 'next/router';
import { useTrack } from '../context/TrackContext';
import playSmall from '../images/playSmall.svg'
import { Album } from '../types/Album';
import { Playlist } from '../types/Playlist';
interface AlbumCardProps{
  album?:Album 
  playlist?:Playlist
}
const getCleanString = (myString:string) => {
  return myString.replace( /(<([^>]+)>)/ig, '').replace(/&amp;/g, "&")
}
const AlbumCard = ({album,playlist}:AlbumCardProps) => {
  const router = useRouter()
  let subtitle : string | null =null
  if(album){
    subtitle = getCleanString(album.artists.map(artist => artist.name).join().toString())
  }
  const handleDetailsRoute = () => {
    router.push({
      pathname:'/details',
      query:{
        album:album ? JSON.stringify(album) : null,
        playlist:playlist ? JSON.stringify(playlist):null 
      }
    })
  }
  return (
    <div onClick={handleDetailsRoute}>
        <div className="group w-48 h-64 bg-black bg-opacity-20 p-5 rounded-sm cursor-pointer hover:bg-white hover:bg-opacity-5 transition duration-300">
          <div className="relative w-full h-36 rounded-sm overflow-hidden hover:overflow-visible">
            <img
              src={album?.images[0]?.url || playlist?.images[0]?.url || ""}
              width="100%"
              height="100%"
            />
            <div className="translate-y-11 group-hover:translate-y-0 w-10 h-10 grid transition duration-300 ease-out hover:scale-110  absolute right-0 bottom-1 rounded-full place-items-center">
              <Image
              src={playSmall}
              layout="fill"
            /> 
            </div>
          </div>
          <p className="text-white font-bold mt-2 truncate">
            {album?.name || playlist?.name}
          </p>
          <p className="text-gray-500 text-sm line-clamp-2">
            {subtitle || playlist?.description.replace( /(<([^>]+)>)/ig, '')}
          </p>
        </div>
      </div>
  );
};

export default AlbumCard;
