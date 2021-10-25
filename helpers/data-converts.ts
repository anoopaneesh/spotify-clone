import { Album } from "../types/Album";
import { Playlist } from "../types/Playlist";
import Track from "../types/Track";

export const albumToTracks = (album:Album,arr:any) => {
    let tracks:Track[] = arr.items.map((item: any) => {
        return {
            added_at:'',
            duration_ms:item.duration_ms,
            id:item.id,
            name:item.name,
            album,
            preview_url:item.preview_url,
        }
    })
    return tracks
}



export const playlistToTracks = (playlist:Playlist,arr:any) => {
    let tracks : Track[] = arr.items.map((item:any) => {
        return{
            added_at:item.added_at,
            id:item.track.id,
            name:item.track.name,
            album:item.track.album,
            duration_ms:item.track.duration_ms,
            popularity:item.track.duration_ms,
            preview_url:item.track.preview_url
        }
    })
    return tracks
}