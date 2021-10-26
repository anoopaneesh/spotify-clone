import { PauseIcon, PlayIcon } from "@heroicons/react/solid"
import Image from 'next/image'
import NextIcon from "./icons/NextIcon"
import noTrack from '../images/no-track.png'
import PrevIcon from "./icons/PrevIcon"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/react"
import { useTrack } from "../context/TrackContext"
import Track from "../types/Track"
const Player = () => {
    const handleChange = (e:any) => {
        console.log(e)
    }
    const {track,playTrack,stopTrack,playing,currentTime} = useTrack()
    const progress = (currentTime/30.040816)*100
    const handlePlay = () => {
        if(playing){
            stopTrack()
        }else{
            playTrack()
        }
    }
    function getArtists(track:Track){
        return getCleanString(track.album.artists.map(artist => artist.name).join().toString())
    }
    const getCleanString = (myString:string) => {
        return myString.replace( /(<([^>]+)>)/ig, '').replace(/&amp;/g, "&")
      }
    return (
        <div className="fixed bottom-0 z-20 text-white h-24 w-full bg-[#181818] border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 px-8">
            {/* Left */}
            <div className="md:flex hidden items-center space-x-4">
                <div className="relative w-20 h-20">
                <Image
              src={track ? track.album.images[0]?.url: noTrack}
              layout="fill"
            />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-sm text-white">{track?.name || ''}</p>
                    <p className="text-xs text-gray-500">{track ? getArtists(track) : ''}</p>
                </div>
            </div>
            {/* Middle */}
            <div className="flex-1 flex flex-col space-y-2 items-center justify-center">
                <div className="flex space-x-2 items-center"><PrevIcon color="gray" height="20px" width="20px"/>
                {playing ?<PauseIcon onClick={handlePlay} className="h-11 w-11 hover:scale-105 cursor-pointer" /> :<PlayIcon onClick={handlePlay} className="h-11 w-11 hover:scale-105 cursor-pointer" />}
                
                
                <NextIcon color="gray" height="20px" width="20px"/>
                </div>
                <div className="w-full bg-white bg-opacity-10 overflow-hidden rounded-full h-1">
                    <div className="h-full bg-white" style={{width:`${progress}%`}}></div>
                </div>
            </div>
            {/* Right */}
            <div className="hidden md:flex justify-end items-center">
                <div className="w-32">
                <Slider aria-label="slider-ex-2" colorScheme="green" defaultValue={30} onChangeEnd={handleChange}>
                <SliderTrack>
                <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
                </div>
            </div>
        </div>
    )
}
export default Player
