export interface Album{
    album_type:string
    id:string
    name:string
    images:AlbumImage[]
    artists:Artist[]
}
interface AlbumImage{
    height:number|null
    url:string
    width:number|null
}
interface Artist{
    name:string
}