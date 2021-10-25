import {useState,createContext,useContext,useEffect} from 'react'
import Track from '../types/Track'

interface TrackContextProps{
    track:Track|null
    addTrack:(tr:Track) => void
    togglePlaying:() => void
    playTrack:()=>void
    playing:boolean
    stopTrack:()=>void
}

const TrackContext = createContext({} as TrackContextProps)

const TrackProvider = ({children}:any) => {
    const [track,setTrack] = useState<Track | null>(null)
    const [playing,setPlaying] = useState(false)
    const [audio,setAudio] = useState<HTMLAudioElement | null>(null)
    const addTrack = (tr:Track) => {
        console.log('I am added new Track')
        stopTrack()
        setTrack(tr)
    }
    const togglePlaying = () => {
        setPlaying(pl => !pl)
    }
    const playTrack = () => {
        console.log('I am playing new track')
        if(audio){
            setPlaying(true)
            audio.play()
        }
    }
    const stopTrack = () => {
        console.log('I stopped previous track')
        if(audio && playing){
            setPlaying(false)
            audio.pause()
        }
    }
    useEffect(()=>{
        if(track && track.preview_url){
            setAudio(new Audio(track.preview_url))
        }
    },[track])
    return <TrackContext.Provider value={{addTrack,togglePlaying,track,playTrack,stopTrack,playing}}>
        {children}
    </TrackContext.Provider>
}

export default TrackProvider

export const useTrack = () => useContext(TrackContext)