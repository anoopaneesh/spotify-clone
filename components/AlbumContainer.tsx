import { Album } from "../types/Album"
import { AlbumDemo } from "../types/DemoType"
import { Playlist } from "../types/Playlist"
import AlbumCard from "./AlbumCard"

interface CollectionProps{
    label:string
    albums?:Album[]
    playlists?:Playlist[]
}
const AlbumContainer = ({label,albums,playlists}:CollectionProps) => {
    return (
        <div className="w-full px-8 md:px-16 space-y-4">
            <div className="flex items-baseline justify-between">
            <h1 className="text-2xl font-bold">{label}</h1>
            <p className="text-xs text-gray-400 cursor-pointer hover:underline font-bold">SEE ALL</p>
            </div>
            <div className="flex space-x-4 overflow-scroll scrollbar-hide">
                {albums && albums.map(album => (<AlbumCard key={album.id} album={album} />))}
                {playlists && playlists.map(playlist => (<AlbumCard key={playlist.id} playlist={playlist} />))}
            </div>
        </div>
    )
}

export default AlbumContainer
