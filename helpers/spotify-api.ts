import { Album } from "../types/Album"
import { Playlist } from "../types/Playlist"
import { albumToTracks, playlistToTracks } from "./data-converts"

export const getAlbumTracks = (album:Album,token:string) => {
    const {id} = album
    return new Promise<any>(async(resolve,reject) => {
        fetch(`https://api.spotify.com/v1/albums/${id}/tracks?limit=10&offset=0`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }).then(res => res.json()).then(data => {
            let tracks = albumToTracks(album,data)
            resolve(tracks)
        }).catch(err=>reject(err))
    })
}

export const getPlaylistTracks = (playlist:Playlist,token:string) => {
    const {id} = playlist
    return new Promise<any>(async(resolve,reject) => {
        fetch(`	https://api.spotify.com/v1/playlists/${id}/tracks?limit=10&offset=5`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        }).then(res => res.json()).then(data => {
            let tracks = playlistToTracks(playlist,data)
            resolve(tracks)
        }).catch(err=>reject(err))
    })
}