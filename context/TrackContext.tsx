import {useState,createContext,useContext,useEffect} from 'react'
import Track from '../types/Track'

interface TrackContextProps{
    track:Track|null
    addTrack:(tr:Track) => void
    togglePlaying:() => void
    playTrack:()=>void
    playing:boolean
    currentTime:number
    stopTrack:()=>void
}

const TrackContext = createContext({} as TrackContextProps)

const TrackProvider = ({children}:any) => {
    const [track,setTrack] = useState<Track | null>(null)
    const [playing,setPlaying] = useState(false)
    const [audio,setAudio] = useState<HTMLAudioElement | null>(null)
    const [currentTime,setCurrentTime] = useState(0)
    const addTrack = (tr:Track) => {
        stopTrack()
        setTrack(tr)
    }
    const togglePlaying = () => {
        setPlaying(pl => !pl)
    }
    const playTrack = () => {
        if(audio){
            setPlaying(true)
            audio.play()
        }
    }
    const stopTrack = () => {
        if(audio && playing){
            setPlaying(false)
            audio.pause()
        }
    }
    useEffect(()=>{
        if(track && track.preview_url){
            const a = new Audio(track.preview_url)
            setCurrentTime(0)
            a.ontimeupdate = (e) => {
                setCurrentTime(a.currentTime)
            }
            a.onended = () => {
                setPlaying(false)
                setCurrentTime(0)
            }
            setAudio(a)
        }
    },[track])
    return <TrackContext.Provider value={{addTrack,togglePlaying,track,playTrack,stopTrack,playing,currentTime}}>
        {children}
    </TrackContext.Provider>
}

export default TrackProvider

export const useTrack = () => useContext(TrackContext)