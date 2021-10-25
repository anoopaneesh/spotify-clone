export interface Playlist{
    id:string
    name:string
    images:PlaylistImage[]
    description:string
}
interface PlaylistImage{
    height:number|null
    url:string
    width:number|null
}