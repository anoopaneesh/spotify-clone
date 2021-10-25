export interface Collection{
    label:string
    albums:AlbumDemo[]
}

export interface AlbumDemo{
    title: string
    thumbnail: string
    subtitle: string
}