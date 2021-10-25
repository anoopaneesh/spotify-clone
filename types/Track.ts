import { Album } from "./Album";

export default interface Track{
    added_at:string
    duration_ms:number
    id:string
    name:string
    popularity?:number
    album:Album
}